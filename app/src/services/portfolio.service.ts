import { Injectable } from '@nestjs/common';
import { PortfolioRepository } from 'src/dao/portfolio-repository';
import { PortfolioItem } from 'src/entities';

@Injectable()
export class PortfolioService {

    constructor(private portfolioRepository: PortfolioRepository){}

    async getPortfolioItem(id: string): Promise<PortfolioItem>{
        const response = await this.portfolioRepository.getPortfolioItem(id);
        return response;
    }
}
