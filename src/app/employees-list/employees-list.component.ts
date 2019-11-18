import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RestApiService } from '../services/rest-api.service';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  //@Input() employeeDetails = { name: '', email: '',date:'',rating:''}

  constructor(
    public restApi: RestApiService, 
    public router: Router,
    public location: Location
  ) { }

  ngOnInit() { }
  
  refesh():void{
    this.router.navigateByUrl('/Geveo/EmployeesList',{skipLocationChange:true}).then(()=>{
      this.router.navigate([decodeURI(this.location.path())])
    })
 }
   
  //addEmployee() {
   // if(window.confirm('Are you sure, you want to create New Member?')){
    //this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
   // })
     // this.refesh()
 // }
//}

}