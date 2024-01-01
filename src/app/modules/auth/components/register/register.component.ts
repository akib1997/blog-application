import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { NavigateService } from 'src/app/core/services/navigate/navigate.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registrationForm: FormGroup<TRegistrationForm>;
  hide = true;
  loginError: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navigateService: NavigateService,
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group<TRegistrationForm>({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(80),
      ]),
    });
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      return;
    }
    const payload = this.registrationForm.value as ILogin;
    this.authService
      .register(payload)
      .subscribe({
        next: (loggedIn: boolean) => {
          if (loggedIn && !(loggedIn as any).error) {
            // this.navigateService.toApp();
          } else {
            this.loginError = (loggedIn as any)?.error;
            // this.snackbarService.showError(this.loginError);
            console.log('Login failed successfully', this.loginError);
          }
        },
        error: (error) => {
          this.loginError = error?.error?.message;
          console.log('Login failed.', error);

        }
      })
      .add(() => {
        // this.spinnerService.hide();
      });
  }
}


type TRegistrationForm = {
  [property in keyof ILogin]: FormControl<property | null>;
};

export interface ILogin {
  email: string;
  password: string
}
