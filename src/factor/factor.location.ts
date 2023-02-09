import { Factor } from '../factor/factor'

export class FactorLocation extends Factor {

    async getScore(args: any[]): Promise<number> {

        let score: number = 0;

        if (super.truck.location === 'Jordan')
            score += 0.5;

        return score;
    }
}