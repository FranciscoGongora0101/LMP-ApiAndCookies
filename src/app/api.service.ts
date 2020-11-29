import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URLNEWS= "https://newsapi.org/v2/top-headlines?country=us&apiKey=155dad091e9247be95aae579fed7cb6a";

  constructor(private httpClient: HttpClient) { }
  
  public getNews(){
    return this.httpClient.get(this.URLNEWS);
  }
}


