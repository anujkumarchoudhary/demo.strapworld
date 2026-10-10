"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import "@core/styles/animations.css";

const bannerSlideData = [
    {
        id: 1,
        image:
            "/image/upload/v1784894754/adaired/digital_marketing/DmbannerSlideDesign_2_lcwxkp.webp",
    },
    {
        id: 2,
        image:
            "/image/upload/v1784894754/adaired/digital_marketing/DmbannerSlideDesign_1_ezy5ln.webp",
    },
];

const DmBannerSlideDesign = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState<number | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleNext = () => {
        setPrevIndex(currentIndex);
        setCurrentIndex((prev) => (prev + 1) % bannerSlideData.length);

        setTimeout(() => {
            setPrevIndex(null);
        }, 700);
    };

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered, currentIndex]);

    return (
        <div
            className="relative w-full mx-auto h-[280px] sm:h-[360px] md:h-[400px] dm-here-banner-img overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {bannerSlideData.map((slide, index) => {
                const isPrev = index === prevIndex;
                const isActive = index === currentIndex;

                let positionClass = "";
                let transitionClass =
                    "transition-all duration-700 cubic-bezier(0.25, 1, 0.5, 1)";

                if (isPrev) {
                    positionClass = "z-30 -translate-x-[108%] scale-90 -rotate-3";
                } else if (isActive) {
                    positionClass = "z-20 translate-x-0 scale-100 translate-y-0 rotate-0";
                } else {
                    positionClass =
                        "z-10 translate-x-0 scale-[0.93] translate-y-3 rotate-0";
                    transitionClass = "transition-none";
                }

                return (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 w-full h-full transform-gpu opacity-100 ${positionClass} ${transitionClass}`}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                fill
                                src={slide.image}
                                alt="Digital Marketing Result Slide"
                                className="object-fill rounded-[20px]"
                                priority={index === 0}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default DmBannerSlideDesign;

