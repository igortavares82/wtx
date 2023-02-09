import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TruckScoreController } from './truck-score.controller';
import { TruckScore } from './truck-score.entity';
import { TruckScoreService } from './truck-score.service';
import { FactorCalculator } from 'src/factor/factor.calculator';

@Module({
    imports: [TypeOrmModule.forFeature([TruckScore])],
    controllers: [TruckScoreController],
    providers: [TruckScoreService, FactorCalculator],
    exports: [TruckScoreService]
})
export class TruckScoreModule { }
