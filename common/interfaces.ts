export interface ILinkItem {
    value: string;
    path: string;
    isAbsolutePath?: boolean;
}

export interface IWorkPageItem {
    title: string;
    slug: string;
}

export interface IWorkSlugPageItem {
    title: string;
    paragraphs: string[];
}
