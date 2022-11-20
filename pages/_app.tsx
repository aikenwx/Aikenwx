import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const beonFont = localFont({
    src: "../public/fonts/beon-webfont.woff",
    variable: "--font-beon",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${beonFont.variable}`}>
            <Component {...pageProps} />
        </main>
    );
}
