import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  url = 'https://restcountries.com/v3.1'

  constructor(private http : HttpClient) { }

  getCountryAll() : Observable<any> {
    return this.http.get(this.url + '/all');
  }

  getCountrycca2(cca3 : any) : Observable<any>{
    return this.http.get(this.url + '/alpha/' + cca3);
  }

  getCountryName(name : string) : Observable<any>{
    return this.http.get(this.url + '/name/' + name);
  }
}
