import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  nbrPeoples: any;
  nbrVehicles: any;
  nbrPlanets: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getNbrPeople()
    this.getNbrVehicles()
    this.getNbrPlanet()
  }

  getNbrPeople(){
    this.http.get('https://swapi.dev/api/people').subscribe(data =>{
      this.nbrPeoples = data;
     // console.log(this.nbrPeoples);
    })
  }

  getNbrVehicles(){
    this.http.get('https://swapi.dev/api/vehicles').subscribe(data =>{
      this.nbrVehicles = data;
     // console.log(this.nbrVehicles);
      
    })
  }

  getNbrPlanet(){
    this.http.get('https://swapi.dev/api/planets').subscribe(data =>{
      this.nbrPlanets = data;
     // console.log(this.nbrPlanets);
      
    })
  }
}
