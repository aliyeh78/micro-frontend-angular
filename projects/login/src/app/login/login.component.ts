import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  isBoxVisible = false;
  isBoxActive = false;
  loginForm: FormGroup;

 

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Login data:', email, password);
      // Handle the login logic, such as calling an API
    }
  }
  moveBox() {
    this.isBoxVisible = true;
    setTimeout(() => {
      this.isBoxActive = !this.isBoxActive;  // Toggle between the two divs
    }, 100);  // Slight delay to apply transition smoothly
  }
}
