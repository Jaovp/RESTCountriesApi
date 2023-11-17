import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesApiService } from 'src/app/model/services/countries-api.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.page.html',
  styleUrls: ['./country-details.page.scss'],
})
export class CountryDetailsPage implements OnInit {

  info : any;
  currencies: any[] = [];

  constructor(private actRoute: ActivatedRoute, private countriesApi : CountriesApiService) { }

  ngOnInit() {
    let cca3 = this.actRoute.snapshot.paramMap.get('cca3');
    this.countriesApi.getCountrycca2(cca3).subscribe(data => {
      this.info = data;
      this.processCurrencies();
    });
  }

  processCurrencies() {
    if (this.info && this.info[0].currencies) {
      this.currencies = Object.keys(this.info[0].currencies).map((currencyCode) => ({
        code: currencyCode,
        name: this.info[0].currencies[currencyCode].name,
        symbol: this.info[0].currencies[currencyCode].symbol,
      }));
    }
  }
}
