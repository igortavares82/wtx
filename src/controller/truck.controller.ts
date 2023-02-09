import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { UpdatePriceDto } from 'src/dto/update-price.dto';
import { Truck } from 'src/entity/truck.entity';
import { TruckService } from 'src/service/truck.service';

@Controller('trucks')
export class TruckController {
  constructor(private readonly truckService: TruckService) {}

  @Get()
  getTrucks(): Promise<Truck[]> {
    return this.truckService.findAll();
  }

  @Patch(':id')
  updatePrice(
    @Param('id') id: number,
    @Body() body: UpdatePriceDto,
  ): Promise<UpdateResult> {
    return this.truckService.updatePrice(id, body);
  }
}