import React from "react";
import { IWorkSlugPageItem } from "../../common/interfaces";
import Carousel from "../carousel";

interface IProps {
    workSlugPageItem: IWorkSlugPageItem;
}
export default function WorkPageSlugTemplate({ workSlugPageItem }: IProps) {
    return (
        <div className=" bg-slate-50 dark:bg-zinc-900  pt-16 w-screen">
            <div className="xl:container xl:mx-auto p-10">
                <Carousel uxFocus={true} imageItems={workSlugPageItem.images} />
                <div className="flex justify-center mt-20">
                    <div style={{ maxWidth: 1000 }}>
                        <h1 className="pb-2 text-4xl">
                            {workSlugPageItem.title}
                        </h1>
                        <h2 className="pb-4 font-normal text-2xl text-gray-700 dark:text-gray-400">
                            {workSlugPageItem.work_role}
                        </h2>

                        <div
                            className="text-xl leading-loose html-write-up"
                            dangerouslySetInnerHTML={{
                                __html: workSlugPageItem?.html_write_up,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
