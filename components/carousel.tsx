import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface IProps {
    carousel_image_urls: string[];
    imageAlt: string;
}

export default function Carousel({ carousel_image_urls, imageAlt }: IProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [translateDirection, setTranslateDirection] = useState("");

    function getNextSlide(slideNumber: number) {
        return slideNumber === carousel_image_urls.length - 1
            ? 0
            : slideNumber + 1;
    }

    function getPreviousSlide(slideNumber: number) {
        return slideNumber === 0
            ? carousel_image_urls.length - 1
            : slideNumber - 1;
    }

    const nextSlideIndex = getNextSlide(currentImageIndex);
    const previousSlideIndex = getPreviousSlide(currentImageIndex);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (translateDirection === "-translate-x-full") {
                setCurrentImageIndex(nextSlideIndex);
                setTranslateDirection("");
            } else if (translateDirection === "translate-x-full") {
                setCurrentImageIndex(previousSlideIndex);
                setTranslateDirection("");
            }
        }, 700);

        return () => clearTimeout(timer);
    }, [translateDirection]);

    function showCard(index: number) {
        return (
            index == currentImageIndex ||
            (nextSlideIndex === index &&
                translateDirection !== "translate-x-full") ||
            (previousSlideIndex === index &&
                translateDirection !== "-translate-x-full")
        );
    }

    return (
        <div id="default-carousel" className="relative z-0">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {[currentImageIndex, previousSlideIndex, nextSlideIndex].map(
                    (index) => (
                        <div
                            className={`duration-700 ease-in-out ${
                                translateDirection !== ""
                                    ? ""
                                    : nextSlideIndex === index
                                    ? "translate-x-full"
                                    : previousSlideIndex === index
                                    ? "-translate-x-full"
                                    : ""
                            } ${showCard(index) ? "" : "hidden"} ${
                                index == currentImageIndex
                                    ? translateDirection
                                    : ""
                            } absolute top-0 left-0 w-full h-full`}
                            key={index}
                        >
                            <Image
                                src={carousel_image_urls[index]}
                                className="absolute block w-full object-contain"
                                fill
                                priority={index == 0}
                                alt={imageAlt}
                            />
                        </div>
                    )
                )}
            </div>
            <button
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => {
                    setTranslateDirection("translate-x-full");
                }}
                disabled={translateDirection !== ""}
            >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <LeftOutlined />
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => {
                    setTranslateDirection("-translate-x-full");
                }}
                disabled={translateDirection !== ""}
            >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <RightOutlined />
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}
