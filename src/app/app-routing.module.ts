import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEvaluationContainerComponent } from './components/view-evaluation/view-evaluation-container/view-evaluation-container.component';
import { ViewLoginComponent } from './components/view-login/view-login.component';
import { ViewLearnContainerComponent } from './components/view-learn/view-learn-container/view-learn-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: ViewLoginComponent },
  { path: 'evaluation', component: ViewEvaluationContainerComponent }  ,
  { path: 'learn', component: ViewLearnContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
