import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  captchaSrc: SafeUrl = '';
  captchaUuid: string = '';
  imgSpinning: boolean = false;
  validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    // private santinizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
      captcha: [null, [Validators.required]]
    });
    this.getCaptcha();
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    var param = {
      username: this.validateForm.get('userName')?.value,
      password: this.validateForm.get('password')?.value,
      code: this.validateForm.get('captcha')?.value,
      uuid: this.captchaUuid
    };

    this.authService.login(param).subscribe(res => {
      if (res == null) {
        alert('ff')
      } else {
      setTimeout(() => {
        return this.router.navigateByUrl('/pages/dashboard');
      }, 500);
      }
    })
  }

  getCaptcha(): void {
    this.imgSpinning = true;
    this.authService.getCaptcha().subscribe(res => {
      this.validateForm.get('captcha')?.setValue('');
      //this.captchaSrc = this.santinizer.bypassSecurityTrustUrl(window.URL.createObjectURL(res.data.captchaCode));
      this.captchaSrc = res.data.captchaCode;
      this.captchaUuid = res.data.captchaGUID;
      this.imgSpinning = false;
    })
  }
  // getCaptcha(): void {
  //   this.imgSpinning = true;
  //   this.loginService.getCaptcha(() => {
  //     this.imgSpinning = false;
  //   }).subscribe({
  //     next: response => {
  //       if (response._candy_error) {
  //         return;
  //       }
  //       this.validateForm.get('captcha').setValue('');
  //       this.captchaSrc = this.santinizer.bypassSecurityTrustUrl(window.URL.createObjectURL(response));
  //       this.imgSpinning = false;
  //     }
  //   });
  // }

}
