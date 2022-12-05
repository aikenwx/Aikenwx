import React from "react";
import Head from "next/head";
import NavBar from "../nav-bar";
import Footer from "../footer";
import { IMetaData } from "../../common/interfaces";

interface IProps {
    children: React.ReactNode;
    metaData?: IMetaData;
}

export default function DefaultLayout({
    children,
    metaData = {
        title: "Welcome to aikenwx.co",
        description:
            "Learn more about me, Aiken Wong Xiheng, a software engineer based in Singapore.",
    },
}: IProps) {
    return (
        <div>
            <Head>
                <title>{metaData.title}</title>
                <meta name="description" content={metaData.description} />
                {/* @todo incorporate beon font into favicon */}
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23000000%22></rect><path fill=%22%23fff%22 d=%22M18.47 79.27L18.47 79.27Q18.47 79.27 47.39 14.54L47.39 14.54Q47.60 14.01 49.54 14.01Q51.47 14.01 51.74 14.54L51.74 14.54L81.53 79.27Q83.24 83.27 84.91 84.06L84.91 84.06Q85.49 84.32 85.49 85.16Q85.49 85.99 84.91 85.99L84.91 85.99L69.01 85.99Q68.44 85.99 68.44 85.22Q68.44 84.45 68.63 84.30Q68.83 84.15 69.18 83.99Q69.53 83.84 69.75 83.62L69.75 83.62Q71.42 81.95 71.42 80.52Q71.42 79.09 71.12 78.17L71.12 78.17L64.74 63.10L33.06 63.10L26.82 78.17Q26.51 79.09 26.51 79.58L26.51 79.58L26.51 80.06Q26.51 80.10 26.51 80.15L26.51 80.15Q26.51 81.95 28.18 83.62L28.18 83.62Q28.36 83.79 28.93 84.06Q29.50 84.32 29.50 85.16Q29.50 85.99 28.93 85.99L28.93 85.99L15.09 85.99Q14.51 85.99 14.51 85.22Q14.51 84.45 14.71 84.30Q14.91 84.15 15.26 83.97L15.26 83.97Q16.71 83.35 18.47 79.27ZM48.53 28.51L36.18 56.11Q36.09 56.24 36.14 56.44Q36.18 56.64 36.31 56.64L36.31 56.64L61.40 56.64Q61.54 56.64 61.58 56.44Q61.62 56.24 61.54 56.11L61.54 56.11L48.84 28.51L48.53 28.51Z%22></path></svg>"
                />
            </Head>
            <NavBar />

            <main>{children}</main>

            <Footer />
        </div>
    );
}
