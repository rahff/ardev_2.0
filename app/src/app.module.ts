import { Module } from '@nestjs/common';
import { StrapiApi } from 'strapi-adapter';
import { AppController } from './controllers/app.controller';
import { HomeRepository } from './dao/home-repository';
import { AppService } from './services/app.service';
import { environment } from './environments/environment'
import { PortfolioService } from './services/portfolio.service';
import { PortfolioRepository } from './dao/portfolio-repository';
import { QuoteRepository } from './dao/quote-repository';

const strapiAdapterFactory = ()=> new StrapiApi(environment.strapiUrl);

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService, 
    HomeRepository,
    PortfolioService,
    PortfolioRepository,
    QuoteRepository,
    {provide: StrapiApi, useFactory: strapiAdapterFactory}],
})
export class AppModule {}
