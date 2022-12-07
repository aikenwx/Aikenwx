import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import { NAV_MENU_ITEMS } from "../../common/constants";

export default function Footer() {
    return (
        <div className="bg-slate-100 dark:bg-zinc-800 flex flex-col pb-20 pt-20 text-2xl leading-loose ">
            <div className="xl:container xl:mx-auto h-full flex items-center">
                <div className="basis-full">
                    <div className="flex p-10 flex-wrap max-[767px]:space-y-2 max-w-4x items-start">
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
                                <Link
                                    href="https://t.me/Aiken55"
                                    target="_blank"
                                >
                                    Telegram Me
                                </Link>
                            </span>
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

                        <div className="flex md:basis-1/2 basis-full flex-wrap space-y-2">
                            {NAV_MENU_ITEMS.map((navMenuItem) => (
                                <span
                                    className="basis-full"
                                    key={navMenuItem.value}
                                >
                                    <Link href={navMenuItem.path}>
                                        {navMenuItem.value}
                                    </Link>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="p-10">
                        <hr className="dark:border-white border-black border-dashed"></hr>
                        <br></br>
                        <div className="flex justify-between flex-wrap">
                            <div className="mr-10">
                                {/* copyright */}©{new Date().getFullYear()}{" "}
                                Aiken Wong Xiheng
                            </div>
                            <div className="flex justify-end gap-10">
                                {/* social media links */}
                                <Link
                                    href="https://www.linkedin.com/in/aikenwx/"
                                    target="_blank"
                                >
                                    <LinkedinFilled
                                        style={{ verticalAlign: "middle" }}
                                    />
                                </Link>
                                <Link
                                    href="https://github.com/aikenwx"
                                    target="_blank"
                                >
                                    <GithubFilled
                                        style={{ verticalAlign: "middle" }}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
