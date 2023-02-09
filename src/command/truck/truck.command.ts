import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Truck } from '../../truck/truck.entity';
import { Repository } from 'typeorm';
import { TruckScoreService } from '../../truck-score/truck-score.service';
import { AvgPriceHelper } from '../../helper/helper.avg-price';

@Injectable()
export class TruckCommand2 {

    constructor(
        @InjectRepository(Truck)
        private truckRepository: Repository<Truck>,
        private truckScoreService: TruckScoreService,
        private avgPriceHelper: AvgPriceHelper
    ){}

    @Command({
        command: 'trucks:update',
        describe: 'Update trucks 2'
    })
    async update() {
        
        let trucks = await this.truckRepository.find({ relations: { score: true }});
        let avgPrices = await this.avgPriceHelper.getAvgPriceByTrucktype();

        for await (let truck of trucks) {

            let newPrice = avgPrices.find((t) => t.truck_type == truck.price)?.avg_price
            await this.truckScoreService.save2(truck, newPrice);
        }
    }
}