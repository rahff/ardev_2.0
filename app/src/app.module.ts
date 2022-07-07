import { Module } from '@nestjs/common';
import { StrapiApi } from 'strapi-adapter';
import { AppController } from './controllers/app.controller';
import { HomeRepository } from './dao/home-dao';
import { AppService } from './services/app.service';
import { environment } from './environments/environment'

const strapiAdapterFactory = ()=> new StrapiApi(environment.strapiUrl);

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService, 
    HomeRepository, 
    {provide: StrapiApi, useFactory: strapiAdapterFactory}],
})
export class AppModule {}
