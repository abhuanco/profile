import Technology from "./Technology";

interface IPortfolio {
    icon: string;
    title: string;
    url: string;
    description: string
    technologies: Technology[]
}

export class Portfolio implements IPortfolio {
    icon: string;
    title: string;
    url: string;
    description: string;
    technologies: Technology[] = [];

    constructor(icon: string, title: string, url: string, description?: string, technologies?: Technology[]) {
        this.icon = icon;
        this.title = title;
        this.url = url;
        this.description = description || '';
        this.technologies = technologies || [];
    }
}