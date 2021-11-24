import { Component, OnInit } from '@angular/core';
import { City } from './shared/model/city.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showCities: boolean = true;
  title: string;
  cities: City[];
  toggleMsg: string = 'Verberg lijst met steden.';
  newCity: string = '';
  textVisible:boolean = true;
  currentCity:City;
  cityPhoto:string = '';

  ngOnInit() {
    this.title = 'Mijn favoriete steden via Model'
    this.cities = [
      new City(1, 'Groningen', 'GR'),
      new City(2, 'Hengelo', 'O'),
      new City(3, 'Den Haag', 'ZH'),
      new City(4, 'Enschede', 'O'),

    ];
    this.showCities = this.cities.length > 3;

  }
  btnClick() {
    alert('Uw bestelling wordt uitgevoerd!')
  }
  toggleCities() {
    this.showCities = !this.showCities;
    this.showCities
      ? this.toggleMsg = 'verberg lijst met steden.'
      : this.toggleMsg = 'Toon de lijst met steden.';
  }
  showCity(city: City) {
    this.currentCity = city;
    this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
    alert('Uw favoriete stad is: ' + city.name);
  }
  changeCity(value: string) {
    this.newCity = value;
  }
  addCity(value:string){
    let addedCity = new City(
      this.cities.length +1, // id
      value,        //naam
      'Onbekend');  //provincie
      this.cities.push(addedCity);
  }
  toggleText() {
    this.textVisible = !this.textVisible;
  }
}
