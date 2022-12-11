import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import styloMilo from "../../public/images/stylo-milo.jpg";
import Link from "next/link";

export default function LandingPageHero() {
    return (
        <div className={` dark:bg-zinc-800 bg-slate-100 flex w-screen pt-16 `}>
            <div className={`basis-full ${styles.bg_image}`}>
                <div className="w-full dark:bg-black dark:bg-opacity-30 bg-white bg-opacity-30">
                    <div
                        className={` flex flex-wrap basis-full xl:container xl:mx-auto`}
                    >
                        <div
                            className={`flex basis-full sm:basis-2/3 flex-wrap lg:justify-end justify-center sm:h-120 h-screen sm:h-panel }`}
                        >
                            <div className="flex items-center flex-wrap text-center">
                                <div className="flex justify-center items-center flex-col sm:p-10 p-5">
                                    <div className={` mr-2 text-2xl `}>
                                        {"Hi I'm Aiken, a"}
                                    </div>
                                    <h1 className={`${styles.logo} font-beon`}>
                                        Software Engineer
                                    </h1>

                                    <div className="text-2xl max-w-sm flex flex-col space-y-6">
                                        <span>
                                            I tinker, build and optimize things
                                        </span>
                                        <br></br>

                                        <button
                                            type="button"
                                            className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4
                                             focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-4 text-center mr-2 mb-2"
                                        >
                                            <Link
                                                className=" text-2xl"
                                                href={"/work"}
                                            >
                                                View My Work
                                            </Link>
                                        </button>
                                        <hr className="border-black dark:border-white" />
                                    </div>
                                    <div className="flex flex-wrap pt-20 justify-center">
                                        <h2 className="basis-1/2 p-5 flex max-w-sm text-left">
                                            Over 8 months of experience as a
                                            full stack developer building
                                            consumer-facing commercial products.
                                        </h2>
                                        <h2 className="basis-1/2 p-5 flex max-w-sm text-left">
                                            Highly skilled at building scalable
                                            and testable web products that are
                                            SEO friendly and performant.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex basis-full sm:basis-1/3 items-start justify-center max-h-full">
                            <Image
                                className="max-w-full h-full object-cover md:w-full aspect-square"
                                // priority={true} // priority is not good for mobile, @todo maybe make image size smaller
                                alt="Aiken"
                                src={styloMilo}
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
