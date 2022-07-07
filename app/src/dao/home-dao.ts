import { Injectable } from "@nestjs/common";
import { HomeData } from "../entities";
import { StrapiApi } from 'strapi-adapter'
import { IResponse } from "../../node_modules/strapi-adapter/lib/api/interfaces/api/interfaces";

@Injectable()
export class HomeRepository {

    constructor(private strapiApi: StrapiApi){}

   async getDataHome(): Promise<HomeData> {
        const body: IResponse<HomeData> = await this.strapiApi.get<HomeData>({entityName: "data-home", populate: ["collaborators", "services", "portfolio_items", "portfolio_items.list_img.img", "partners"]})
        return body.data as HomeData;
    }
}
