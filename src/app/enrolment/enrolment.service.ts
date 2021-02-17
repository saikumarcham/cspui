import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators'
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppserviceService {
  public headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

constructor(private http: HttpClient) { }


private StudentList = new BehaviorSubject<any>('john');
castUser = this.StudentList.asObservable();

editUser(newUser)
{
  this.StudentList.next(newUser); 
}


httpGetCall(): Observable<any>  {
  return this.http.get('https://localhost:44381/GetStuentList');
}

httpGetSchoolData(): Observable<any>  {
  return this.http.get('https://localhost:44381/GetStuentList');
}

httpGetByID(id:any): Observable<any>  {
  return this.http.get('https://localhost:44381/GetStudnetById/'+ id);
}


public addRecord(data : any): Observable<any>
{
  return this.http.post('https://localhost:44381/AddStudent',data, { headers: this.headers });
}
}
