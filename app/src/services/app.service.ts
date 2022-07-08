import { Injectable } from '@nestjs/common';
import { HomeRepository } from '../dao/home-repository';
import { HomeData, Message } from '../entities';


@Injectable()
export class AppService {

  constructor(private appRepository: HomeRepository){}

  async getHomeData(): Promise<HomeData> {
    const body: HomeData = await this.appRepository.getDataHome();
    return body
  }

  async postMessage(message: Message): Promise<Message> {
    const response = await this.appRepository.postMessage(message);
    return response;
  } 
}
