import React from "react";
import { IWorkSlugPageItem } from "../../common/interfaces";
import Carousel from "../carousel";

interface IProps {
    workSlugPageItem: IWorkSlugPageItem;
}
export default function WorkPageSlugTemplate({ workSlugPageItem }: IProps) {
    return (
        <div className=" bg-slate-100 dark:bg-slate-800  pt-16 w-screen">
            <div className="xl:container xl:mx-auto p-10">
                <Carousel />

                <h1 className="pb-2 text-4xl font-light">
                    {workSlugPageItem.title}
                </h1>
                <h2 className="pb-4 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    {workSlugPageItem.work_role}
                </h2>

                {workSlugPageItem.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
}
