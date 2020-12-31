import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule } from './ng-zorro-antd.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    IconsProviderModule
  ]
})
export class ShareModule { }
