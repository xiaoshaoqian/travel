import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { RoleComponent } from './role/role.component';
import { UserListComponent } from './user-list/user-list.component';
import { RoleAuthorizationComponent } from './role-authorization/role-authorization.component';
import { UserRoleComponent } from './user-role/user-role.component';


@NgModule({
  declarations: [ RoleComponent, UserListComponent, RoleAuthorizationComponent, UserRoleComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
