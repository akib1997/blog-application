import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/core/services/articles/article.service';
import { NavigateService } from 'src/app/core/services/navigate/navigate.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
  articleForm!: FormGroup;
  constructor(
    private navigateService: NavigateService,
    private fb: FormBuilder,
    private articleServie: ArticleService
  ) {
    this.initForm();
  }

  ngOnInit() {}

  initForm(): void {
    this.articleForm = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(5)]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      body: [null, [Validators.required, Validators.minLength(20)]],
      published: [false, [Validators.required]],
    });
  }

  submit(): void {
    // console.log(this.articleForm.value);
    if (this.articleForm.valid) {
      const payload = this.articleForm.value;
      this.articleServie.create(payload).subscribe({
        next: () => {
          console.log('Created');
        },
        error: () => {
          console.warn('Error');
        },
      });
    }
  }

  back(): void {
    this.navigateService.back();
  }
}
