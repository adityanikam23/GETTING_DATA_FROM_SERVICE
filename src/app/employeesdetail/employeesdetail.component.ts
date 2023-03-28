import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employeesdetail',
  templateUrl: './employeesdetail.component.html',
  styleUrls: ['./employeesdetail.component.css']
})
export class EmployeesdetailComponent{
  employee : any;

  constructor(private common:CommonService) {

    this.employee = common.employees;

    console.log(this.employee);
    
  }
    
}
