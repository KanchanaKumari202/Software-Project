import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApplicantManagementService {
  public getAllApplicantsUrl='http://localhost:3000/applicant/getAllNonEvaluatedUsers';
  public getAllEvaluatedUrl = 'http://localhost:3000/applicant/getAllEvaluatedUsers';
  public setEvaluatedUrl = 'http://localhost:3000/applicant/update/id';

  constructor(
   public  http: HttpClient
  ) { }

  getAllApplicants():Observable<HttpResponse<any>>{
    return this.http.get<any>(this.getAllApplicantsUrl,{observe: 'response'})
  }

  getAllEvaluated():Observable<HttpResponse<any>>{
    return this.http.get<any>(this.getAllEvaluatedUrl,{observe: 'response'})
  }

  setEvaluated(applicant,id):Observable<HttpResponse<any>> {
    return this.http.put<any>(`${this.setEvaluatedUrl}/${id}`,applicant,{observe: 'response'})
  }
}
