import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import { Employee } from '../modelClasses/employee';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<any> {
    return this.http.get(this.apiURL + '/employeev2/getAllNonEvaluatedUsers')
      .pipe(
        catchError(this.handleError)
      );
  }

  // HttpClient API get() method => Fetch employee
  getEmployee(id): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/employee/' + id)
  }

  // HttpClient API post() method => Create employee
  createEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL + '/employee/create', JSON.stringify(employee), this.httpOptions)
  }

  // HttpClient API put() method => Update employee
  updateEmployee(_id, employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiURL + '/employee/' + _id+'/updatePerson/', JSON.stringify(employee), this.httpOptions)
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(_id) {
    return this.http.delete<Employee>(this.apiURL + '/employee/'+_id+'/delete/', this.httpOptions)
  }

  sendEmails(email){
    return this.http.post<Employee>(this.apiURL + '/employee/'+email+'/send-email/', this.httpOptions)
  }

  updateState(_id): Observable<Employee> {
    return this.http.put<Employee>(this.apiURL + '/employee/'+_id+'/update/', this.httpOptions)
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
