import { Factor } from '../factor/factor';

export class FactorMarket extends Factor {

    async getScore(args: any[]): Promise<number> {

        let score: number = 0;
        let avgPrice: number = Number(args[0]);

        if (super.truck.price < avgPrice)
            score += 0.5;

        return score;
    }
}