import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './index';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: '' , component: HomepageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomepageComponent
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
