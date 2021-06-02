import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  feedbackForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    // mobile: ['', [Validators.required]],
    // password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onFeedbackSubmit() {
    if (!this.feedbackForm.valid) {
      return;
    }
    console.log(this.feedbackForm.value);
    localStorage.setItem('feedback', this.feedbackForm.value)
  }
}
