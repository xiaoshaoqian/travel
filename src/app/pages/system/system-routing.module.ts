import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'authorization', loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  {
    path:'dictionary',loadChildren: () => import('./dictionary/dictionary.module').then(m => m.DictionaryModule)
  },
  {
    path:'menu-manage',loadChildren: () => import('./menu-manage/menu-manage.module').then(m => m.MenuManageModule)
  },
  {
    path:'online-statistic',loadChildren: () => import('./online-statistic/online-statistic.module').then(m => m.OnlineStatisticModule)
  },
  {
    path:'system-log',loadChildren: () => import('./system-log/system-log.module').then(m => m.SystemLogModule)
  },
  {
    path:'task-scheduler',loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
