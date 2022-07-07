import { Injectable } from "@nestjs/common";
import { StrapiDataHome } from "src/entities"
import { StrapiApi } from 'strapi-adapter'

@Injectable()
export class HomeDao {
   async getDataHome(): Promise<StrapiDataHome> {
        const adapter = new StrapiApi('http://cms:1337/api');
        const body: any = await adapter.get({entityName: "data-home", populate: ["collaborators", "services", "portfolio_items", "portfolio_items.list_img.img", "partners"]})
        return body;
    }
}
