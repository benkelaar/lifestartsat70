import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreativeComponent } from './creative.component';

const routes: Routes = [{ path: '', component: CreativeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreativeRoutingModule { }
