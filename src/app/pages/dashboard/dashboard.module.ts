import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    ShareModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
