import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <div className="bg-teal-600 flex flex-col text-white dark:bg-teal-900">
            <div className="xl:container xl:mx-auto">
                <div className="flex p-10 flex-wrap max-[767px]:space-y-2 max-w-4xl">
                    <div className="flex md:basis-1/2 basis-full flex-wrap space-y-2">
                        <span className="basis-full">
                            <Link
                                className="basis-full"
                                href="mailto: aikenwongx@u.nus.edu"
                                type="email"
                            >
                                Email Me
                            </Link>
                        </span>

                        <span className="basis-full">
                            <Link href="https://t.me/Aiken55" target="_blank">
                                Telegram Me
                            </Link>
                        </span>
                    </div>

                    <div className="flex md:basis-1/2 basis-full flex-wrap space-y-2">
                        <span className="basis-full">
                            <Link
                                href={
                                    "/resumes/Aiken_Wong_Xiheng_Resume_November_2022.pdf"
                                }
                                target="_blank"
                            >
                                My Resume
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="p-10">
                    <hr></hr>
                    <br></br>
                    {/* copyright */}©{new Date().getFullYear()} Aiken Wong
                    Xiheng
                </div>
            </div>
        </div>
    );
}
