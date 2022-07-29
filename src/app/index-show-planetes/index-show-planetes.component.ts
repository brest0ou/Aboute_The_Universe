import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Planet} from "../interfaces/planet.interface";

@Component({
  selector: 'app-index-show-planetes',
  templateUrl: './index-show-planetes.component.html',
  styleUrls: ['./index-show-planetes.component.scss']
})
export class IndexShowPlanetesComponent implements OnInit {

  // le point d'exlamation devant ma variable veux dire , soit patient sa arrive la donnée ( ! )
  planet!: Planet;
  
  // people: any;

  constructor() { }

  ngOnInit(): void {
   // this.getCharacter()
  }
  showPlanet($event: any) {
    this.planet = $event;
  console.log(this.planet);
  }

/*
  getCharacter(){
    this.http.get('https://swapi.dev/api/people/1').subscribe(data => {
      
      this.people = data
     // console.log(this.people);
    })
    */
}
  

