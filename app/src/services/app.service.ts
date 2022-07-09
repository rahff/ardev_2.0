import { Injectable } from '@nestjs/common';
import { HomeRepository } from '../dao/home-repository';
import { Quote, HomeData, Message } from '../entities';
import { QuoteRepository } from '../dao/quote-repository';

@Injectable()
export class AppService {

  constructor(private appRepository: HomeRepository,
              private QuoteRepository: QuoteRepository){}

  async getHomeData(): Promise<HomeData> {
    const body: HomeData = await this.appRepository.getDataHome();
    return body
  }

  async postMessage(message: Message): Promise<Message> {
    const response = await this.appRepository.postMessage(message);
    return response;
  } 

  async postQuote(Quote: Quote): Promise<Quote> {
    const response = await this.QuoteRepository.postQuote(Quote);
    return response;
  }
}
