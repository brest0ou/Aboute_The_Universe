import {Planet} from "./planet.interface"

export interface PlanetDetails {
    count: number;
    next: null | string;
    previous: null | string;
    results: Planet[]
}
