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
    images: IImageItem[];
    meta_title: string;
    meta_description: string;
}

export interface IImageItem {
    image_url: string;
    image_alt: string;
    overlay?: React.ReactNode;
    title?: string;
    slug?: string;
    overlay_text?: string;
}

export interface IMetaData {
    title: string;
    description: string;
}

export interface ICarouselImageProps {
    image_url: string;
    image_alt: string;
    overlay?: React.ReactNode;
}
