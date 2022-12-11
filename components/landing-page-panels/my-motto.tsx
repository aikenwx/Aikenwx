import Link from "next/link";
import React from "react";
import { IImageItem } from "../../common/interfaces";
import Carousel from "../carousel";

export default function MyMotto({ imageItems }: { imageItems: IImageItem[] }) {
    const modifiedImageItems = imageItems.map((imageItem) => {
        const newImageItem = { ...imageItem };

        newImageItem.overlay = (
            <div className="flex justify-center items-center h-full flex-col">
                <div className="text-5xl sm:text-6xl  ">{imageItem.title}</div>
                <br></br>

                <p className="text-xl italic">{imageItem.overlay_text}</p>
                <br></br>
                <br></br>

                <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4
                 focus:ring-blue-300 font-medium rounded-full text-sm px-12 py-4 text-center mr-2 mb-2"
                >
                    <Link className=" text-xl" href={"/work/" + imageItem.slug}>
                        My Work On {imageItem.title}
                    </Link>
                </button>
            </div>
        );

        return newImageItem;
    });

    return (
        <>
            <div className=" bg-teal-500 bg-gradient-to-br from-teal-200 dark:from-teal-900 dark:bg-teal-700">
                <div className="xl:container xl:mx-auto h-full flex  flex-wrap items-center  py-40">
                    <div className="basis-full lg:basis-1/2  p-10 sm-p-5">
                        <div className="text-5xl sm:text-6xl mb-10">
                            About Me
                        </div>
                        <p className="text-xl leading-loose basis-full ">
                            {`I am a software engineer who is passionate about
                            learning new technology and improving my craft.
                            There's always a more elegant solution and new
                            unexplored potential lying just around the corner,
                            we just need to be curious and persistent enough to
                            find it. I aim to produce high quality software that
                            is scalable and performant, as well as beautiful, if anyone
                            is looking.`}
                        </p>
                    </div>
                </div>
            </div>
            <div className=" bg-black  text-white relative">
                <div className="xl:container xl:mx-auto h-full flex flex-wrap items-center  relative">
                    <div className="flex p-10 sm-p-5  basis-full z-10 py-40 ">
                        <div className="flex justify-end">
                            <div className="lg:basis-1/3 basis-full">
                                <div className="text-5xl sm:text-6xl mb-10  ">
                                    My Skills
                                </div>
                                <p className=" text-xl leading-loose ">
                                    {`When I'm building software, I like to experiment and equip myself with the best 
                         resources for the job. I have explored technologies such as: React, Next.js, Express, Django, MySQL, GraphQL, TypeScript, Docker, AWS, and many more.
                         However, I am always open to learning new things and ready for the opportunity to grow and improve.
   `}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:absolute h-96 sm:h-panel  lg:h-full w-full lg:w-1/2 top-0 left-0 z-10">
                        <Carousel
                            timeToSwap={10000}
                            fill
                            imageItems={modifiedImageItems}
                            objectFit={"cover"}
                        ></Carousel>
                    </div>
                </div>

                {/* <div className=" bg-black opacity-50 absolute  w-full top-0 h-full"></div> */}
            </div>
        </>
    );
}
