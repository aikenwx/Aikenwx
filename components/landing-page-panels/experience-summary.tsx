import React from "react";

export default function ExperienceSummary() {
    return (
        <div className=" bg-slate-100 dark:bg-gray-900">
            <div className="xl:container xl:mx-auto h-full flex flex-wrap items-center">
                <div className="flex p-10 sm-p-5 pt-20 basis-full">
                    <div>
                        <div className="text-5xl font-medium sm:text-6xl mb-10">
                            My Journey So Far
                        </div>
                        <p className="max-w-3xl text-xl">
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

                        <p className="max-w-3xl text-xl">
                            {`Within school, I have also had the opportunity to
                            involve myself in various software projects and
                            courses. I have worked on web applications, Java
                            applications and even ventured into the process of
                            UI development from usability testing to Figma
                            prototyping.`}
                        </p>
                        <br></br>
                        <p className="max-w-3xl text-xl">
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
            </div>
        </div>
    );
}
