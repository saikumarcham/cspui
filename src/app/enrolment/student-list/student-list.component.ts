import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppserviceService } from '../enrolment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  providers: [AppserviceService]
})
export class StudentListComponent implements OnInit {
  public productForm : FormGroup;
  public products: any;
  private _appserviceService : AppserviceService;
  errorData: { reason: any; };
  constructor(private fb: FormBuilder, private aps:AppserviceService,private router: Router)  {

    this._appserviceService = aps;
    this._appserviceService.httpGetCall().subscribe((data:any)=>
    {
      this.products = data;
    }
    );
   }
   ngOnInit(): void {
  }

  editLink(params: any) {
    this.router.navigate(['/student-edit'],
      {
        queryParams: { sid: params }
      });
  }

  deleteProduct(params: any) {
  }
}
