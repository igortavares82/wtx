import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { TruckTypeAvgPrice } from 'src/value-object/truck-type-avg-prive';
import * as fastcsv from 'fast-csv';
import * as fs from 'fs';

@Injectable()
export class AvgPriceHelper {
    
    constructor() {}

    async getAvgPriceByTrucktype(): Promise<TruckTypeAvgPrice[]> {

        let result: TruckTypeAvgPrice[] = []

        await axios
        .get('https://bit.ly/avg-price-by-truck-type')
        .then(async ({ data }) => {
          await new Promise((resolve, reject) => {
            fastcsv
              .parseString(data, { headers: true })
              .on('error', (error) => reject(error))
              .on('data', (data: TruckTypeAvgPrice) =>
                result.push(data),
              )
              .on('end', resolve);
          });
        });

        return result;
    }
}