import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  FormControl,
  FormControlName,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private afAuth: AngularFireAuth) {}

  async login() {
    console.log("hello");
    if (this.loginForm.invalid) {
      console.log("error");
      this.errorMessage = '이메일과 비밀번호를 올바르게 입력해주세요.';
      return;
    }

    const email = this.loginForm.get('email')?.value?.trim() ?? '';
    const password = this.loginForm.get('password')?.value;

    try {
      await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      alert('로그인 성공');
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  hello() {
    console.log("hello");
  }
}
