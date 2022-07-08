import { Body, Controller, Get, NotFoundException, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from '../services/app.service';
import { environment } from 'src/environments/environment';
import { PortfolioService } from 'src/services/portfolio.service';
const strapiImgUrl = environment.strapiUploadPath

@Controller()
export class AppController {
  
  constructor(private readonly appService: AppService,
              private portfolioService: PortfolioService) {}

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

  @Get('portfolio-details/:id')
  async getPortfolioItem(@Res() res: Response, @Param('id') id: string){
    const data = await this.portfolioService.getPortfolioItem(id);
    return res.render('portfolio-details', {portfolioItem: data, imgBaseUrl: strapiImgUrl})
  }

  @Post('contact')
  async contact(@Req() req: Request) {
    const message = await this.appService.postMessage(req.body);
    return message;
  }
}
