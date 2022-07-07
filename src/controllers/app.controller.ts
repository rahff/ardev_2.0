import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from '../services/app.service';


@Controller()
export class AppController {
  
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async root() {
    const data = await this.appService.getHomeData();
    console.log(data);
    
    return { title: 'A&R Developpement' };
  }

  @Get("data")
  async getDta(){
    const body = await this.appService.getHomeData();
    return body;
  }
}
