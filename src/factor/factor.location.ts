import { Factor } from '../factor/factor'
import { Truck } from '../truck/truck.entity'

export class FactorLocation extends Factor {

    getScore(truck: Truck, args: any[]): number {

        let score: number = 0;

        if (truck.location === 'Jordan')
            score = 0.5;

        return score;
    }
}