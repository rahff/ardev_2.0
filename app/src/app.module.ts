import { Module } from '@nestjs/common';
import { StrapiApi } from 'strapi-adapter';
import { AppController } from './controllers/app.controller';
import { HomeRepository } from './dao/home-repository';
import { AppService } from './services/app.service';
import { environment } from './environments/environment'
import { PortfolioService } from './services/portfolio.service';
import { PortfolioRepository } from './dao/portfolio-repository';
import { QuoteRepository } from './dao/quote-repository';
import { Calendar } from 'calendos';
import { CalendarService } from './services/calendar.service';

const strapiAdapterFactory = ()=> new StrapiApi(environment.strapiUrl);
const calendarFactory = ()=> new Calendar()

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService, 
    HomeRepository,
    PortfolioService,
    PortfolioRepository,
    QuoteRepository,
    CalendarService,
    {provide: StrapiApi, useFactory: strapiAdapterFactory},
    {provide: Calendar, useFactory: calendarFactory}
  ],
})
export class AppModule {}
