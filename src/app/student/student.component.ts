import { Component, OnInit } from '@angular/core';
import { StudentService } from "src/app/shared/student.service";
import { NgForm } from "@angular/forms";
import { debug } from "util";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service: StudentService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.form.reset();
    this.service.formData = {
      Id: 0,
      FirstName: "",
      MiddleName: "",
      LastName: "",
      Mobile: "",
      Telephone: "",
      Email:"",
      Address:"",
      DOB:null

    };
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0) this.insertRecord(form);
    else this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.PostStudent().subscribe(
      res => {
        //debugger;
        this.resetForm(form);
      },
      err => {
        //debugger;
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.PutStudent().subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    );
  }

}
