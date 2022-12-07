import Image from "next/image";
import React from "react";
import StephanBruggermann from "../../public/images/stephan-bruggermann.jpg";

export default function ExperienceSummary() {
    return (
        <div className=" bg-slate-50 dark:bg-zinc-900">
            <div className="xl:container xl:mx-auto h-full flex flex-wrap items-center ">
                <div className="flex p-10 sm-p-5 pt-20 lg:basis-1/2 basis-full">
                    <div>
                        <div className="text-5xl  sm:text-6xl mb-10">
                            My Journey So Far
                        </div>
                        <p className="max-w-3xl text-xl leading-loose">
                            {`I am currently studying as a Computer Science
                            student at the National University of Singapore. If
                            there's one thing I've learnt from my time here as a
                            programmer, it's that simply knowing how to 'code'
                            is not enough. It may even be the opposite, as
                            software should be written in a manner that is
                            simple, elegant and easily understood by fellow
                            developers, far from the cryptic interpretation of
                            the word 'code'. I have since gained an appreciation
                            for the importance of good software design and
                            architecture as well as the value of rigorous
                            software testing.`}
                        </p>
                        <br></br>

                        <p className="max-w-3xl text-xl leading-loose">
                            {`Within school, I have also had the opportunity to
                            involve myself in various software projects and
                            courses. I have worked on web applications, Java
                            applications and even ventured into the process of
                            UI development from usability testing to Figma
                            prototyping.`}
                        </p>
                        <br></br>
                        <p className="max-w-3xl text-xl leading-loose">
                            {`
                            However, it was not until my internship at WorkClass
                            as a full-stack developer did I truly see my next
                            stage of growth as a software engineer. As a
                            fast-paced and growing startup, WorkClass pushed me
                            to adapt and learn quickly. I was challenged to
                            think on how we could utilize any technology and resources at
                            our disposal to improve our products and website. I
                            was also able to see the impact of my work
                            optimizing the SEO of our website, which resulted in
                            a 100% increase in organic traffic to our website
                            (We are top 10 for "part-time jobs in Singapore" on
                            Google). I am truly grateful for the opportunity
                            given to me by WorkClass in helping me grow as a
                            software engineer.`}
                        </p>
                        <p className="max-w-3xl text-xl"></p>
                        <p className="max-w-3xl text-xl">{""}</p>
                    </div>
                </div>
                <div className="basis-full lg:basis-1/2 flex justify-center mb-10">
                    <div className="w-full max-w-sm bg-white border border-gray-200  shadow-md dark:bg-zinc-800 dark:border-zinc-700">
                        <div className="flex justify-end px-4 pt-4"></div>
                        <div className="flex flex-col items-center pb-10">
                            <Image
                                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                src={StephanBruggermann}
                                alt="Stephan Brüggemann"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                Stephan Brüggemann
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                WorkClass Co-founder | ML | PhD
                            </span>
                            <p className="p-10 text-xl italic font-semibold text-left text-gray-900 dark:text-white">
                                {`"Aiken was an excellent developer who was able to quickly pick up new technologies and apply them to our website. He was also able to work independently and was able to deliver results on time. He had an outstanding attitude towards his work and was a pleasure to work with. I would recommend him to any company."`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
