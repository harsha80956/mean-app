import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface CategoryPayload {
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private token: string;
  private selectedID : string
  constructor(private http: HttpClient, private router: Router) { }

  private getToken(): string {
    this.token = localStorage.getItem("mean-token");
    
    return this.token;
  }

  private request(
    method: "post" | "get" | "delete",
    type:  "category",
    category?: CategoryPayload
  ): Observable<any> {
    let base$;
    if (method === "post") {
      base$ = this.http.post(`/api/${type}`,{"category":category},{
        headers: { Authorization: `Bearer ${this.getToken()}` }
      }, );
    } else if(method === "get") {
      base$ = this.http.get(`/api/${type}`, {
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

  public GetAllCategory(): Observable<any> {
    return this.request("get", "category");
  }
  public CreateCategory(category): Observable<any> {
    return this.request("post", "category", category);
}
public DeleteCategory(category): Observable<any> {
  this.selectedID = category
  return this.request("delete", "category", category);
}
}
