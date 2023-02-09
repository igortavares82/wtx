import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TruckService } from 'src/service/truck.service';
import { TruckController } from 'src/controller/truck.controller';
import { Truck } from 'src/entity/truck.entity';
import { TruckCommand2 } from 'src/command/truck/truck.command';
import { TruckScore } from 'src/entity/truck-score.entity';
import { AvgPriceHelper } from 'src/helper/helper.avg-price';

@Module({
    imports: [TypeOrmModule.forFeature([Truck]), TruckScoreModule],
    controllers: [TruckController],
    providers: [TruckService, AvgPriceHelper, TruckCommand2],
  })
  export class TruckModule {}