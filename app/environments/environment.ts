import { strapiConfig } from "app/config/strapi.config"


export class Environment {

    private strapiConfig = strapiConfig
    constructor(private isProd: boolean){}

    static getEnvironment(): Environment {
        return process.env.NODE_ENV === "production" ?  new Environment(true) : new Environment(false);
    }

    get strapiUrl(){
        return this.isProd ? strapiConfig.url.prod : strapiConfig.url.dev
    }
}


export const environment = Environment.getEnvironment()