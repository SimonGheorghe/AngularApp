import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Intern } from './Intern';

@Injectable({
  providedIn: 'root'
})
export class InternServiceService {
  readonly rootURL = 'https://localhost:44338/api/';
  constructor(private http: HttpClient) { }
  
  list: Intern[];

  postIntern(formData: Intern){
    return this.http.post(this.rootURL+'Intern', formData);
  }
  putIntern(formData: Intern){
    return this.http.put(this.rootURL+'Intern/'+formData.Id, formData);
  }
  deleteIntern(id:number){
    return this.http.delete(this.rootURL+'Intern/'+id);
  }
  
  refreshList(){
    this.http.get(this.rootURL + 'Intern')
    .toPromise()
    .then(res => {this.list = res as Intern[];
    console.log('Get List')});
  }
}
