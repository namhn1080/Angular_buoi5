import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArcticlesService {

  constructor(private http:HttpClient) { 
  }
  
  getPa(page: number , perpage: number): Observable<any>{
    let result = this.http.get(` https://social.runwayclub.dev/api/articles/latest?page=${page}&per_page=${perpage}`);
   return result;
  
}
}
