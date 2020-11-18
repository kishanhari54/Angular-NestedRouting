import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      { path: 'Child1', component: Child1Component },
      { path: 'Child2', component: Child2Component },
      { path: '', redirectTo:'Child1' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
