import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { 
    path:'',component:LayoutComponent,
    children:[
      { 
        path:'dashboard',
        loadChildren:() => import('./dashboard/dashboard.module').then(m=>m.DashboardModule),
        data: {
          fullUrl: '/pages/dashboard'
        }
      },
      { 
        path: 'system', 
        loadChildren: () => import('./system/system.module').then(m => m.SystemModule),
        data:{
          fullUrl:'/pages/system'
        }
      },
      { 
        path: 'users', 
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
        data:{
          fullUrl:'/pages/users'
        }
      },
      { path: '', redirectTo:'dashboard' },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
