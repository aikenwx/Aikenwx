import React from "react";

export default function MyMotto() {
    return (
        <div className="h-panel bg-teal-600 dark:bg-teal-900 text-white font-light">
            <div className="xl:container xl:mx-auto">
                <div className="flex p-10 sm-p-5">
                    <div className="basis-full">
                        <div className="font-beon text-6xl mb-10">About me</div>
                        <p className="max-w-xl">
                            I am a software engineer who is passionate about
                            learning new technology and improving my craft.
                            There's always a more elegant solution and new
                            unexplored potential lying just around the corner,
                            we just need to be curious and persistent enough to
                            find it. I aim to produce high quality software that
                            is scalable and performant, and beautiful, if anyone
                            is looking.
                        </p>
                    </div>

                    <div className="basis-full"></div>
                </div>
            </div>
        </div>
    );
}
