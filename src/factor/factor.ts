import { Truck } from '../truck/truck.entity'

export class Factor {
    
    protected truck: Truck

    constructor(truck: Truck) {
        this.truck = truck
    }

    async getScore(args: any[]): Promise<number> {
        return 0
    }
}