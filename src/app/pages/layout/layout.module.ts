import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/share/icons-provider.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    IconsProviderModule,
    CommonModule,
    LayoutRoutingModule,
    NzLayoutModule,
    NzMenuModule
  ]
})
export class LayoutModule { }
