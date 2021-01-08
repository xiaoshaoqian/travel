import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'role',loadChildren:() => import('./role/role.module').then(m=>m.RoleModule),
  },
  {
    path:'role-authorization',loadChildren:()=>import('./role-authorization/role-authorization-routing.module').then(m=>m.RoleAuthorizationRoutingModule)
  },
  {
    path:'user-list',loadChildren:()=>import('./user-list/user-list.module').then(m=>m.UserListModule)
  },
  {
    path:'user-role',loadChildren:()=>import('./user-role/user-role.module').then(m=>m.UserRoleModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
