import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';
import {Planet} from "../../interfaces/planet.interface";
import { PlanetDetails } from 'src/app/interfaces/planet-details.interface';


@Component({
  selector: 'app-index-planets',
  templateUrl: './index-planets.component.html',
  styleUrls: ['./index-planets.component.scss']
})
export class IndexPlanetsComponent implements OnInit {

  

  @Output() MonItemEvent = new EventEmitter();

 
  
  recupPlanets: Planet[]= [];
  planetsSaved: Planet[]= [];
  planetsCounts!: number;
  pageCounts!: number;
  selectedValue!: string;

  constructor(private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    await this.getCountPlanets() 
    await this.getNumberPage()
    this.getAllPlanets()
     
  }

  addNewItem(planet: Planet) {
    this.MonItemEvent.emit(planet);
  }
  
  async getCountPlanets(): Promise <void>{
    return new Promise ((resolve) => {
      this.http.get<PlanetDetails>('https://swapi.dev/api/planets').subscribe(data => {
        this.planetsCounts = data.count;
      //  console.log(this.planetsCounts);
        resolve()
    })
    })
  }

  getAllPlanets(){   
    this.recupPlanets;
    this.planetsSaved;
    let page = this.planetsCounts / 10;
      for (let i =0; i <= page; i++)
      {
      this.http.get<PlanetDetails>(`https://swapi.dev/api/planets/?page= ${i}`).subscribe(data => {
      this.planetsSaved = this.planetsSaved.concat(data.results);
      this.recupPlanets = this.recupPlanets.concat(data.results);
      console.log(this.recupPlanets);
      }
      )
      
    }
  }

  

  async getNumberPage(): Promise <void>
  {
   return new Promise ((resolve) => 
   {
      this.pageCounts = Math.ceil(this.planetsCounts /10);
      resolve();
   })
  }

/**
 * -- Objectif afficher les planètes par le nombres d'habitants --
 * 
 * 1) j'ai déjà une fonction qui m'affiche les resultat de l'API 
 *    a. je me sert de ma fonction déjà présente 
 * 
 * 2) afficher les planètes de 0 à 100.000 pour commencer 
 *    a. filtrer les données de getAllPlanets() pour n'afficher que les planète égale ou inferieur à 100.000
 */


 filterByPopulation(event: any)
 {

  this.recupPlanets = this.planetsSaved
  
  this.selectedValue = event.target.value
  const PARSED = parseInt(this.selectedValue)
    if (PARSED === 1)
    {
      this.recupPlanets = this.recupPlanets.filter((planet: Planet)  => Number(planet.population) < 100000) 
    }
    if (PARSED === 2)
    {
      this.recupPlanets = this.recupPlanets.filter((planet: Planet)  => Number(planet.population) > 100000 && Number(planet.population) <= 1000000000) 
    }
    if (PARSED === 3)
    {
      this.recupPlanets = this.recupPlanets.filter((planet: Planet)  => Number(planet.population) > 100000000) 
    }
 console.log(PARSED)
}
}
