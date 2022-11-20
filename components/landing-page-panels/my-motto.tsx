import React from "react";

export default function MyMotto() {
    return (
        <div className=" bg-teal-600 dark:bg-teal-900 text-white font-light">
            <div className="xl:container xl:mx-auto h-full flex flex-wrap items-center">
                <div className="flex p-10 sm-p-5 basis-full">
                    <div>
                        <div className="font-beon text-6xl mb-10">About me</div>
                        <p className="max-w-lg">
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
                <div className="flex p-10 sm-p-5 basis-full sm:justify-end ">
                    <div>
                        <div className="font-beon text-6xl mb-10">About me</div>
                        <p className="max-w-lg">
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
    );
}
