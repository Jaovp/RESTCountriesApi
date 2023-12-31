import { Component, OnInit } from '@angular/core';
import { CountriesApiService } from 'src/app/model/services/countries-api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {

  results!: Observable<any>;
  serchTerms: string = '';

  constructor(private countriesApi : CountriesApiService, private router : Router) { }

  ngOnInit() {
    this.getCountriesAll();
  }

  getCountriesAll() {
    this.results = this.countriesApi.getCountryAll();
  }

  search() {
    if (this.serchTerms.trim() !== '') {
      this.results = this.countriesApi.getCountryName(this.serchTerms);
    } else {
      this.getCountriesAll();
    }
  }
  

}
