import { Injectable } from "@nestjs/common";
import { Quote } from "src/entities";
import { StrapiApi } from "strapi-adapter";

@Injectable()
export class QuoteRepository {

    constructor(private strapiAdapter: StrapiApi){}

    async postQuote(Quote: Quote): Promise<Quote> {
        const response = await this.strapiAdapter.post<Quote>("/quotes",Quote);
        return response.data as Quote;
    }

}
