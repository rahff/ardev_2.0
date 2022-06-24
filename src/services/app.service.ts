import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { HomeDao } from 'src/dao/home-dao';
import { Collaborator, HomeData, Partner, PortfolioItem, Service, StrapiAttributeDataHome, StrapiDataHome, StrapiEntity } from '../entities';


@Injectable()
export class AppService {

  constructor(private appDao: HomeDao){}

  async getHomeData() {
    const body: StrapiDataHome = await this.appDao.getDataHome();
    return body
  }

 
}
