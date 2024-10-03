export interface PostProps {
    objects: ObjectPost[]
}

interface ObjectPost {
    slug: string;
    title: string;
    metadata: {
        banner: {
            url: string;
        };
        button: {
            title: string;
            url: string;
        };
        description: {
            title: string;
            text: string;
            banner: {
                url: string;
            };
            buttonActive: boolean;
            button_title: string;
            button_url: string;
        }
    }
}