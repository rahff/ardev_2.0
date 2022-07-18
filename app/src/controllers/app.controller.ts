import { Body, Controller, Get, NotFoundException, Param, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from '../services/app.service';
import { environment } from '../environments/environment';
import { PortfolioService } from '../services/portfolio.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CalendarService } from 'src/services/calendar.service';
const strapiImgUrl = environment.strapiUploadPath

@Controller()
export class AppController {
  
  constructor(private readonly appService: AppService,
              private portfolioService: PortfolioService,
              private calendarService: CalendarService) {}

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

  @Get('get-strated')
  getStartedPage(@Res() res: Response){
    return res.render('inner-page');
  }

  @Get('rdv-scheduler')
  async getRdvScheduler(@Res() res: Response){
    const calendarData = this.calendarService.getCalendar();
    return res.render('rdv-scheduler', {calendarData: calendarData});
  }

  @Post('contact')
  async contact(@Req() req: Request) {
    const message = await this.appService.postMessage(req.body);
    return message;
  }

  @Post('quote')
  @UseInterceptors(FilesInterceptor('files.documents'))
  async postQuote(@Req() req: Request){
    const quote = await this.appService.postQuote(req.body);
    return quote;
  }
}
