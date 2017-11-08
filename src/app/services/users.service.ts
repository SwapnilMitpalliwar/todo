// users.resolver.ts
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UsersResolver implements Resolve<ToDo> {
  constructor(private http: HttpClient) {}
 
  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}

export interface ToDo {
    id: number,
    name: string,
    username: string,
    email: string,
    phone:string
    website:string
}