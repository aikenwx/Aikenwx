import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [translateDirection, setTranslateDirection] = useState("");
    const [hideLeftSlide, setHideLeftSlide] = useState(true);
    const [hideRightSlide, setHideRightSlide] = useState(true);

    const imageUrls = [
        "https://firebasestorage.googleapis.com/v0/b/aikendev-image-store.appspot.com/o/work-logos%2Fworkclass-logo.svg?alt=media&token=9a658b6f-77ae-4af0-b25e-52cad7ef74d4",
        "https://firebasestorage.googleapis.com/v0/b/aikendev-image-store.appspot.com/o/work-logos%2Fworkclass-logo.svg?alt=media&token=9a658b6f-77ae-4af0-b25e-52cad7ef74d4",
        "https://firebasestorage.googleapis.com/v0/b/aikendev-image-store.appspot.com/o/work-logos%2Fworkclass-logo.svg?alt=media&token=9a658b6f-77ae-4af0-b25e-52cad7ef74d4",
    ];

    function getNextSlide(slideNumber: number) {
        return slideNumber === imageUrls.length - 1 ? 0 : slideNumber + 1;
    }

    function getPreviousSlide(slideNumber: number) {
        return slideNumber === 0 ? imageUrls.length - 1 : slideNumber - 1;
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
        <div id="default-carousel" className="relative">
            {currentImageIndex}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {imageUrls.map((imageUrl, index) => (
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
                            index == currentImageIndex ? translateDirection : ""
                        } absolute top-0 left-0 w-full h-full`}
                        key={index}
                    >
                        {index}
                        {showCard(index) ? (
                            <div className="text-green-600"> shown</div>
                        ) : (
                            <div className="text-red-600"> hidden</div>
                        )}
                        <Image
                            src={imageUrl}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            height={100}
                            width={100}
                            priority={index == 0}
                            alt="..."
                        />
                    </div>
                ))}
                {/* <div className="duration-700 ease-in-out">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/aikendev-image-store.appspot.com/o/work-logos%2Fworkclass-logo.svg?alt=media&token=9a658b6f-77ae-4af0-b25e-52cad7ef74d4"
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        height={100}
                        width={100}
                        alt="..."
                    />
                </div>
                <div className="hidden duration-700 ease-in-out">
                    <img
                        src="/docs/images/carousel/carousel-2.svg"
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                    />
                </div>
                <div className="hidden duration-700 ease-in-out">
                    <img
                        src="/docs/images/carousel/carousel-3.svg"
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                    />
                </div> */}
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button className="w-3 h-3 rounded-full"></button>
                <button className="w-3 h-3 rounded-full"></button>
                <button className="w-3 h-3 rounded-full"></button>
            </div>
            <button
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => {
                    setTranslateDirection("-translate-x-full");

                    // setCurrentImageIndex(
                    //     currentImageIndex == 0
                    //         ? images.length - 1
                    //         : currentImageIndex - 1
                    // );
                }}
            >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <LeftOutlined />
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => {
                    setTranslateDirection("translate-x-full");

                    // setCurrentImageIndex(
                    //     images.length % (currentImageIndex + 1)
                    // );
                }}
            >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <RightOutlined />
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}
