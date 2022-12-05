import React from "react";
import { getAllWorkSlugs, getWorkSlugPageData } from "../../api";
import { IWorkSlugPageItem } from "../../common/interfaces";
import DefaultLayout from "../../components/layouts/default-layout";
import WorkPageSlugTemplate from "../../components/work-page-slug";
import { GetStaticPaths, GetStaticProps } from "next";

interface IProps {
    workSlugPageItem: IWorkSlugPageItem;
}

export default function WorkPageSlug({ workSlugPageItem }: IProps) {
    return (
        <DefaultLayout
            metaData={{
                title: workSlugPageItem.meta_title,
                description: workSlugPageItem.meta_description,
            }}
        >
            <WorkPageSlugTemplate workSlugPageItem={workSlugPageItem} />
        </DefaultLayout>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context?.params?.slug as string;
    const workSlugPageItem: IWorkSlugPageItem = await getWorkSlugPageData(slug);
    return {
        props: { workSlugPageItem: workSlugPageItem },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = (await getAllWorkSlugs()).map((slugObject) => ({
        params: slugObject,
    }));

    return {
        paths: paths,
        fallback: false,
    };
};
