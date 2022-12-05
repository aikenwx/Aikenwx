import { GetStaticProps } from "next";
import React from "react";
import { getWorkPageData } from "../../api";
import { IWorkPageItem } from "../../common/interfaces";
import DefaultLayout from "../../components/layouts/default-layout";
import WorkPage from "../../components/work-page";

interface IProps {
    workPageItems: IWorkPageItem[];
}

export default function MyExperience({ workPageItems }: IProps) {
    return (
        <DefaultLayout
            metaData={{
                title: "Aiken's Work and Experience",
                description:
                    "Learn more about what I do as a software engineer and my experience in the field as a developer in Singapore.",
            }}
        >
            <WorkPage workPageItems={workPageItems} />
        </DefaultLayout>
    );
}
export const getStaticProps: GetStaticProps = async () => {
    const data: IWorkPageItem[] = await getWorkPageData();
    return {
        props: { workPageItems: data },
    };
};
