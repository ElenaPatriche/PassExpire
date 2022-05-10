import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenPassComponent } from './gen-pass/gen-pass.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ShowPassComponent } from './show-pass/show-pass.component';

const routes: Routes = [
  {path: '', component: MainPageComponent, children: [
    {path: '', component: GenPassComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
