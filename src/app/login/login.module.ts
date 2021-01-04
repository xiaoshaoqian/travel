import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { ShareModule } from '../share/share.module';
import { NgZorroAntdModule } from '../share/ng-zorro-antd.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginFormComponent,LoginComponent],
  imports: [
    ShareModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  providers: [AuthService]
})
export class LoginModule { }
