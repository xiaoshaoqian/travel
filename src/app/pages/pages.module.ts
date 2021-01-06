import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NgZorroAntdModule } from '../share/ng-zorro-antd.module';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
