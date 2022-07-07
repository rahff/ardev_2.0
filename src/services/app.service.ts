import { Injectable } from '@nestjs/common';
import { HomeDao } from 'src/dao/home-dao';
import { StrapiDataHome } from '../entities';


@Injectable()
export class AppService {

  constructor(private appDao: HomeDao){}

  async getHomeData() {
    const body: StrapiDataHome = await this.appDao.getDataHome();
    return body
  }

 
}
