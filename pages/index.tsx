import { GetStaticProps } from "next";
import { getLandingPageCarouselImages } from "../api";
import { IImageItem } from "../common/interfaces";
import LandingPageHero from "../components/landing-page-hero";
import ExperienceSummary from "../components/landing-page-panels/experience-summary";
import MyMotto from "../components/landing-page-panels/my-motto";
import DefaultLayout from "../components/layouts/default-layout";

interface IProps {
    imageItems: IImageItem[];
}

export default function Home({ imageItems }: IProps) {
    return (
        <DefaultLayout>
            <LandingPageHero />
            <MyMotto imageItems={imageItems} />
            <ExperienceSummary />
        </DefaultLayout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const data: IImageItem[] = await getLandingPageCarouselImages();
    return {
        props: { imageItems: data },
    };
};
