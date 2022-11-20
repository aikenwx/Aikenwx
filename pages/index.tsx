import LandingPageHero from "../components/landing-page-hero";
import ExperienceSummary from "../components/landing-page-panels/experience-summary";
import MyMotto from "../components/landing-page-panels/my-motto";
import DefaultLayout from "../components/layouts/default-layout";

export default function Home() {
    return (
        <DefaultLayout>
            <LandingPageHero />
            <MyMotto />
            <ExperienceSummary />
        </DefaultLayout>
    );
}
