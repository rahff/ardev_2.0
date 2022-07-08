import { Injectable } from '@nestjs/common';
import { PortfolioItem } from 'src/entities';
import { StrapiApi } from 'strapi-adapter';

@Injectable()
export class PortfolioRepository {

    constructor(private strapiAdapter: StrapiApi){}


    async getPortfolioItem(id: string): Promise<PortfolioItem> {
        const response = await this.strapiAdapter.get<PortfolioItem>({entityName: "portfolio-items", param: id});
        return response.data as PortfolioItem;
    }
}
