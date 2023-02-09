import { Factor } from '../factor/factor';
import { Truck } from '../truck/truck.entity'

export class FactorMarket extends Factor {

    getScore(truck: Truck, args: any[]): number {

        let score: number = 0;
        let avgPrice: number = Number(args[0]);

        if (truck.price < avgPrice)
            score = 0.5;

        return score;
    }
}