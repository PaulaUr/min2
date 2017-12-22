import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subjects } from '../../app/subject';
import { Student } from '../../app/student';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  subject: Subjects;
  private subjectUrl = 'http://localhost:3000/api/subjects';  // URL to web api
  private  subjBachelor = 'http://localhost:3000/api/subjects/titulacion';
  private  subjSemester = 'http://localhost:3000/api/subjects/cuatrimestre';
  private studentUrl = 'http://localhost:3000/api/students';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }
  getSubjects(): Observable<Subjects[]> {
    return  this.http.get<Subjects[]>(this.subjectUrl, {headers: this.headers});
  }
  getStudents(){
    return  this.http.get<Student[]>(this.studentUrl, {headers: this.headers});
  }
  searchByBachelor(term: string): Observable<Subjects[]> {
    const url = `${this.subjBachelor}/${term}`;
    console.log(url);
    return  this.http.get<Subjects[]>(url, {headers: this.headers});

  }
  searchBySemester(term: string): Observable<Subjects[]> {
    const url = `${this.subjSemester}/${term}`;
    console.log(url);
    return  this.http.get<Subjects[]>(url, {headers: this.headers});

  }
  update(subject: Subjects): Observable<Subjects[]> {
    console.log('updateService',subject);
    const url = `${this.subjectUrl}/${subject.name}`;
    console.log(url);
    return this.http
      .put(url, JSON.stringify(subject), {headers: this.headers})
      .catch(this.handleError);

  }
  private handleError(error: any): Promise<any> { // errores del http
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
