import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ICarouselImageProps, IImageItem } from "../common/interfaces";

interface IProps {
    imageItems: IImageItem[];
    uxFocus?: boolean;
    objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
    fill?: boolean;
    timeToSwap?: number;
    overlay?: React.ReactNode;
    carouselImageProps?: ICarouselImageProps;
}

/**
 * This component is a carousel that displays images that prioritize load performance for mobile devices.
 * Only three images are ever present in the DOM at a time. The current image, the previous image, and the next image.
 * Browsers like google chrome can also make use of CSS properties like visibility:hidden and display:none to prevent load of
 * the next and previous images that are not visible in viewport
 */
export default function Carousel({
    uxFocus = false,
    objectFit = "contain",
    fill = false,
    timeToSwap = 5000,
    imageItems,
}: IProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [translateDirection, setTranslateDirection] = useState("");

    function getNextSlide(slideNumber: number) {
        return slideNumber === imageItems.length - 1 ? 0 : slideNumber + 1;
    }

    function getPreviousSlide(slideNumber: number) {
        return slideNumber === 0 ? imageItems.length - 1 : slideNumber - 1;
    }

    const nextSlideIndex = getNextSlide(currentImageIndex);
    const previousSlideIndex = getPreviousSlide(currentImageIndex);

    useEffect(() => {
        if (!timeToSwap) {
            return;
        }

        const timer = setTimeout(() => {
            setTranslateDirection("-translate-x-full");
        }, timeToSwap);

        return () => clearTimeout(timer);
    }, [currentImageIndex]);

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

    function getClassNamesForSlide(index: number) {
        const classNames =
            "duration-700 ease-in-out absolute top-0 left-0 w-full h-full ";
        if (index === currentImageIndex) {
            return classNames + translateDirection;
        } else if (nextSlideIndex === index) {
            if (translateDirection === "-translate-x-full") {
                return classNames;
            } else if (translateDirection === "translate-x-full") {
                return classNames + "hidden";
            } else {
                return classNames + "translate-x-full invisible";
            }
        } else if (previousSlideIndex === index) {
            if (translateDirection === "translate-x-full") {
                return classNames;
            } else if (translateDirection === "-translate-x-full") {
                return classNames + "hidden";
            } else {
                return classNames + "-translate-x-full invisible";
            }
        }
    }

    function getClassForSliderButton(index: number) {
        return `${
            (currentImageIndex === index && translateDirection === "") ||
            (translateDirection === "-translate-x-full" &&
                nextSlideIndex === index) ||
            (translateDirection === "translate-x-full" &&
                previousSlideIndex === index)
                ? "w-8 bg-white/80 dark:bg-gray-800/80"
                : "w-6 bg-white/30 dark:bg-gray-800/30"
        } h-1 duration-700 ease-in-out rounded-full hover:bg-white/50 dark:hover:bg-gray-800/60`;
    }

    function handleSliderButtonClick(index: number) {
        if (index === currentImageIndex) {
            return;
        } else if (index === nextSlideIndex) {
            setTranslateDirection("-translate-x-full");
        } else if (index === previousSlideIndex) {
            setTranslateDirection("translate-x-full");
        } else {
            setCurrentImageIndex(index);
        }
    }

    return (
        <div
            id="default-carousel"
            className={`relative z-0 ${fill && "h-full"}`}
        >
            <div
                className={`relative overflow-hidden ${
                    fill ? "h-full" : "md:h-panel h-96"
                }`}
            >
                {[currentImageIndex, previousSlideIndex, nextSlideIndex].map(
                    (index) => (
                        <div
                            className={getClassNamesForSlide(index)}
                            key={index}
                        >
                            <Image
                                src={imageItems[index].image_url}
                                className={`absolute block w-full object-cover `}
                                style={{
                                    objectFit: objectFit,
                                }}
                                fill={true}
                                priority={uxFocus ? true : false}
                                alt={imageItems[index].image_alt}
                            />
                            {imageItems[index]?.overlay && (
                                <div className="absolute z-20 w-full h-full top-0 left-0 bg-black/60">
                                    {imageItems[index]?.overlay}
                                </div>
                            )}
                        </div>
                    )
                )}
            </div>

            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                {imageItems.map((_, index) => (
                    <button
                        type="button"
                        onClick={() => handleSliderButtonClick(index)}
                        className={getClassForSliderButton(index)}
                    ></button>
                ))}
            </div>
            <button
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => {
                    setTranslateDirection("translate-x-full");
                }}
                disabled={translateDirection !== ""}
            >
                <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10
                
                
                bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                >
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
