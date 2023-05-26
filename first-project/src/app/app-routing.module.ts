import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponent/about/about.component';
import { ToDoComponent } from './MyComponent/to-do/to-do.component';

const routes: Routes = [
  {path : '', component: ToDoComponent},
  {path : 'About', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
