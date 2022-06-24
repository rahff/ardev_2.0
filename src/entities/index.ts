interface SocialLink {
    url: string;
    icon: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export class Collaborator {
    name: string;
    socialList: SocialLink;
    role: string;
    bio: string;
    profilImg: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export class Service {
    icon: string;
    title: string;
    text: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export class PortfolioItem {
    listImg: string[];
    title: string;
    description: string;
    createdAt: string;
    publishedAt: string;
}

export class Partner {
    logo: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}


export type StrapiEntity<T> = {
    data: {attributes: T, id: number}[]
}

export type StrapiAttributeDataHome = {
    collaborators: StrapiEntity<Collaborator>,
    partners: StrapiEntity<Partner>,
    portfolio_items: StrapiEntity<PortfolioItem>,
    services: StrapiEntity<Service>,
    publishedAt: string,
    createdAt: string
}

export interface StrapiDataHome {
    data: {
        attributes: StrapiAttributeDataHome,
        id: number
    },
    meta: any
}

export interface HomeData {
    collaborators: Collaborator[];
    partners: Partner[];
    portfolioItems: PortfolioItem[];
    services: Service[]
}