import {Technology} from "./Technology";

interface IPortfolio {
    icon: string;
    title: string;
    description: string
    technologies: Technology[]
}

export class Portfolio implements IPortfolio {
    icon: string;
    technologies: Technology[];
    title: string;
    description: string;

    constructor(icon: string, title: string, description?: string, technologies?: Technology[]) {
        this.icon = icon;
        this.title = title;
        this.description = description || '';
        this.technologies = technologies || [];
    }
}