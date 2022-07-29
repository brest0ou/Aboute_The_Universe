import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../interfaces/vehicle.interface';
import { VehiculesComponent } from './vehicules/vehicules.component';

@Component({
  selector: 'app-show-vehicules',
  templateUrl: './show-vehicules.component.html',
  styleUrls: ['./show-vehicules.component.scss']
})
export class ShowVehiculesComponent implements OnInit {

  vehicle!: Vehicle;
  constructor() { }

  ngOnInit(): void {
  }

  showVehicle($event: any)
  {
    this.vehicle = $event

    console.log(this.vehicle);
    
  }
}
