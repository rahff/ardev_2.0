import { Injectable } from "@nestjs/common";
import { StrapiDataHome } from "src/entities"
import { stringify } from 'qs';

@Injectable()
export class HomeDao {
   async getDataHome(): Promise<StrapiDataHome> {
    const query = stringify({
        populate: {
            collaborators: {
                populate: "*"
            },
            services: {
                populate: "*"
            },
            partners: {
                populate: "*"
            },
            portfolio_items: {
                populate: "*"
            },
        }
    })
        const response = await fetch(`http://ardev_20_cms_1:1337/api/data-home?${query}`);
        const body: StrapiDataHome = await response.json()
        return body;
    }
}
