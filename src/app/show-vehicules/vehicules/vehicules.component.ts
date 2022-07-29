import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicle.interface';
import { VehicleDetails } from 'src/app/interfaces/vehicle-details.interface';
import { Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.scss']
})
export class VehiculesComponent implements OnInit {


  @Output() myVehicleEvent = new EventEmitter

  getVehicles: Vehicle[] = [];
  stockAllVehicles: Vehicle[] = [];
  getCountsVehicles!: number;

  constructor(private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
   await this.getNumberVehicles();
    this.getAllVehicles();
   
  }

  addNewItem(vehicle: Vehicle){
    this.myVehicleEvent.emit(vehicle);
  }

  getAllVehicles()
  {
    this.getVehicles;
    this.stockAllVehicles;
    let page = Math.ceil(this.getCountsVehicles / 9);
    console.log(page)
        for(let i =0; i < page; i++){

          this.http.get<VehicleDetails>(`https://swapi.dev/api/vehicles/?page=${i}`).subscribe(vehicle =>{        
          this.getVehicles = this.getVehicles.concat(vehicle.results)
          this.stockAllVehicles = this.stockAllVehicles.concat(vehicle.results)
          //console.log(this.getVehicles);
          //console.log(this.stockAllVehicles);
       }) 
        }

  }

  async getNumberVehicles(): Promise <void>
  {
    return new Promise ((resolve) => {

      this.http.get('https://swapi.dev/api/vehicles/').subscribe((vehicle:any)=> {
      this.getCountsVehicles = vehicle.count;   
      resolve();
      })
    })
  }

  filterByPrice(event: any){
   this.getVehicles = this.stockAllVehicles;
    const PARSED = parseInt(event.target.value)
    
    if(PARSED == 1)
    {
      this.getVehicles = this.getVehicles.filter((vehicles: Vehicle) => Number(vehicles.cost_in_credits) < 10000);
    }
    if(PARSED == 2 )
    {
      
      this.getVehicles = this.getVehicles.filter((vehicles: Vehicle) => (vehicles.cost_in_credits) == "unknown");
    }
    if(PARSED == 3 )
    {
      this.getVehicles = this.getVehicles.filter((vehicles: Vehicle) => Number(vehicles.cost_in_credits) > 100000 );
      
    }
    
  }
}
