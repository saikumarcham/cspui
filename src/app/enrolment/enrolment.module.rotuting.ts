import { componentFactoryName } from '@angular/compiler';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CourceComponent } from './cource/cource.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

const route = [
    {path: 'course', component : CourceComponent},
    {path: 'student', component: StudentComponent},
    {path: 'student-edit', component: StudentEditComponent},
    {path: 'teacher', component: TeacherComponent},
    {path: 'student-list', component: StudentListComponent}
]

@NgModule({imports: [RouterModule.forChild(route)],exports:[RouterModule]})
    export class EnrolmentRoutingModule{}