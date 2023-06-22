import Technology from "./Technology";

interface IPortfolio {
    id: string;
    icon: string;
    title: string;
    url: string;
    description: string
    technologies: Technology[]
}

export class Portfolio implements IPortfolio {
    id: string;
    icon: string;
    title: string;
    url: string;
    description: string;
    technologies: Technology[] = [];

    constructor(id: string, icon: string, title: string, url: string, description?: string, technologies?: Technology[]) {
        this.id = id;
        this.icon = icon;
        this.title = title;
        this.url = url;
        this.description = description || '';
        this.technologies = technologies || [];
    }
}