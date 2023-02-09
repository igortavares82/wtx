import { Injectable } from '@nestjs/common';
import { FactorLocation } from './factor.location';
import { FactorMarket } from './factor.market'; 
import { Factor } from './factor';
import { Truck } from '../truck/truck.entity'

@Injectable()
export class FactorCalculator {

    private factors: Factor[] = [];

    constructor(){
        this.factors.push(new FactorLocation());
        this.factors.push(new FactorMarket());
    }

    calculate(truck: Truck, args: any[]): number {
        
        let score: number = truck.score.score;
        this.factors.forEach((factor) => score += factor.getScore(truck, args));
     
        return score;
    }
}