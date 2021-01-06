import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { MenuManageComponent } from './menu-manage/menu-manage.component';
import { OnlineStatisticComponent } from './online-statistic/online-statistic.component';
import { SystemLogComponent } from './system-log/system-log.component';
import { TaskSchedulerComponent } from './task-scheduler/task-scheduler.component';

const routes: Routes = [
  {
    path:'authorization',component:AuthorizationComponent
  },
  {
    path:'dictionary',component:DictionaryComponent
  },
  {
    path:'menu-manage',component:MenuManageComponent
  },
  {
    path:'online-statistic',component:OnlineStatisticComponent
  },
  {
    path:'system-log',component:SystemLogComponent
  },
  {
    path:'task-scheduler',component:TaskSchedulerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
