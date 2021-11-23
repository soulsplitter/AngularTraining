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
btnClick(){
  alert('Uw bestelling wordt uitgevoerd!')
}
toggleCities(){
  this.showCities = !this.showCities;
  this.showCities
    ? this.toggleMsg = 'verberg lijst met steden.'
    : this.toggleMsg = 'Toon de lijst met steden.';
}

}
