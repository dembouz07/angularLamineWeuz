import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherFormComponent } from './teacher/teacher-form/teacher-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'teachers', pathMatch: 'full' },
  { path: 'teachers', component: TeacherListComponent },
  { path: 'addTeacher', component: TeacherFormComponent },
  { path: 'editTeacher/:id', component: TeacherFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
