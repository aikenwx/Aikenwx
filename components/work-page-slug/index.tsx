import React from "react";
import { IWorkSlugPageItem } from "../../common/interfaces";

interface IProps {
    workSlugPageItem: IWorkSlugPageItem;
}
export default function WorkPageSlugTemplate({ workSlugPageItem }: IProps) {
    return (
        <div className=" bg-slate-100 dark:bg-slate-800  pt-14 w-screen">
            <h1>{workSlugPageItem.title}</h1>
            {workSlugPageItem.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
}
