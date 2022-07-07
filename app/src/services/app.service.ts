import { Injectable } from '@nestjs/common';
import { HomeRepository } from 'app/src/dao/home-dao';
import { HomeData } from '../entities';


@Injectable()
export class AppService {

  constructor(private appRepository: HomeRepository){}

  async getHomeData() {
    const body: HomeData = await this.appRepository.getDataHome();
    return body
  }

 
}
