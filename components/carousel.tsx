import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface IProps {
    carousel_image_urls: string[];
    imageAlt: string;
}

export default function Carousel({ carousel_image_urls, imageAlt }: IProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [translateDirection, setTranslateDirection] = useState(0); // 0 = no translate, 1 = translate left, 2 = translate right
    const [isTranslating, setIsTranslating] = useState(false);

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

    /**
     * When clicking to the next or previous image, three things happen:
     * 1. First, we need to render the next/previous image in their correct position, translated right/left of the current image, respectively
     * 2. Then, we trigger the translation by toggling the tailwind translate-x-full class for the current and next/previous images
     * 3. Finally, we update the currentImageIndex to the next/previous image in the react state
     */

    useEffect(() => {
        if (translateDirection > 0) {
            setIsTranslating(true);
        }
    }, [translateDirection]);

    useEffect(() => {
        if (isTranslating) {
            const timer = setTimeout(() => {
                if (translateDirection === 1) {
                    setCurrentImageIndex(nextSlideIndex);
                } else {
                    setCurrentImageIndex(previousSlideIndex);
                }

                setTranslateDirection(0);
                setIsTranslating(false);
            }, 700);

            return () => clearTimeout(timer);
        }
        return () => {};
    }, [isTranslating]);

    return (
        <div className="relative z-0">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* current image */}
                <div
                    className={` ${
                        translateDirection !== 0
                            ? "duration-700 ease-in-out"
                            : ""
                    } absolute top-0 left-0 w-full h-full ${
                        isTranslating
                            ? translateDirection === 1
                                ? "-translate-x-full"
                                : "translate-x-full"
                            : ""
                    }`}
                >
                    <Image
                        src={carousel_image_urls[currentImageIndex]}
                        className="absolute block w-full"
                        fill
                        style={{ objectFit: "contain" }}
                        priority={true}
                        alt={imageAlt}
                    />
                </div>
                {/* previous image */}
                {translateDirection === 1 && (
                    <div
                        className={`duration-700 ease-in-out absolute top-0 left-0 w-full h-full ${
                            isTranslating ? "" : "translate-x-full"
                        }`}
                    >
                        <Image
                            src={carousel_image_urls[nextSlideIndex]}
                            className="absolute block w-full "
                            fill
                            style={{ objectFit: "contain" }}
                            alt={imageAlt}
                        />
                    </div>
                )}
                {/* next image */}
                {translateDirection === 2 && (
                    <div
                        className={`duration-700 ease-in-out absolute top-0 left-0 w-full h-full ${
                            isTranslating ? "" : "-translate-x-full"
                        }`}
                    >
                        <Image
                            src={carousel_image_urls[previousSlideIndex]}
                            className="absolute block w-full "
                            fill
                            style={{ objectFit: "contain" }}
                            alt={imageAlt}
                        />
                    </div>
                )}
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button className="w-3 h-3 rounded-full"></button>
                <button className="w-3 h-3 rounded-full"></button>
                <button className="w-3 h-3 rounded-full"></button>
            </div>
            <button
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => {
                    setTranslateDirection(1);
                }}
                disabled={isTranslating}
            >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <LeftOutlined />
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => {
                    setTranslateDirection(2);
                }}
                disabled={isTranslating}
            >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <RightOutlined />
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}
