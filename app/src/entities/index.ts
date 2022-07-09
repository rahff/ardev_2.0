import { Media } from "strapi-adapter/lib/api/interfaces/api/interfaces";

interface SocialLink {
    url: string;
    icon: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export class Collaborator {
    id: number;
    name: string;
    socialList: SocialLink;
    role: string;
    bio: string;
    profilImg: string;

}

export class Service {
    icon: string;
    title: string;
    text: string;
    
}

export class PortfolioItem {
    listImg: Media[];
    title: string;
    description: string;
    
}

export class Partner {
    logo: string;

}

export interface HomeData {
    collaborators: Collaborator[];
    partners: Partner[];
    portfolio_items: PortfolioItem[];
    services: Service[]
}

export interface Message {
    expName: string;
    email: string;
    subject: string;
    message: string;
}

export interface Quote {
    client: string;
    email: string;
    company: string;
    domain: string;
    documents: any;
}