import React from "react";

export default function MyMotto() {
    return (
        <div className=" bg-teal-600 dark:bg-teal-900 text-white font-light">
            <div className="xl:container xl:mx-auto h-full flex flex-wrap items-center">
                <div className="flex p-10 sm-p-5 pt-20 basis-full">
                    <div>
                        <div className="text-5xl font-medium sm:text-6xl mb-10">
                            About Me
                        </div>
                        <p className="max-w-3xl text-xl">
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
                <div className="flex p-10 sm-p-5 pb-20 basis-full sm:justify-end ">
                    <div>
                        <div className="text-5xl font-medium sm:text-6xl mb-10">
                            My Skills
                        </div>
                        <p className="max-w-3xl text-xl">
                            {`When I'm building software, I like to experiment and equip myself with the best 
                         resources for the job. I have explored technologies such as: React, Next.js, Express, Django, MySQL, GraphQL, TypeScript, Docker, AWS, and many more.
                         However, I am always open to learning new things and ready for the opportunity to grow and improve.
   `}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
