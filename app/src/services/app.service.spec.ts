import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../controllers/app.controller';
import { HomeRepository } from '../dao/home-dao';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;
  let homeDaoSpy: any;
  beforeEach(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, HomeRepository],
    }).compile();
    homeDaoSpy.getDataHome.and.returnValue(new Promise((resolve)=> resolve({})))
  });
});