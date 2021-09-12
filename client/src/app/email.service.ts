import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface EmailPayload {
  category: string;
  email:string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private token: string;
  private selectedID: string;
  categoryId: any;
  constructor(private http: HttpClient, private router: Router) { }
  
  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("mean-token");
    }
    return this.token;
  }

  private request(
    method: "post" | "get" | "delete",
    type:  "email",
    email?: EmailPayload
  ): Observable<any> {
    let base$;
    if (method === "post") {
      base$ = this.http.post(`/api/${type}`, email,{
        headers: { Authorization: `Bearer ${this.getToken()}` }
      }, );
    } else if(method === "get") {
      base$ = this.http.get(`/api/${type}/${this.categoryId}`, {
        headers: { Authorization: `Bearer ${this.getToken()}` }
      });
    }else if(method === "delete") {
      base$ = this.http.delete(`/api/${type}/${this.selectedID}`, {
        headers: { Authorization: `Bearer ${this.getToken()}` }
      });
    }

    const request = base$.pipe(
      map((data) => {
        if (data) {
        }
        return data;
      })
    );

    return request;
  }

  public GetAllEmail(id): Observable<any> {
    this.categoryId = id
    return this.request("get", "email");
  }
  public CreateEmail(email): Observable<any> {
    return this.request("post", "email", email);
}
public DeleteEmail(categoryId): Observable<any> {
  this.selectedID = categoryId
  return this.request("delete", "email");
}
}
