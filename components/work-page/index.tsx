import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IWorkPageItem } from "../../common/interfaces";

interface IProps {
    workPageItems: IWorkPageItem[];
}

export default function WorkPage({ workPageItems }: IProps) {
    const card = (workPageItem: IWorkPageItem) => (
        <Link href={"work/" + workPageItem.slug} key={workPageItem.slug}>
            <div
                className=" w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
                key={workPageItem.slug}
            >
                <div className="bg-gray-100 pt-16 pb-16 flex items-center justify-center">
                    <Image
                        src={workPageItem.logo_url}
                        alt={workPageItem.title}
                        width={150}
                        height={150}
                    />
                </div>
                <div className="p-10">
                    <h2 className="mb-2 text-2xl font-light tracking-tight text-gray-900 dark:text-white">
                        {workPageItem?.title}
                    </h2>
                    <h2 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {workPageItem?.work_role}
                    </h2>
                    {/* <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                </span> */}
                </div>
            </div>
        </Link>
    );

    return (
        <div className=" bg-slate-100 dark:bg-slate-800  pt-16 w-screen">
            <div className="text-center pt-20 pb-10 text-5xl font-light">
                Work and Projects
            </div>

            <div className="xl:container xl:mx-auto h-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10 p-10">
                {workPageItems.map((workPageItem) => card(workPageItem))}
            </div>
        </div>
    );
}
