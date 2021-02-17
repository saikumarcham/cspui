import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppserviceService } from '../enrolment.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss'],
  providers: [AppserviceService]
})
export class StudentEditComponent implements OnInit {

  public productForm : FormGroup;
  private _appserviceService : AppserviceService;
  errorData: { reason: any; };
  
  constructor(private fb: FormBuilder, private aps:AppserviceService, private router: Router, private active: ActivatedRoute) 
   {
    this._appserviceService = aps;
    this.productForm = this.fb.group({sid:[''], name:['',Validators.required], cource:[''], email:[''], phone:[''], address: this.fb.array([])});
   }

   getAddress(): FormArray { return this.productForm.get('address') as FormArray;}

      ngOnInit(): void {
      //  this.getAddress().push(this.newAddress());
        this.active.queryParams.pipe(filter(params => params.sid))
          .subscribe(params => {
            this._appserviceService.httpGetByID(params.sid).subscribe((data)=>
            {
              //this.productForm = data;

              this.productForm.controls.name.setValue(data.name);
              this.productForm.controls.cource.setValue(data.cource);
              this.productForm.controls.email.patchValue(data.email);
              this.productForm.controls.phone.patchValue(data.phone);
              this.productForm.controls.sid.patchValue(data.sid);

            });
          });      }
 
     removeAddress(i: number){ this.getAddress().removeAt(i); }
     addAddress() { this.getAddress().push(this.newAddress()); }
     newAddress(): FormGroup {return this.fb.group({street: '', city: '', });}
    
  SubmitForm()
  {
    const ad =[];
    this.productForm.value.address.forEach(element => {
      ad.push({
        street : element.street,
        city : element.city
      })
    });
    const savedata = {
      // sid: this.productForm.value.sid,
      name: this.productForm.value.name,
      cource: this.productForm.value.cource,
      email : this.productForm.value.email,
      phone : this.productForm.value.phone,
      address : ad
      };
    this._appserviceService.addRecord(savedata).subscribe((data: any) => {
    },
      (error: any) => {
        this.errorData = {
          reason: error.message,
        };
      }
    );
  }
}
