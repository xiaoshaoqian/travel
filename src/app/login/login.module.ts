import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { ShareModule } from '../share/share.module';
import { NgZorroAntdModule } from '../share/ng-zorro-antd.module';


@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    ShareModule,
    LoginRoutingModule,
    NgZorroAntdModule
  ]
})
export class LoginModule { }
