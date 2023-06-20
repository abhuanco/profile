interface ITechnology {
    title: string;
    url: string;
    icon: string;
}

class Technology implements ITechnology {
    icon: string;
    title: string;
    url: string;

    constructor(title: string, url: string, icon?: string) {
        this.title = title;
        this.url = url;
        this.icon = icon || '';
    }
}

export default Technology;