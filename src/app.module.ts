import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { HomeDao } from './dao/home-dao';
import { AppService } from './services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, HomeDao],
})
export class AppModule {}
