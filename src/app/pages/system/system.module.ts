import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { MenuManageComponent } from './menu-manage/menu-manage.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { SystemLogComponent } from './system-log/system-log.component';
import { OnlineStatisticComponent } from './online-statistic/online-statistic.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { TaskSchedulerComponent } from './task-scheduler/task-scheduler.component';


@NgModule({
  declarations: [MenuManageComponent, AuthorizationComponent, SystemLogComponent, OnlineStatisticComponent, DictionaryComponent, TaskSchedulerComponent],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
