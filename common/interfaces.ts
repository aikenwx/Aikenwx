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
    html_write_up: string;
    logo_url: string;
    carousel_image_urls: string[];
    meta_title: string;
    meta_description: string;
}

export interface IMetaData {
    title: string;
    description: string;
}
