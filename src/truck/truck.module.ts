import { Module } from '@nestjs/common';
import { TruckService } from './truck.service';
import { TruckController } from './truck.controller';
import { Truck } from './truck.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TruckCommand } from './truck.command';
import { TruckCommand2 } from '../command/truck/truck.command';
import { TruckScoreModule } from '../truck-score/truck-score.module';
import { AvgPriceHelper } from '../helper/helper.avg-price';

@Module({
  imports: [TypeOrmModule.forFeature([Truck]), TruckScoreModule],
  controllers: [TruckController],
  providers: [TruckService, AvgPriceHelper, TruckCommand, TruckCommand2],
})
export class TruckModule {}
