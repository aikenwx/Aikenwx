import React from "react";
import Carousel from "../carousel";

export default function MyMotto() {
    return (
        <>
            <div className=" bg-teal-400 bg-gradient-to-br from-teal-200 dark:from-teal-800 dark:bg-teal-600">
                <div className="xl:container xl:mx-auto h-full flex flex-wrap items-center  py-40">
                    <div className="flex p-10 sm-p-5 basis-full ">
                        <div className="basis-full">
                            <div className="text-5xl  sm:text-6xl mb-10">
                                About Me
                            </div>
                            <div className="flex basis-full">
                                <p className="text-xl leading-loose basis-full lg:basis-1/2">
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
                </div>
            </div>
            <div className=" bg-zinc-900 text-white relative z-0">
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
                    <div className="relative lg:absolute h-96 lg:h-full w-full lg:w-1/2 top-0 left-0 ">
                        <Carousel
                            fill
                            carousel_image_urls={[
                                "https://firebasestorage.googleapis.com/v0/b/aikendev-image-store.appspot.com/o/cover-images%2Fworkclass-cover-image.jpg?alt=media&token=e3fff6c5-04dc-497c-95b5-3e7506b8171f",
                                "https://firebasestorage.googleapis.com/v0/b/aikendev-image-store.appspot.com/o/cover-images%2Faikenwx-cover-image.jpg?alt=media&token=3d05e153-94a7-45e5-8a4d-be8c677de253",
                                "https://firebasestorage.googleapis.com/v0/b/aikendev-image-store.appspot.com/o/cover-images%2Ffastcards-cover-image.jpg?alt=media&token=6a88958b-f855-43b3-b069-781676c372d9",
                            ]}
                            imageAlt={"work images"}
                            objectFit={"cover"}
                        ></Carousel>
                    </div>
                </div>

                <div className=" bg-black opacity-50 absolute  w-full top-0 h-full"></div>
            </div>
        </>
    );
}
