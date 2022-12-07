import React from "react";
import DjangoIcon from "../../icons/DjangoIcon";
import ReactIcon from "../../icons/ReactIcon";
import PostgresqlIcon from "../../icons/PostgresqlIcon";

export default function MyMotto() {
    return (
        <div className=" bg-teal-100 dark:bg-teal-900">
            <div className="xl:container xl:mx-auto h-full flex flex-wrap items-center">
                <div className="flex p-10 sm-p-5 pt-20 basis-full">
                    <div className="basis-full">
                        <div className="text-5xl  sm:text-6xl  mb-10  ">
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
                            <div className="lg:flex hidden items-center basis-1/3 justify-center">
                                {/* <SmileOutlined style={{ fontSize: "100px" }} /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex p-10 sm-p-5 pb-20 basis-full">
                    <div>
                        <div className="flex justify-end">
                            <div className="text-5xl sm:text-6xl mb-10 basis-full lg:basis-1/2">
                                My Skills
                            </div>
                        </div>

                        <div className="flex basis basis-full justify-end">
                            <div className="lg:flex hidden items-center basis-1/2 justify-around">
                                <DjangoIcon />
                                <ReactIcon />
                                <PostgresqlIcon />
                            </div>
                            <p className=" text-xl leading-loose lg:basis-1/2 basis-full">
                                {`When I'm building software, I like to experiment and equip myself with the best 
                         resources for the job. I have explored technologies such as: React, Next.js, Express, Django, MySQL, GraphQL, TypeScript, Docker, AWS, and many more.
                         However, I am always open to learning new things and ready for the opportunity to grow and improve.
   `}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
