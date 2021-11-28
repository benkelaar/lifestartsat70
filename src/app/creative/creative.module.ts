import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreativeRoutingModule } from './creative-routing.module';
import { CreativeComponent } from './creative.component';


@NgModule({
  declarations: [
    CreativeComponent
  ],
  imports: [
    CommonModule,
    CreativeRoutingModule
  ]
})
export class CreativeModule { }
