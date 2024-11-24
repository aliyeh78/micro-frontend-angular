import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './Home/Home.component';

const routes: Routes = [
  { path: '', component: homeComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule,
    ]
})
export class TattoRoutingModule { }
