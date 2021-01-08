import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { NgZorroAntdModule } from 'src/app/share/ng-zorro-antd.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    UserListRoutingModule
  ]
})
export class UserListModule { }
