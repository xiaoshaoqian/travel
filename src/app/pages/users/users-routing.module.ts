import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleAuthorizationComponent } from './role-authorization/role-authorization.component';
import { RoleComponent } from './role/role.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoleComponent } from './user-role/user-role.component';

const routes: Routes = [
  {
    path:'role',component:RoleComponent
  },
  {
    path:'role-authorization',component:RoleAuthorizationComponent
  },
  {
    path:'user-list',component:UserListComponent
  },
  {
    path:'user-role',component:UserRoleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
