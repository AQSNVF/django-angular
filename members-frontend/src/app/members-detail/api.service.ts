import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  token = 'Token 8356c2e675d8d0015c7735973bf28414eb67654b';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.token);

  constructor(private http: HttpClient) { }

  getMember(id): Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id + '/',
      { headers: this.httpHeaders });
  }

  updateMember(member): Observable<any> {
    const body = { name: member.name, surname: member.surname, phone: member.phone, address: member.address, photo: member.photo};
    return this.http.put(this.baseUrl + 'members/' + member.id + '/', body,
      { headers: this.httpHeaders });
  }

  deleteMember(id): Observable<any> {
    return this.http.delete(this.baseUrl + 'members/' + id + '/',
      { headers: this.httpHeaders });
  }
}
