import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { }

  getAllCollege(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getCollege")
  }
  addData(data: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/addClass", data)
  }
  getAllClasses(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getAllClass")
  }
  deleteClass(classId: any): Observable<any> {
    return this.httpClient.delete("http://localhost:3000/deleteClass/" + classId)
  }
  getCollegeById(classId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getClassById/" + classId)
  }
  updateData(data:any):Observable<any>{
    return this.httpClient.put("http://localhost:3000/updateClass",data)
  }
  downloadFile(classId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/downloadFile/" + classId)
  }
}
