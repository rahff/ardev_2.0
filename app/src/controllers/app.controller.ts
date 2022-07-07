import { Controller, Get, NotFoundException, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from '../services/app.service';
import { environment } from 'src/environments/environment';
const strapiImgUrl = environment.strapiUploadPath

@Controller()
export class AppController {
  
  constructor(private readonly appService: AppService) {}

  @Get()
  async root(@Res() res: Response) {
    const data = await this.appService.getHomeData();
    if(!data) throw new NotFoundException('not found');
    return res.render('index', { 
      title: 'A&R Developpement',
      imgBaseUrl: strapiImgUrl,
      collaborators: data.collaborators,
      services: data.services,
      partners: data.partners,
      portfolioItems: data.portfolio_items
    })
  }
}
