"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import staff from "../../../public/assets/staff/image_01.png";
import staff_2 from "../../../public/assets/staff/image_02.png";
import staff_3 from "../../../public/assets/staff/image_03.png";
import staff_4 from "../../../public/assets/staff/image_04.png";
import staff_5 from "../../../public/assets/staff/image_05.png";

import check from "../../../public/assets/icons/skill/skill_1.png";
import AppIcon from "../AppIcon";
import { imageBaseUrl } from "@/app/baseUrl";

const staffData = [
    {
        id: 1,
        name: "Alex Developer",
        role: "SEO SPECIALIST",
        description:
            "Card blurb: Five years running enterprise SEO across ecommerce, SaaS, and local service brands.",
        blueCardDescription: "Vetted and ready to work for you!",
        image: staff,
        skills: [
            {
                icon: "/common/skill/screaming_frog.png",
                name: "Screaming Frog",
            },
            {
                icon: "/common/skill/ahref.png",
                name: "Ahrefs",
            },
            {
                icon: "/common/skill/google_analytics.svg",
                name: "Google Analytics",
            },
            {
                icon: "/common/skill/semrush.png",
                name: "Semrush",
            },
        ],
    },

    {
        id: 2,
        name: "Sarah Designer",
        role: "MOBILE APP DEVELOPMENT",
        description:
            "Experienced in building seamless, feature-rich mobile apps for iOS and Android.",
        blueCardDescription: "Vetted and ready to work for you!",
        image: staff_2,
        skills: [
            {
                icon: "/common/skill/Flutter.png",
                name: "Flutter",
            },
            {
                icon: "/common/skill/Native.png",
                name: "React Native",
            },
            {
                icon: "/common/skill/Kotlin.png",
                name: "Kotlin",
            },
            {
                icon: "/common/skill/Swift.png",
                name: "Swift",
            },
        ],
    },

    {
        id: 3,
        name: "Michael SEO",
        role: "WEB DEVELOPMENT",
        description:
            "Skilled in building modern, responsive, high-performing websites and web applications.",
        blueCardDescription: "Vetted and ready to work for you!",
        image: staff_3,
        skills: [
            {
                icon: "/common/skill/React.png",
                name: "React.js",
            },
            {
                icon: "/common/skill/Node.png",
                name: "Node.js",
            },
            {
                icon: "/common/skill/WordPress.png",
                name: "WordPress",
            },
            {
                icon: "/common/skill/Shopify.png",
                name: "Shopify",
            },
            {
                icon: "/common/skill/MERN.png",
                name: "MERN Stack",
            },
        ],
    },

    {
        id: 4,
        name: "David Developer",
        role: "AI DEVELOPMENT",
        description:
            "AI-powered solutions that automate, enhance, and optimize.",
        blueCardDescription: "Vetted and ready to work for you!",
        image: staff_4,
        skills: [
            {
                icon: "/common/skill/Gemini.png",
                name: "Google Gemini",
            },
            {
                icon: "/common/skill/Claude.png",
                name: "Claude",
            },
            {
                icon: "/common/skill/TensorFlow.png",
                name: "Transformers",
            },
            {
                icon: "/common/skill/Python.png",
                name: "Python",
            },
            {
                icon: "/common/skill/LangChain.png",
                name: "LangChain",
            },
        ],
    },

    // {
    //     id: 5,
    //     name: "Nisha Developer",
    //     role: "MOBILE DEVELOPER",
    //     description:
    //         "Card blurb: Five years running enterprise SEO across ecommerce, SaaS, and local service brands.",
    //     blueCardDescription: "Vetted and ready to work for you!",
    //     image: staff_5,
    //     skills: [
    //         {
    //             icon: "/assets/icons/skill/skill_1.png",
    //             name: "Screaming Frog",
    //         },
    //         {
    //             icon: "/assets/icons/skill/skill_4.svg",
    //             name: "Semrush",
    //         },
    //         {
    //             icon: "/assets/icons/skill/skill_3.svg",
    //             name: "Google Analytics",
    //         },
    //         {
    //             icon: "/assets/icons/skill/skill_2.png",
    //             name: "Ahrefs",
    //         },
    //     ],
    // },
];

const StaffAugmentationGraph = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Staff whose details are currently displayed
    const [cardIndex, setCardIndex] = useState(0);

    // Details card visibility
    const [cardVisible, setCardVisible] = useState(true);

    // Blue card visibility
    const [blueCardVisible, setBlueCardVisible] = useState(true);

    /*
     * ==========================================
     * STAFF MOVEMENT
     * ==========================================
     *
     * Every 4 seconds the next staff starts moving.
     */
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % staffData.length);

        }, 4000);

        return () => clearInterval(interval);
    }, []);

    /*
     * ==========================================
     * CARD ANIMATION SEQUENCE
     * ==========================================
     *
     * 1. Staff starts moving
     * 2. Wait 1 second
     * 3. Staff reaches center
     * 4. Details card exits
     * 5. New details are loaded
     * 6. Details card enters
     * 7. Blue card enters after details card
     */
    useEffect(() => {
        // Hide blue card immediately when new staff movement starts
        setBlueCardVisible(false);

        // Keep old details card visible while staff is moving
        const imageTimer = setTimeout(() => {
            // Staff reached center
            setCardVisible(false);

            // Small gap before new card
            const cardTimer = setTimeout(() => {
                // Change staff details
                setCardIndex(activeIndex);

                // Show new details card
                setCardVisible(true);

                // Show blue card after details card animation
                const blueTimer = setTimeout(() => {
                    setBlueCardVisible(true);
                }, 800);

                return () => clearTimeout(blueTimer);
            }, 1000);

            return () => clearTimeout(cardTimer);
        }, 50);

        return () => clearTimeout(imageTimer);
    }, [activeIndex]);

    const cardStaff = staffData[cardIndex];


    /*
     * ==========================================
     * STAFF POSITION
     * ==========================================
     */
    const getPosition = (index: number) => {
        const total = staffData.length;

        const centerIndex = activeIndex;
        const leftIndex = (activeIndex - 1 + total) % total;
        const rightIndex = (activeIndex + 1) % total;
        const enteringIndex = (activeIndex + 2) % total;

        if (index === centerIndex) {
            return "center";
        }

        if (index === leftIndex) {
            return "left";
        }

        if (index === rightIndex) {
            return "right";
        }

        if (index === enteringIndex) {
            return "enter";
        }

        return "hidden";
    };

    return (
        <section className="relative staff-augmention-graph
        lg:mt-[-10%] h-[120vh] md:h-[85vh] overflow-hidden">

            {/* ==========================================
                STAFF IMAGES
            ========================================== */}

            {staffData.map((person, index) => {
                const position = getPosition(index);

                return (
                    <div
                        key={person.id}
                        className={`
                            absolute
                            transition-all
                            duration-1000
                            ease-in-out
                            will-change-[left,right,top,bottom,transform,width,height,opacity]

${position === "center"
                                ? `
        left-1/2
        lg:top-1/2
        -translate-x-1/2
        lg:-translate-y-1/2
        lg:bottom-[-15%]
        w-[clamp(320px,35vw,500px)]
        h-[clamp(320px,35vw,500px)]
        opacity-100
        z-20
        
      `
                                : position === "left"
                                    ? `
        
        left-12                            
        bottom-[50%]
        md:bottom-[60%]
        lg:bottom-[20%]
        w-[clamp(80px,8vw,120px)]
        h-[clamp(110px,11vw,160px)]
        opacity-100
        z-10
        
      `
                                    : position === "right"
                                        ? `
        right-12
        bottom-[50%]
        md:bottom-[60%]
        lg:bottom-[20%]
        w-[clamp(80px,8vw,120px)]
        h-[clamp(110px,11vw,160px)]
        opacity-100
        z-10
      `
                                        : position === "enter"
                                            ? `
        right-[-160px]
        bottom-[20%]
        w-[clamp(80px,8vw,120px)]
        h-[clamp(110px,11vw,160px)]
        opacity-100
        z-0
      `
                                            : `
        left-[-160px]
        bottom-[20%]
        w-[clamp(80px,8vw,120px)]
        h-[clamp(110px,11vw,160px)]
        opacity-0
        pointer-events-none
        z-0
      `
                            }
                        `}
                    >
                        <Image
                            src={person.image}
                            alt={person.name}
                            fill
                            sizes={
                                position === "center"
                                    ? "500px"
                                    : "120px"
                            }
                            className="object-contain rounded-full"
                        />

                        {/* SIDE STAFF ROLE */}

                        {position !== "center" &&
                            position !== "enter" &&
                            position !== "hidden" && (
                                <p
                                    className="
                                        absolute
                                        top-full
                                        left-1/2
                                        -translate-x-1/2
                                        mt-3
                                        whitespace-nowrap
                                        text-[12px]
                                        md:text-[16px]
                                    "
                                >
                                    {person.role}
                                </p>
                            )}

                    </div>
                );
            })}
            <div
                className="
        absolute
        bottom-[55%]
        md:bottom-[55%]
        lg:bottom-[16%]
        left-1/2
        -translate-x-1/2
        w-[20%]
         md:w-[25%]
        lg:w-[30%]
        h-2
        lg:h-3
        rounded-[50%]
        bg-[#000000]/10
        
    "
            />

            {/* ==========================================
                RIGHT STAFF DETAILS CARD
            ========================================== */}

            <div
                className={`
        absolute
        right-0
 
        skill-card-top
        space-y-4
        bg-white
        border-[6px]
        rounded-[10px]
        border-[#E0F0FF]
        p-4
        w-full
        lg:h-fit
staff-card-width
        z-30

        transition-all
        duration-[1200ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]

        ${cardVisible
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0"
                    }
    `}
            >
                {/* ROLE */}

                <p
                    className="
            bg-[#E0F0FF]
            text-[14px]
            text-center
            py-2
            px-4
            rounded-[10px]
            font-semibold
            uppercase
        "
                >
                    {cardStaff.role}
                </p>

                {/* STARS */}

                <div className="flex gap-1">
                    <AppIcon name="MdStar" size={16} />
                    <AppIcon name="MdStar" size={16} />
                    <AppIcon name="MdStar" size={16} />
                    <AppIcon name="MdStar" size={16} />
                    <AppIcon name="MdStar" size={16} />
                </div>

                {/* DESCRIPTION */}

                <p className="text-[15px] leading-6">
                    {cardStaff?.description}
                </p>

                {/* SKILLS */}

                <p
                    className="
            text-[16px]
            uppercase
            font-semibold
            border-b-2
            pb-2
        "
                >
                    Skills
                </p>

                {/* DYNAMIC SKILLS */}

                <div className=" flex gap-2">
                    {cardStaff?.skills?.slice(0, 2)?.map((skill: any, idx: number) => (
                        <div
                            key={idx}
                            className="flex w-fit h-fit px-2 gap-2 border-[1px] border-[#054ADA]/10 rounded-[10px] items-center"
                        >
                            <Image
                                src={`${imageBaseUrl}${skill?.icon}`}
                                width={15}
                                height={15}
                                alt="check"
                            />

                            <p className="text-[10px]">{skill?.name}</p>
                        </div>
                    ))}

                </div>
                <div className=" flex mt-[-10] gap-2">   {cardStaff?.skills?.slice(2, 4)?.map((skill: any, idx: number) => (
                    <div
                        key={idx}
                        className="flex w-fit h-fit px-2 py gap-2 border-[1px] border-[#054ADA]/10 rounded-[10px] items-center"
                    >
                        <Image
                            src={`${imageBaseUrl}${skill?.icon}`}
                            width={15}
                            height={15}
                            alt="check"
                        />

                        <p className="text-[10px]">{skill?.name}</p>
                    </div>
                ))}</div>

            </div>


            {/* ==========================================
                LEFT BLUE CARD
            ========================================== */}

            <div
                className={`
        absolute
        hidden
        left-0
        bottom-[40%]
        space-y-4
        pb-4
        pt-10
        px-4
        bg-[#0084FF]
        rounded-[10px]
        h-fit
        w-[clamp(240px,20vw,300px)]
        z-30

        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]

        ${blueCardVisible
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0"
                    }
    `}
            >
                <div className="relative">

                    <p className="text-[21px] text-white leading-6">
                        {cardStaff?.blueCardDescription}
                    </p>

                    <Image
                        src={`${imageBaseUrl}/common/blue_outfil_check.png`}
                        width={78}
                        height={78}
                        alt=""
                        className="
                absolute
                text-[#EBF5FF]
                top-[-80px]
                left-0
            "
                    />

                </div>
            </div>



        </section>
    );
};

export default StaffAugmentationGraph;  