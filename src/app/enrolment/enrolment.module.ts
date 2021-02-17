import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourceComponent } from './cource/cource.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { EnrolmentRoutingModule } from './enrolment.module.rotuting';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppserviceService } from '../enrolment/enrolment.service';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

@NgModule({
           
  declarations: [CourceComponent, StudentComponent, TeacherComponent, StudentListComponent, StudentEditComponent],
  imports: [
    CommonModule,
    EnrolmentRoutingModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [AppserviceService]
})
export class EnrolmentModule { }
