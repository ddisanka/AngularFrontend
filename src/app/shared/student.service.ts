import { Injectable } from '@angular/core';
//import { FormBuilder, Group } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StudentDetail } from './student.model';

const httpOptions={
  headers:new HttpHeaders({
    'Access-Control-Allow-Origin':'http://localhost:4200'
  })
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {
formData: StudentDetail;
readonly BaseURI = "https://localhost:5001/api";
list: StudentDetail[];
  constructor(private http: HttpClient) { }
  
  PostStudent(){
    return this.http.post(this.BaseURI + '/Student/Register/',this.formData, httpOptions);
  }
  PutStudent(){
    return this.http.put(this.BaseURI + '/Student'+this.formData.Id, this.formData);
  }

}
