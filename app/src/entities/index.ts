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
    listImg: string[];
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