export interface ILinkItem {
    value: string;
    path: string;
    isAbsolutePath?: boolean;
}

export interface IWorkPageItem {
    title: string;
    work_role: string;
    slug: string;
    logo_url: string;
}

export interface IWorkSlugPageItem {
    title: string;
    work_role: string;
    paragraphs: string[];
    logo_url: string;
    carousel_image_urls: string[];
}
