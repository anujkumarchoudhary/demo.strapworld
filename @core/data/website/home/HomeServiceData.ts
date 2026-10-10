import AppImage from "../../../../app/components/AppImage";
import dm_case_studies_1 from "../../../../public/assets/digital_marketing/case_studies/dm_case_studies_1.png";
import dm_case_studies_2 from "../../../../public/assets/digital_marketing/case_studies/dm_case_studies_2.png";
import dm_case_studies_3 from "../../../../public/assets/digital_marketing/case_studies/dm_case_studies_3.png";

export type ImageName =
  | "uiDesign1"
  | "uiDesign2"
  | "uiDesign3"
  | "uiDesign4"
  | "uiDesign5";

interface UiDesignTool {
  id: string;
  name: string;
  icon: any;
  position: string;
}

export const uiDesignToolsData: UiDesignTool[] = [
  {
    id: "figma",
    name: "Figma",
    icon: "https://adaired-media.s3.us-east-1.amazonaws.com/services/uiDesign_1.png",
    position:
      "top-[30.5%] left-[21.5%] md:top-[15%] md:left-[24%] lg:top-[14.5%] lg:left-[24%] ui-ux-positions-figma",
  },
  {
    id: "xd",
    name: "Adobe XD",
    icon: "https://adaired-media.s3.us-east-1.amazonaws.com/services/uiDesign_2.png",
    position:
      "top-[32%] left-[62%] md:top-[15%] md:left-[62%] lg:top-[14%] lg:left-[62%] ui-ux-positions-XD",
  },
  {
    id: "sketch",
    name: "Sketch",
    icon: "https://adaired-media.s3.us-east-1.amazonaws.com/services/uiDesign_3.png",
    position:
      "top-[53%] left-[9%] md:top-[58%] md:left-[13%] lg:top-[59%] lg:left-[14%] ui-ux-positions-sketch",
  },
  {
    id: "testing",
    name: "Testing",
    icon: "https://adaired-media.s3.us-east-1.amazonaws.com/services/uiDesign_4.png",
    position:
      "top-[45%] left-[68.8%] md:top-[43%] md:left-[69%] lg:top-[43%] lg:left-[69%]",
  },
  {
    id: "webflow",
    name: "Webflow",
    icon: "https://adaired-media.s3.us-east-1.amazonaws.com/services/uiDesign_5.png",
    position:
      "top-[56%] left-[58.8%] md:top-[65%] md:left-[59%] lg:top-[66%] lg:left-[58.8%] ui-ux-positions-webFlow",
  },
];

export const glowSquares = [
  "top-[135px] -left-[10px] md:top-[135px] md:left-[80px] lg:top-[135px] lg:left-[90px] ui-ux-positions-glowSquare-1",
  "top-[75px] right-[110px] md:top-[75px] md:right-[260px] lg:top-[75px] lg:right-[270px] ui-ux-positions-glowSquare-2",
  "top-[195px] -right-[10px] md:top-[195px] md:right-[80px] lg:top-[195px] lg:right-[90px] ui-ux-positions-glowSquare-3",
  "bottom-[135px] left-[50px] md:bottom-[75px] md:left-[140px] lg:bottom-[75px] lg:left-[150px] ui-ux-positions-glowSquare-4",
  "bottom-[75px] right-[50px] md:bottom-[75px] md:right-[140px] lg:bottom-[75px] lg:right-[150px] ui-ux-positions-glowSquare-5",
];

export const CODE_TOKENS = [
  { text: "<!DOCTYPE html>\n", color: "text-[#0B4F93]" },
  { text: "<html", color: "text-[#0B4F93]" },
  { text: " lang=", color: "text-[#C97A1E]" },
  { text: '"en"', color: "text-[#1E7E5A]" },
  { text: ">\n", color: "text-[#0B4F93]" },
  { text: "<head>\n", color: "text-[#0B4F93]" },
  { text: "  <meta", color: "text-[#0B4F93]" },
  { text: " charset=", color: "text-[#C97A1E]" },
  { text: '"UTF-8"', color: "text-[#1E7E5A]" },
  { text: " />\n", color: "text-[#0B4F93]" },

  { text: "  <meta", color: "text-[#0B4F93]" },
  { text: " name=", color: "text-[#C97A1E]" },
  { text: '"viewport"', color: "text-[#1E7E5A]" },
  { text: " content=", color: "text-[#C97A1E]" },
  { text: '"width=device-width, initial-scale=1.0"', color: "text-[#1E7E5A]" },
  { text: " />\n", color: "text-[#0B4F93]" },

  { text: "  <title>", color: "text-[#0B4F93]" },
  { text: "Interactive Dashboard", color: "text-[#1F2937]" },
  { text: "</title>\n\n", color: "text-[#0B4F93]" },

  { text: "  <style>\n", color: "text-[#0B4F93]" },
  { text: "    body", color: "text-[#7C3AED]" },
  { text: " { ", color: "text-[#1F2937]" },
  { text: "font-family:", color: "text-[#1F2937]" },
  { text: "Arial;", color: "text-[#C97A1E]" },
  { text: " }\n", color: "text-[#1F2937]" },

  { text: "    .card", color: "text-[#7C3AED]" },
  { text: " { ", color: "text-[#1F2937]" },
  { text: "padding:", color: "text-[#1F2937]" },
  { text: "20px;", color: "text-[#C97A1E]" },
  { text: " }\n", color: "text-[#1F2937]" },

  { text: "    button", color: "text-[#7C3AED]" },
  { text: " { ", color: "text-[#1F2937]" },
  { text: "cursor:", color: "text-[#1F2937]" },
  { text: "pointer;", color: "text-[#C97A1E]" },
  { text: " }\n", color: "text-[#1F2937]" },

  { text: "  </style>\n", color: "text-[#0B4F93]" },
  { text: "</head>\n\n", color: "text-[#0B4F93]" },

  { text: "<body>\n", color: "text-[#0B4F93]" },

  { text: "  <main", color: "text-[#0B4F93]" },
  { text: " class=", color: "text-[#C97A1E]" },
  { text: '"card"', color: "text-[#1E7E5A]" },
  { text: ">\n", color: "text-[#0B4F93]" },

  { text: "    <h2>", color: "text-[#0B4F93]" },
  { text: "Analytics Dashboard", color: "text-[#1F2937]" },
  { text: "</h2>\n", color: "text-[#0B4F93]" },

  { text: "    <p>", color: "text-[#0B4F93]" },
  {
    text: "Track your website performance in real time.",
    color: "text-[#1F2937]",
  },
  { text: "</p>\n\n", color: "text-[#0B4F93]" },

  { text: "    <ul>\n", color: "text-[#0B4F93]" },
  { text: "      <li>", color: "text-[#0B4F93]" },
  { text: "Visitors: 12,450", color: "text-[#1F2937]" },
  { text: "</li>\n", color: "text-[#0B4F93]" },

  { text: "      <li>", color: "text-[#0B4F93]" },
  { text: "Conversion Rate: 4.8%", color: "text-[#1F2937]" },
  { text: "</li>\n", color: "text-[#0B4F93]" },

  { text: "      <li>", color: "text-[#0B4F93]" },
  { text: "Bounce Rate: 31%", color: "text-[#1F2937]" },
  { text: "</li>\n", color: "text-[#0B4F93]" },
  { text: "    </ul>\n\n", color: "text-[#0B4F93]" },

  { text: "    <button", color: "text-[#0B4F93]" },
  { text: " id=", color: "text-[#C97A1E]" },
  { text: '"actionBtn"', color: "text-[#1E7E5A]" },
  { text: ">", color: "text-[#0B4F93]" },
  { text: "Generate Report", color: "text-[#1F2937]" },
  { text: "</button>\n\n", color: "text-[#0B4F93]" },

  { text: "    <div", color: "text-[#0B4F93]" },
  { text: " id=", color: "text-[#C97A1E]" },
  { text: '"output"', color: "text-[#1E7E5A]" },
  { text: "></div>\n", color: "text-[#0B4F93]" },

  { text: "  </main>\n\n", color: "text-[#0B4F93]" },

  { text: "  <script>\n", color: "text-[#0B4F93]" },

  { text: "    const", color: "text-[#C97A1E]" },
  { text: " reports", color: "text-[#1F2937]" },
  { text: " = ", color: "text-[#1F2937]" },
  { text: "[", color: "text-[#0B4F93]" },
  { text: '"SEO Optimized"', color: "text-[#1E7E5A]" },
  { text: ", ", color: "text-[#1F2937]" },
  { text: '"Performance Stable"', color: "text-[#1E7E5A]" },
  { text: ", ", color: "text-[#1F2937]" },
  { text: '"Traffic Increased"', color: "text-[#1E7E5A]" },
  { text: "];\n\n", color: "text-[#0B4F93]" },

  { text: "    const", color: "text-[#C97A1E]" },
  { text: " button", color: "text-[#1F2937]" },
  { text: " = ", color: "text-[#1F2937]" },
  { text: "document.querySelector(", color: "text-[#0B4F93]" },
  { text: '"#actionBtn"', color: "text-[#1E7E5A]" },
  { text: ");\n", color: "text-[#0B4F93]" },

  { text: "    const", color: "text-[#C97A1E]" },
  { text: " output", color: "text-[#1F2937]" },
  { text: " = ", color: "text-[#1F2937]" },
  { text: "document.querySelector(", color: "text-[#0B4F93]" },
  { text: '"#output"', color: "text-[#1E7E5A]" },
  { text: ");\n\n", color: "text-[#0B4F93]" },

  { text: "    button.addEventListener(", color: "text-[#0B4F93]" },
  { text: '"click"', color: "text-[#1E7E5A]" },
  { text: ", () => {\n", color: "text-[#1F2937]" },

  { text: "      const", color: "text-[#C97A1E]" },
  { text: " randomIndex", color: "text-[#1F2937]" },
  { text: " = ", color: "text-[#1F2937]" },
  { text: "Math.floor(", color: "text-[#0B4F93]" },
  { text: "Math.random()", color: "text-[#0B4F93]" },
  { text: " * reports.length);\n", color: "text-[#1F2937]" },

  { text: "      output.innerHTML", color: "text-[#0B4F93]" },
  { text: " = ", color: "text-[#1F2937]" },
  { text: "`<p>${reports[randomIndex]}</p>`;\n", color: "text-[#1E7E5A]" },

  { text: "      console.log(", color: "text-[#0B4F93]" },
  { text: '"Report Generated Successfully"', color: "text-[#1E7E5A]" },
  { text: ");\n", color: "text-[#0B4F93]" },

  { text: "    });\n\n", color: "text-[#1F2937]" },

  { text: "    window.addEventListener(", color: "text-[#0B4F93]" },
  { text: '"load"', color: "text-[#1E7E5A]" },
  { text: ", () => {\n", color: "text-[#1F2937]" },

  { text: "      console.log(", color: "text-[#0B4F93]" },
  { text: '"Dashboard Ready"', color: "text-[#1E7E5A]" },
  { text: ");\n", color: "text-[#0B4F93]" },

  { text: "    });\n", color: "text-[#1F2937]" },

  { text: "  </script>\n", color: "text-[#0B4F93]" },

  { text: "</body>\n", color: "text-[#0B4F93]" },
  { text: "</html>", color: "text-[#0B4F93]" },
];

export const appDevData = [
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description:
      "We create fast, scalable, and user-friendly mobile apps designed to deliver real impact and long-term growth.",
    icon: "appDevPencil",
    // icon: <AppImage name="appDevPencil" alt="appDevPencil" height={33} width={33} />,
    borderGradient:
      "bg-[linear-gradient(to_bottom_right,#4F23E7_5%,#0069FF_44%,#ffffff_100%)]",
    iconGradient: "from-[#6C72FF] to-white",
    avatars: [
      "appDevAvatar_1",
      "appDevAvatar_2",
      "appDevAvatar_3",
      "appDevAvatar_4",
    ],
    extraAvatars: 2,
    floatingBadges: [
      {
        text: "Cross -Platform",
        icon: "/internal_services/digital_marketing/app_development/image_1.png",
        position: "-left-5 md:-left-18 top-15",
        link: "/cross-platform-app-development",
      },
      {
        text: "iOS apps",
        icon: "/internal_services/digital_marketing/app_development/image_3.png",
        position: "-left-5 md:-left-18 bottom-1/7",
        link: "/ios-app-development-company",
      },
      {
        text: "Android apps",
        icon: "/internal_services/digital_marketing/app_development/image_2.png",
        position: "-right-5 md:-right-25 top-18",
        link: "/android-app-development-company",
      },
      {
        text: "Native Apps",
        icon: "/internal_services/digital_marketing/app_development/image_4.png",
        position: "-right-5 md:-right-20 bottom-1/9",
        link: "#",
      },
    ],
  },
];

export const digitalData = [
  "/digitalImage_1.png",
  "/digitalImage_2.png",
  "/digitalImage_3.png",
  "/digitalImage_4.png",
  "/digitalImage_5.png",
  "/digitalImage_6.png",
  "/digitalImage_7.png",
  "/digitalImage_8.png",
  "/digitalImage_9.png",
  "/digitalImage_10.png",
  "/digitalImage_11.png",
  "/digitalImage_12.png",
] as const;

export const itemPositions = [
  { top: "-9%", left: "40%", arcIndex: 3 },
  { top: "9%", left: "67%", arcIndex: 2 },
  { top: "38%", left: "83%", arcIndex: 2 },
  { top: "55%", left: "66%", arcIndex: 0 },
  { top: "45%", left: "34%", arcIndex: 0 },
  { top: "49%", left: "5%", arcIndex: 3 },
  { top: "29%", left: "30%", arcIndex: 1 },
  { top: "49%", left: "95%", arcIndex: 3 },
  { top: "109%", left: "40%", arcIndex: 3 },
  { top: "91%", left: "33%", arcIndex: 2 },
  { top: "62%", left: "17%", arcIndex: 2 },
  { top: "71%", left: "70%", arcIndex: 1 },
];

export const whatMakeDifferent = {
  "isVisible": true,
  "isVariant": "01",
  "breakIndex": 5,
  "isCenter": true,
  "bgColor": "#FFFFFF",
  "bgGradient": "",
  "cardColor": "#FDFBFF",
  "cardImgBgColor2": "#F7F1FD",
  "cardImgBgColor": "#F7F1FD",
  "borderColor2": "#F0E6FB",
  "borderColor": "#F0E6FB",
  "headingParts": [
    {
      "text": "What Makes Adaired Different",
      "color": "#000000",
      "weight": "400"
    },
    {
      "text": "From Our Competitors?",
      "color": "#000000",
      "weight": "700"
    }
  ],
  "description": [],
  "list": [
    {
      headingParts: [
        { text: "Digital", color: "#000000", weight: "500" },
        { text: "Marketing", color: "#000000", weight: "600" },
      ],
      columnGap: 20,
      tags: [
        "SEO",
        "PPC",
        "LEAD GENERATION",
        "REMARKETING",
        "PERFORMANCE MARKETING",
      ],
      // rotation: 25,

      description:
        "Explore our data-backed case studies showcasing how we transformed raw online presence into compounding business growth.",
      button: "See Our Marketing Results",
      "img": "",
      "bgColor": "linear-gradient(to bottom, #DBEAFF, #F6FAFF)",
      columns: 2,
      speed: 15,
      images: ["case_study_digital_left", "case_study_digital_right"],
      ImageBgColor: "#d898fe",
    },
    {
      "img": "",
      headingParts: [
        { text: "Web", color: "#000000", weight: "500" },
        { text: "Development", color: "#000000", weight: "600" },
      ],
      columnGap: 20,
      speed: 25,
      rotation: 45,
      tags: [
        "WEBSITE DEVELOPMENT",
        "E-COMMERCE",
        "CMS SOLUTIONS",
        "CUSTOM INTEGRATIONS",
      ],
      columns: 2,
      description:
        "Witness how we engineered a clean, fast, and conversion-optimized website designed to streamline operations and maximize business profitability.",
      button: "Explore Our Frameworks",
      "bgColor": "linear-gradient(to bottom, #EBD8FF, #FFFFFF)",
      images: ["web_development_case_studies", "web_development_case_studies2"],
      ImageBgColor: "#d898fe",
    },
    {
      "img": "",
      headingParts: [
        { text: "UI/UX", color: "#000000", weight: "500" },
        { text: "Designs", color: "#000000", weight: "600" },
      ],
      // columnGap: 20,
      speed: 30,
      columns: 1,
      tags: [
        "WIREFRAMING",
        "USER RESEARCH",
        "APP DESIGNS",
        "DESIGN SYSTEMS",
        "Brand Identity",
      ],
      description:
        "Discover some beautiful and intuitive digital interfaces that retain active users and accelerate our clients’ market traction.",
      button: "See Design Ecosystem",
      bgColor: "linear-gradient(to bottom, #B3FFEE, #FFFFFF)",
      ImageBgColor: "#d898fe",
      images: ["uiux_case_studies"],

    },
    {
      "img": "",
      headingParts: [
        { text: "App", color: "#000000", weight: "500" },
        { text: "Development", color: "#000000", weight: "600" },
      ],
      columnGap: 20,
      tags: [
        "IOS DEVELOPMENT",
        "ANDROID APPS",
        "CROSS-PLATFORM",
        "CUSTOM SOLUTIONS",
        "APP MAINTENANCE",
      ],
      columns: 3,
      speed: 35,
      rotation: 45,
      description:

        "Dive into our iOS and Android architectures to see how we transform custom software into highly valuable digital assets.",
      button: "Explore Our Deployments",
      bgColor: "linear-gradient(to bottom, #EAC3FF, #FFFFFF)",
      ImageBgColor: "#d898fe",
      images: ["case_study_appdev_2", "case_study_appdev_1", "case_study_appdev_3"],

    },
  ]
}

export const DM_Case_Studies = {
  "isVisible": true,
  "isVariant": "01",
  "isLabel": true,
  "breakIndex": 5,
  "isCenter": true,
  "bgColor": "#FFFFFF",
  "bgGradient": "",
  "cardColor": "#FDFBFF",
  "cardImgBgColor2": "#F7F1FD",
  "cardImgBgColor": "#F7F1FD",
  "borderColor2": "#F0E6FB",
  "borderColor": "#F0E6FB",
  "headingParts": [
    {
      "text": "Explore How Our",
      "color": "#000000",
      "weight": "400"
    },
    {
      "text": "Revenue-Driven Digital Marketing Solutions Help Businesses Grow Visibility, Traffic, and Sales",
      "color": "#000000",
      "weight": "600"
    }
  ],
  "description": [],
  "list": [
    {
      headingParts: [
        { text: "Med Cycle LLC", color: "#000000", weight: "600" },
      ],
      columnGap: 20,
      tags: [
        "SEO",
        "PPC",
        "LEAD GENERATION",
        "REMARKETING",
        "PERFORMANCE MARKETING",
      ],
      // rotation: 25,

      description:
        "Helping a regional medical waste provider expand its digital footprint and compete for high-intent healthcare and commercial searches.",
      button: "See Our Marketing Results",
      image: "/case_studies/digital_marketing/image_1.webp",
      "bgColor": "linear-gradient(to bottom, #e8edff, #FFFFFF)",
      columns: 2,
      speed: 8,
      images: ["case_study_digital_left", "case_study_digital_right"],
      ImageBgColor: "#d898fe",
      results: [{
        name: "Total Keyword Position Gains",
        value: 265
      }, {
        name: "Increase in Organic Traffic",
        value: "1819%"
      }]
    },
    {
      image: "/case_studies/digital_marketing/image_2.webp",
      headingParts: [
        { text: "Schmidt Gates", color: "#000000", weight: "600" },
      ],
      columnGap: 20,
      speed: 20,
      rotation: 45,
      tags: [
        "WEBSITE DEVELOPMENT",
        "E-COMMERCE",
        "CMS SOLUTIONS",
        "CUSTOM INTEGRATIONS",
      ],
      columns: 2,
      description:
        "Positioning a premium custom gates manufacturer as the preferred choice for homeowners searching for high-quality gate solutions.",
      button: "Explore Our Frameworks",
      "bgColor": "linear-gradient(to bottom, #fef8e0, #FFFFFF)",
      images: ["web_development_case_studies", "web_development_case_studies2"],
      ImageBgColor: "#d898fe",
      results: [{
        name: "Total Keyword Position Gains",
        value: 173
      }, {
        name: "Increase in Organic Traffic",
        value: "177%"
      }]
    },
    {
      image: "/case_studies/digital_marketing/image_3.webp",
      headingParts: [
        { text: "Universal Pest Control", color: "#000000", weight: "600" },
      ],
      // columnGap: 20,
      speed: 20,
      columns: 1,
      tags: [
        "WIREFRAMING",
        "USER RESEARCH",
        "APP DESIGNS",
        "DESIGN SYSTEMS",
        "Brand Identity",
      ],
      description:
        "Helping a pest control company increase its search presence for high-intent local service queries and seasonal demand.",
      button: "See Design Ecosystem",
      bgColor: "linear-gradient(to bottom, #fff1f0, #FFFFFF)",
      ImageBgColor: "#d898fe",
      images: ["uiux_case_studies"],
      results: [{
        name: "Total Keyword Position Gains",
        value: 602
      }, {
        name: "Total Search Impressions Gain ",
        value: "2.16M"
      }]

    },
  ]
}