import {Vehicle} from "./vehicle.interface"

export interface VehicleDetails {
    count: number;
    next: string;
    previous: null | string;
    results: Vehicle[];

}
