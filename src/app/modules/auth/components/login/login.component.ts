import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { NavigateService } from 'src/app/core/services/navigate/navigate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup<TLoginForm>;
  hide = true;
  loginError: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navigateService: NavigateService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group<TLoginForm>({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(80),
      ]),
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const payload = this.loginForm.value as ILogin;
    this.authService
      .login(payload)
      .subscribe({
        next: (loggedIn: boolean) => {
          if (loggedIn && !(loggedIn as any).error) {
            localStorage.setItem('token', (loggedIn as any).accessToken);
            this.navigateService.toHome();
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

type TLoginForm = {
  [property in keyof ILogin]: FormControl<property | null>;
};

export interface ILogin {
  email: string;
  password: string
}

