import { IWorkPageItem, IWorkSlugPageItem } from "../common/interfaces";

export const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:8000";

export const getWorkPageData = async () => {
    const res = await fetch(`${baseUrl}/work`, { method: "GET" });
    const data: IWorkPageItem[] = await res.json();
    return data;
};

export const getWorkSlugPageData = async (slug: string) => {
    const res = await fetch(`${baseUrl}/work/${slug}`, { method: "GET" });
    const data: IWorkSlugPageItem = await res.json();
    return data;
};

export const getAllWorkSlugs = async () => {
    const res = await fetch(`${baseUrl}/all-work-slugs`, { method: "GET" });
    const data: { slug: string }[] = await res.json();
    return data;
};
