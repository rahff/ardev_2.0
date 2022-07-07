import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../controllers/app.controller';
import { HomeRepository } from '../dao/home-dao';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;
  let homeDaoSpy: any;
  beforeEach(async () => {
    homeDaoSpy = jasmine.createSpyObj("HomeDao", ["getDataHome"]);
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, HomeRepository],
    }).compile();
    homeDaoSpy.getDataHome.and.returnValue(new Promise((resolve)=> resolve({})))
  });

  describe('getHello', () => {
    it('should return home data', async () => {
      const appService = app.get<AppService>(AppService);
      const result = await appService.getHomeData()
      expect(result).toEqual({
        
      });
    });
  });
});