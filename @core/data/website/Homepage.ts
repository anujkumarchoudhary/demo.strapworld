// import visible from "../../../public/assets/icons/Star.svg";
// import goal from "../../../public/assets/icons/Star.svg";

import person_1 from "../../../public/assets/testimonial/kayal.png";
import person_2 from "../../../public/assets/testimonial/Uncle.jpg";
import person_3 from "../../../public/assets/testimonial/Peter parker.jpg";

//industry
import industry_1 from "../../../public/assets/images/home/industriesWeServe/Industries_1_jrmqwx.webp";
import industry_2 from "../../../public/assets/images/home/industriesWeServe/Industries_2_h9nygi.webp";
import industry_3 from "../../../public/assets/images/home/industriesWeServe/Industries_3_kcgmjn.webp";
import industry_4 from "../../../public/assets/images/home/industriesWeServe/Industries_4_aaspgo.webp";
import industry_5 from "../../../public/assets/images/home/industriesWeServe/Industries_5_hn7poh.webp";
import industry_6 from "../../../public/assets/images/home/industriesWeServe/Industries_6_w0aibz.webp";
import industry_7 from "../../../public/assets/images/home/industriesWeServe/Industries_7_u1ixjf.webp";
import industry_8 from "../../../public/assets/images/home/industriesWeServe/Industries_8_sweb0a.webp";



import { StaticImageData } from "next/image";
import { imageBaseUrl } from "@/app/baseUrl";

export interface ServiceItem {
  icon: StaticImageData;
  label: string;
  title: string;
  description: string;
  link: string;
  image?: StaticImageData;
}

export interface ServiceSection {
  title: string;
  description: string;
  link?: string;
  list: ServiceItem[];
  mainSvg?: string;
  img?: StaticImageData;
  accentColor?: string;
}

export interface ServiceSectionDataType {
  subTitle: string;
  title: string;
  span: string;
  description: string;
  services: ServiceSection[];
}

export type ImageName =
  | "html"
  | "React"
  | "Javascript"
  | "CSS"
  | "Angular"
  | "stitch"
  | "gEMINI"
  | "Zapier"
  | "Xamarin"
  | "Sketch"
  | "SemRush"
  | "ReactNative"
  | "Python"
  | "PWA"
  | "PHP"
  | "OpenAI"
  | "Java"
  | "NodeJS"
  | "Net"
  | "MockFlow"
  | "MistralAI"
  | "Meta"
  | "Jasper"
  | "Iconic"
  | "IOS"
  | "HubSpot"
  | "HootSuite"
  | "AdobeXD"
  | "Grok"
  | "GoogleAnalytics"
  | "Google"
  | "Go"
  | "Framer"
  | "Flutter"
  | "Figma"
  | "Cordova"
  | "CopyAI"
  | "Canva"
  | "Android"
  | "VueJS"
  | "LocalFalcon"
  | "AgencyAnalytics"
  | "case_study_digital_left"
  | "case_study_digital_right"
  | "case_study_webdev"
  | "case_study_03"
  | "case_study_appdev_1"
  | "case_study_appdev_2"
  | "case_study_appdev_3"
  | "RankMath";

interface IndustriesSectionData {
  title?: string;
  description?: string;
  btn?: string;
  image?: ImageName;
}
interface TechStackSectionData {
  title?: string;
  desc?: string;
  image?: ImageName;
}

const images: ImageName[] = [
  "html",
  "React",
  "Javascript",
  "CSS",
  "Angular",
  "VueJS",
  "Java",
  "stitch",
  "gEMINI",
  "Zapier",
  "Xamarin",
  "Sketch",
  "SemRush",
  "ReactNative",
  "Python",
  "PWA",
  "PHP",
  "OpenAI",
  "NodeJS",
  "Net",
  "MockFlow",
  "MistralAI",
  "Meta",
  "Jasper",
  "Iconic",
  "IOS",
  "HubSpot",
  "HootSuite",
  "AdobeXD",
  "Grok",
  "GoogleAnalytics",
  "Google",
  "Go",
  "Framer",
  "Flutter",
  "Figma",
  "Cordova",
  "CopyAI",
  "Canva",
  "Android",
  "LocalFalcon",
  "AgencyAnalytics",
  "case_study_digital_left",
  "case_study_digital_right",
  "case_study_webdev",
  "case_study_03",
  "case_study_appdev_1",
  "case_study_appdev_2",
  "case_study_appdev_3",
  "RankMath",
];

export const SolutionsSectionData = {
  image: "Static Website Images/about_main_anwqk5",
  subTitle: 'Total Transparency. Zero "Black Box" Marketing',
  // title:
  //   'Most clients have no idea what their agency actually does all day. You get a PDF once a month and a bill.',
  headingParts: [
    {
      text: "Most clients have no idea what their agency actually does all day. You get a PDF once a month and a bill.",
      color: "#000000",
      weight: "700",
    },
  ],
  description:
    "But with us, you get 24/7 access to your campaign pulse. We combine advanced tracking tools with human insight to show you exactly how $1 of spend becomes $5 of revenue.",
  points: [
    {
      icon: "goal",
      title: "Our Mission",
      description:
        "We work as your dedicated enterprise digital marketing agency, focused on outcomes, inspired by ideas, and committed to making your brand hard to ignore.",
    },
    {
      icon: "visible",
      title: "Our Vision",
      description:
        "We’re a team of expert strategists, and digital thinkers, a modern blend you’d expect from leading digital transformation agencies, who turn insights into ideas.",
    },
  ],
  cursive:
    "As a powerhouse digital agency, we craft bold ideas backed by data and fueled by creativity that attract attention, command authority, and convert consistently.",
  button: "See What’s Next",
  btnHref: "/about",
};

export const AboutSectionData = {
  image: "Static Website Images/about_main_anwqk5",
  subTitle: "ABOUT US",
  headingParts: [
    {
      text: "Every Brand Has A Story, And We’re Here To Tell It Better!",
      color: "#000000",
      weight: "700",
    },
  ],
  description:
    "As a powerhouse digital agency, we craft bold ideas backed by data and fueled by creativity that attract attention, command authority, and convert consistently. If you want a partner that pushes limits and powers real growth, you’re in the right place.",
  points: [
    {
      icon: "goal",
      title: "Our Mission",
      description:
        "We work as your dedicated enterprise digital marketing agency, focused on outcomes, inspired by ideas, and committed to making your brand hard to ignore.",
    },
    {
      icon: "visible",
      title: "Our Vision",
      description:
        "We’re a team of expert strategists, and digital thinkers, a modern blend you’d expect from leading digital transformation agencies, who turn insights into ideas.",
    },
  ],
  cursive:
    "As a powerhouse digital agency, we craft bold ideas backed by data and fueled by creativity that attract attention, command authority, and convert consistently.",
  btnText: "See What’s Next",
  btnHref: "/about",
};

export const ExpectSectionData = {
  image: "Static Website Images/about_main_anwqk5",
  subTitle: "Advance. Innovate. Achieve.",
  headingParts: [
    {
      text: "A Journey Marked by Success, Creativity, and Progress",
      color: "#000000",
      weight: "700",
    },
  ],
  description: `Our journey in digital marketing is defined by creativity, measurable success, and continuous progress. From SEO and paid campaigns to social media and analytics, we craft strategies that drive engagement, amplify brand visibility, and deliver sustainable growth, turning every campaign into tangible results and long-term business impact.`,
  points: [
    {
      icon: "Static Website Images/homepage_about2",
      title: "More visibility, More Opportunities",
      description:
        "From building identities to shaping conversations and driving measurable impact, we work as your dedicated enterprise digital marketing agency, focused on outcomes, inspired by ideas, and committed to making your brand hard to ignore.",
    },
    {
      icon: "Static Website Images/homepage_about1",
      title: "Higher Engagement Rates",
      description:
        "We’re a team of expert strategists, creators, designers, and digital thinkers, a modern blend you’d expect from leading digital transformation agencies, who turn insights into ideas. For us, it’s simple: brands don’t grow by accident. They grow with intention, consistency, and bold execution. That’s what we bring to the table.",
    },
    {
      icon: "Static Website Images/homepage_about2",
      title: "Stronger Brand Presence",
      description:
        "From building identities to shaping conversations and driving measurable impact, we work as your dedicated enterprise digital marketing agency, focused on outcomes, inspired by ideas, and committed to making your brand hard to ignore.",
    },
    {
      icon: "Static Website Images/homepage_about1",
      title: "Every Dollar Counts",
      description:
        "We’re a team of expert strategists, creators, designers, and digital thinkers, a modern blend you’d expect from leading digital transformation agencies, who turn insights into ideas. For us, it’s simple: brands don’t grow by accident. They grow with intention, consistency, and bold execution. That’s what we bring to the table.",
    },
  ],
  para2:
    "At Adaired Digital Media, we don’t just create strategies; we deliver measurable impact. Our approach transforms ideas into action and action into results that are important to your business.",
  btnHref: "/about",
  records: [
    {
      number: 8,
      suffix: "+ ",
      suffix2: "years",
      name: "Industry Expertise",
      description:
        "Trusted expertise creating solutions that drive performance, engagement, and measurable outcomes.",
    },
    {
      number: 80,
      suffix: "+ ",
      suffix2: "Partners",
      name: "Global Network",
      description:
        "Collaborating with 80+ partners across 11 countries, driving global innovation together.",
    },
    {
      number: 5,
      suffix: "K+ ",
      suffix2: "Projects Completed",
      name: "Project Excellence",
      description:
        "Successfully completing 5,000+ projects worldwide, delivering impact, innovation, and excellence across borders.",
    },
    {
      number: 1500,
      suffix: "+ ",
      suffix2: "Happy Clients",
      name: "Trusted Relationships",
      description:
        "Serving 1,500+ happy clients with exceptional solutions, trust, and lasting satisfaction worldwide",
    },
  ],
};

export const WhyChooseSectionData = {
  subTitle: "Opt for Success",
  headingParts: [
    {
      text: "This is Why Businesses",
      color: "#000000",
      weight: "400",
    },
    {
      text: "Choose Adaired to Scale and Grow",
      color: "#000000",
      weight: "700",
    },
  ],
  points: [
    {
      title: "AI-Powered, Human-Led",
      description:
        "We combine intelligent automation with strategic thinking so that your campaigns run smarter, faster, and sharper, controlled by our human expert.",
      width: 280,
      height: 81,
      position: "start",
    },
    {
      title: "No Long-Term Lock-ins",
      description:
        "We don’t hide behind lengthy contracts. We believe in earning your trust through measurable results, and that’s the only reason we want you to stay.",
      width: 317,
      height: 195,
      position: "center",
    },
    {
      title: "You'll Always Get Absolute Clarity",
      description:
        "No guesswork. We show you exactly what we're doing, why we're doing it, and what it's delivering. Explained in plain language, every step of the way.",
      width: 417,
      height: 186,
      position: "start",
    },
    {
      title: "We Focus on Revenue, Not Just Reach",
      description:
        "More traffic and clicks do not mean more business. Our strategies are built around qualified leads, conversion rates, and real-time revenue.",
      width: 792,
      height: 232,
      position: "start",
    },
    {
      title: "One Team, Full Ownership",
      description:
        "You won’t be passed around. One dedicated relationship manager will handle everything, from strategy to execution. Ensuring nothing falls through the cracks.",
      width: 699,
      height: 232,
      position: "start",
    },
  ],
};

export const CaseStudySectionData = {
  image: "Static Website Images/about_main_anwqk5",
  subTitle: "CASE STUDIES",
  headingParts: [
    {
      text: "Real Success Stories Showcasing",
      color: "#000000",
      weight: "700",
    },
  ],
  span: "Our Impact, Innovation, and Client Achievements.",
  description:
    "Discover real success stories that highlight our impact, drive innovation, and celebrate client achievements. See how our solutions transform businesses, empower growth, and create measurable results across industries.",
  studies: [
    {
      image: "Static Webstudy_3",
      labels: ["Organics", "SEO"],
      title: "Digital Agency Businesses",
      description:
        "Our team includes skilled digital experts who understand what works in today's competitive environment. From strategy to execution, we have years of hands-on expertise to help your brand grow faster and smarter.",
      bgColor: "#FFF4F3",
    },
    {
      image: "Static Webstudy_3",
      labels: ["Organics", "SEO"],
      title: "Digital Agency Businesses",
      description:
        "Every client is assigned a single point of contact who understands your objectives, keeps everything on track, and ensures effective communication from beginning to end. There will be no confusion or delays, only seamless project management.",
      bgColor: "#D7EBFF",
    },
    {
      image: "Static Webstudy_3",
      labels: ["Organics", "SEO"],
      title: "Digital Agency Businesses",
      description:
        "We believe in honesty at every step. You always know what we’re doing, why we’re doing it, and how it benefits your brand. Clear updates, open communication, and performance reports you can trust.",
      bgColor: "#E1F2E2",
    },
  ],
};

export const TestimonialSectionData = {
  subTitle: "Testimonials",
  headingParts: [
    {
      text: "Agency Results and Performance,",
      color: "#000000",
      weight: "400",
    },
    {
      text: "Described by Our Partners Themselves",
      color: "#000000",
      weight: "700",
    },
  ],
  testimonials: [
    {
      name: "Kyle Nelson",
      designation: "Founder, Nexora Solutions",
      description: "",
      span: "",
      rating: "",
      image: person_1,
      link: "https://www.youtube.com/shorts/XycHchQSf_I",
    },
    {
      logo: "google",
      name: "Owen Chapman",
      designation: "Founder, Nexora Solutions",
      description:
        "They worked with us to develop a content strategy that, at last, makes sense for our business. They have been creating well-researched and useful blogs and posts, not just filler. It has made us appear more credible to prospective customers.",
      // span: "helping us generate more leads and build stronger customer trust.",
      rating: "5 / 5",
      image: "",
      link: "https://share.google/32TL5rUWQ6zWERYyU",
    },
    {
      name: "Mike",
      designation: "Founder,",
      description: "",
      span: "",
      rating: "",
      image: person_2,
      link: "https://www.youtube.com/shorts/uZ2IEYwQpZA",
    },
    {
      logo: "upwork",
      name: "David Ashrith",
      designation: "Founder, Nexora Solutions",
      // description: "Media Buyer Wanted for Explosive Drop shipping Launch",
      description: `Great to work with. Clear, timely, detailed communication style. Receptive to feedback and recommendations. I would highly recommend working with Seema and team.`,
      rating: "5 / 5",
      image: "",
      link: "https://www.upwork.com/agencies/1064740584575918080/",
    },
    {
      name: "Peter Parker",
      designation: "Founder,",
      description: "",
      span: "",
      rating: "",
      image: person_3,
      link: "https://www.youtube.com/shorts/wAQhlEU0mtM",
    },
    {
      logo: "google",
      name: "Lou Friedman",
      designation: "Founder, Nexora Solutions",
      description:
        "Their team transformed our online presence with a modern website and smart marketing strategy, helping us generate more leads and build stronger customer trust.",
      rating: "5 / 5",
      image: "",
      link: "https://share.google/w4aFNJTTCHU1nblpa",
    },
  ],
};

export const LogoSliderSectionData = {
  title: "Trusted By:",
  description:
    "The success of our clients is what determines our success. Below are a few of our favorite clients who we have worked for; we have reserved a spot for you!",
  logos: [
    {
      image: "Static Website Images/trustedBy_1",
      alt: "Logo 1",
    },
    {
      image: "Static Website Images/trustedBy_2",
      alt: "Logo 2",
    },
    {
      image: "Static Website Images/trustedBy_3",
      alt: "Logo 3",
    },
    {
      image: "Static Website Images/trustedBy_4",
      alt: "Logo 4",
    },
    {
      image: "Static Website Images/trustedBy_5",
      alt: "Logo 5",
    },
    {
      image: "Static Website Images/trustedBy_6",
      alt: "Logo 6",
    },
    {
      image: "Static Website Images/trustedBy_7",
      alt: "Logo 7",
    },
    {
      image: "Static Website Images/trustedBy_8",
      alt: "Logo 8",
    },
    {
      image: "Static Website Images/trustedBy_9",
      alt: "Logo 9",
    },
    {
      image: "Static Website Images/trustedBy_10",
      alt: "Logo 10",
    },
    {
      image: "Static Website Images/trustedBy_11",
      alt: "Logo 11",
    },
    {
      image: "Static Website Images/trustedBy_12",
      alt: "Logo 12",
    },
  ],
};

export const ServiceSectionData = {
  subTitle: "Our Expertise",
  headingParts: [
    {
      text: "Core Digital Services",
      color: "#000000",
      weight: "400",
    },
    {
      text: "Engineered to",
      color: "#000000",
      weight: "700",
    },
    {
      text: "Scale Your Revenue",
      color: "#000000",
      weight: "400",
    },
  ],
  services: [
    {
      title: "Digital Marketing",
      description:
        "Get featured at the top of search engines and AI platforms using AI-Aligned SEO practices, precise ad targeting, and marketing strategies rooted in growth.",
      btn: "Let’s Rank Higher",
      link: "/digital-marketing-services",
    },

    {
      title: "Web Development",
      description:
        "Get custom WordPress and Shopify websites fully optimized for speed, SEO, and maximum conversions. Built by expert developers who turn traffic into revenue.",
      btn: "Build My Website",
      link: "/web-development-services",
    },
    {
      title: "UI/UX Design",
      description:
        "Get premium, modern, user-centric designs that engage your visitors and inspire actions with layouts built for seamless user experience and business growth.",
      btn: "Transform My Brand’s Look",
      link: "#",
    },
    {
      title: "App Development",
      description:
        "Launch high-performance mobile applications built with Flutter and React Native, crafted by certified developers for a flawless experience on every device.",
      btn: "Launch My Mobile App",
      link: "/mobile-app-development-company",
    },
  ],
  webDevCardsData: [
    {
      id: "step-1",
      title: "Research",
      date: "June 26th, 2025",
      gradient: "from-white to-[#57C3FF]",
      icon: "drag",
      indentLeft: "8%",
      indentRight: "24%",
    },
    {
      id: "step-2",
      title: "Design & Dev",
      date: "June 30th, 2025",
      gradient: "from-white to-[#6C72FF]",
      icon: "infinity",
      indentLeft: "16%",
      indentRight: "16%",
    },
    {
      id: "step-3",
      title: "Maintenance",
      date: "July 5th, 2025",
      gradient: "from-white to-[#14CA74]",
      icon: "drag",
      indentLeft: "24%",
      indentRight: "8%",
    },
  ],
};

export const GrowthSectionData = {
  images: [
    {
      src: "Static Website Images/TeamsBig",
      alt: "Growth Image",
      height: 800,
      width: 800,
      className:
        "max-w-[500px] lg:max-w-full after:absolute after:-top-3 after:-right-3 md:after:-top-6 md:after:-right-6 after:border-2 after:border-[#BC1D8D] after:h-[90%] after:w-[90%] after:-z-10",
    },
    {
      src: "Static Website Images/TeamsSmall",
      alt: "Growth Image",
      height: 100,
      width: 300,
      className:
        "absolute top-3/4 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:top-auto xl:left-auto xl:bottom-[20%] xl:right-[-20%]",
    },
  ],
  subTitle: "Holistic Expertise",
  title: "Digital Marketing Experts Dedicated To Your Growth",
  description:
    "Adaired has helped numerous companies develop their brands with its digital marketing services worldwide. We understand the importance of leads, sales, and return on investment when it comes to digital marketing. Our clients come from all industries of every size.",
  features: [
    "Comprehensive Services",
    "Industry Expertise",
    "Client-Centric Approach",
    "Tailored Solutions",
  ],
  description_II:
    "Our digital marketing agency provides a wide range of services, from initial brand development to a globally syndicated advertising campaign, all of which are customized to meet the unique needs of our clients.",
  pinkBorderText:
    "We strive to surpass your expectations, providing unparalleled quality in our online marketing services.",
  btnText: "Learn More",
  btnHref: "/about",
};

export const AwardsSectionData = [
  {
    image: "Static Website Images/badge1",
    alt: "badge_image_1",
  },
  {
    image: "Static Website Images/badge2",
    alt: "badge_image_2",
  },
  {
    image: "Static Website Images/badge3",
    alt: "badge_image_3",
  },
  {
    image: "Static Website Images/badge4",
    alt: "badge_image_4",
  },
  {
    image: "Static Website Images/badge5",
    alt: "badge_image_5",
  },
  {
    image: "Static Website Images/badge6",
    alt: "badge_image_6",
  },
  {
    image: "Static Website Images/badge7",
    alt: "badge_image_7",
  },
  {
    image: "Static Website Images/badge8",
    alt: "badge_image_8",
  },
];

export const ContactSectionData = {
  image: "Static Website Images/contact_us_image",
  subTitle: "Contact Us",
  headingParts: [
    {
      text: "Power your business growth with trusted strategies that work",
      color: "#000000",
      weight: "700",
    },
  ],
  textColor: "black",
  span: "",
  description:
    "Accelerate your business growth with expert guidance, practical solutions, and proven strategies that help you seize opportunities, overcome challenges, and achieve lasting success.",
  contactDetails: [
    {
      href: "mailto:contact@adaired.com",
      imageSrc: "/assets/images/gmail.svg",
      alt: "Gmail Logo",
      text: "contact@adaired.com",
    },
    {
      href: "https://api.whatsapp.com/send?phone=918907400008",
      imageSrc: "/assets/images/whatsapp.svg",
      alt: "Whatsapp Logo",
      text: "Adaired Digital",
    },
    // {
    //   href: 'skype:live:.cid.46cf67c456a5bb0c?chat',
    //   imageSrc: '/assets/images/skype.svg',
    //   alt: 'Skype Logo',
    //   text: 'Adaired Digital',
    // },
    // {
    //   href: 'https://telegram.me/adaired',
    //   imageSrc: '/assets/images/telegram.svg',
    //   alt: 'Telegram Logo',
    //   text: 'Adaired Digital Media',
    // },
  ],
};

export const IndustriesSectionData = {
  description:
    "We deliver tailored solutions across multiple industries to help businesses scale and grow efficiently.",

  list: [
    {
      image: industry_1,
      title: "E-Commerce",
      description:
        "Scale your niche storefronts into a high-volume store, using eCommerce SEO and Shopify Development strategies.",
      btn: "View Our Projects",
      bgColor: "#000000",
    },
    {
      image: industry_2,
      title: "Finance",
      description:
        "Build trust and credibility for your financial institution or fintech startup with industry-compliant and conversion-driven content. ",
      btn: "View Our Projects",
      bgColor: "#0069FF",
    },
    {
      image: industry_3,
      title: "Technology",
      description:
        "We have transformed niche technology firms into industry leaders with predictable pipeline growth following SaaS SEO and a tech-enabled growth strategy.",
      btn: "View Our Projects",
      bgColor: "#000000",
    },
    {
      image: industry_4,
      title: "Manufacturing",
      description:
        "Our proactive, revenue-focused framework ensures your industrial brand cements itself as the heavy equipment authority in your region.",
      btn: "View Our Projects",
      bgColor: "#0069FF",
    },
    {
      image: industry_5,
      title: "Real Estate",
      description:
        "With top-notch real estate website design, high-impact PPC Campaign, and local SEO mastery, we ensure your firm attracts high-intent buyers instantly.",
      btn: "View Our Projects",
      bgColor: "#0069FF",
    },
    {
      image: industry_6,
      title: "Education",
      description:
        "By combining search marketing, social campaigns, and content that builds credibility, we help education brands reach students who need immediate help.",
      btn: "View Our Projects",
      bgColor: "#000000",
    },
    {
      image: industry_7,
      title: "Hospitality",
      description:
        "We leverage influencer marketing and booking optimization along with seasonal peaks to turn half-baked plans into confirmed revenue.",
      btn: "View Our Projects",
      bgColor: "#0069FF",
    },
    {
      image: industry_8,
      title: "Legal",
      description:
        "We build powerful online presences for law firms and legal professionals, utilizing local SEO and targeted lead-generation strategies to secure high-intent clients.",
      btn: "View Our Projects",
      bgColor: "#000000",
    },
  ],
};

export const TechStackSectionData = {
  navItems: [
    "Front End Technologies",
    "Back End Technologies",
    "UI/UX & Design",
    "Mobile App Development",
    "Marketing Tools",
    "AI Tools",
  ],

  mobileNavItems: ["Frontend", "Backend", "UI/UX", "Mobile", "Marketing", "AI"],

  list: [
    [
      { desc: "HTML", image: "html" },
      { desc: "React Js", image: "React" },
      { desc: "Javascript", image: "Javascript" },
      { desc: "CSS", image: "CSS" },
      // { desc: "Angular", image: "Angular" },
      { desc: "Vue.Js", image: "VueJS" },
    ],

    [
      { desc: "Java", image: "Java" },
      { desc: "Node JS", image: "NodeJS" },
      { desc: "PHP", image: "PHP" },
      { desc: "Python", image: "Python" },
      { desc: "Go", image: "Go" },
      // { desc: ".Net", image: "Net" },
    ],

    [
      { desc: "Figma", image: "Figma" },
      { desc: "Adobe XD", image: "AdobeXD" },
      { desc: "Framer", image: "Framer" },
      { desc: "Sketch", image: "Sketch" },
      // { desc: "MockFlow", image: "MockFlow" },
      { desc: "Stitch", image: "stitch" },
      { desc: "Canva", image: "Canva" },
    ],

    [
      { desc: "Android", image: "Android" },
      { desc: "Flutter", image: "Flutter" },
      // { desc: "Cordova", image: "Cordova" },
      { desc: "iOS", image: "IOS" },
      // { desc: "Xamarin", image: "Xamarin" },
      { desc: "PWA", image: "PWA" },
      // { desc: "Iconic", image: "Iconic" },
      { desc: "React Native", image: "ReactNative" },
    ],

    [
      { desc: "Google Analytics", image: "GoogleAnalytics" },
      { desc: "SEMRUSH", image: "SemRush" },
      { desc: "Ahrefs", image: "ahrefs" },
      { desc: "Rank Math", image: "RankMath" },
      { desc: "AgencyAnalytics", image: "AgencyAnalytics" },
      { desc: "Google Search Console", image: "GoogleSearchConsole" },
      { desc: "Yoast SEO", image: "Yoast" },
      { desc: "Moz", image: "Moz" },
      { desc: "Local Falcon", image: "LocalFalcon" },
      { desc: "Zapier", image: "Zapier" },
    ],

    [
      { desc: "ChatGPT", image: "OpenAI" },
      { desc: "Claude", image: "ClaudeAI" },
      { desc: "Gemini", image: "gEMINI" },
      { desc: "Perplexity AI", image: "Perplexity" },
      { desc: "Meta AI", image: "Meta" },
      { desc: "Grok", image: "Grok" },
      { desc: "Microsoft Copilot", image: "MicrosoftCopilot" },
    ],
  ],
};

export const BlogSectionData = {
  image: "Static Website Images/about_main_anwqk5",
  subTitle: "Resources and Insights",
  headingParts: [
    {
      text: "Industry Ideas Worth Reading and ",
      color: "#000000",
      weight: "400",
    },
    {
      text: "Growth Strategies Worth Stealing.",
      color: "#000000",
      weight: "700",
    },
  ],
  textColor: "black",

  blogs: [
    {
      image: "blog_1",
      label: "02 Jan, 2026",
      title:
        "The Science Behind a Good Logo for Business and High-Impact Website Design",
      description:
        "In a highly competitive digital marketplace, your brand has only a few seconds to make an impression.  Your customers will notice two things in ",
      bgColor: "#FFF4F3",
      rating: 5,
      link: "/good-logo-for-business-and-website-design-science",
    },
    {
      image: "blog_2",
      label: "30 Dec, 2025",
      title:
        "What to Expect from a Digital Marketing Agency USA: A Complete Guide for Businesses",
      description:
        "In today’s competitive online landscape, having a strong digital presence is no longer optional;",
      bgColor: "#D7EBFF",
      link: "/what-to-expect-from-a-digital-marketing-agency-usa",
      rating: 5,
    },
    {
      image: "blog_3",
      label: "26 Dec, 2025",
      title: "The Complete Web Design Process For Successful Business",
      description:
        "Looking for website design services in the USA ? Bringing a website to life is more than just technical work. It’s a creative",
      bgColor: "#E1F2E2",
      link: "/web-design-process-for-business",
      rating: 5,
    },
  ],
};

export const OurProcessData = {
  image: "Static Website Images/about_main_anwqk5",
  subTitle: "Got Questions?",
  headingParts: [
    { text: "Adaired’s", color: "#000000", weight: 400 },
    {
      text: "5 Step Process",
      color: "#000000",
      weight: 700,
    },
    {
      text: "to Drive Your Business Success Online",
      color: "#000000",
      weight: 400,
    },
  ],
  textColor: "black",
  span: "Have questions? Our FAQ section provides clear, concise answers about our services to guide you effortlessly.",
  description:
    "Stay ahead of the digital curve with expert insights, practical strategies, and the latest trends designed to help your brand grow with confidence.",
  list: [
    {
      title: "Clarity Before Strategy",
      image: "home_our_process_1",
      desc: "Before initiating work, we identify your goals and objectives to align clear expectations on project scope, price, and key deliverables.",
    },
    {
      title: "Your Blueprint for Growth",
      image: "home_our_process_2",
      desc: "After the first day, a digital roadmap is built around your brand by aligning the right channels, budgets, timelines, and bottom-line KPIs to drive revenue.",
    },
    {
      title: "Where Brands Come to Life",
      image: "home_our_process_3",
      desc: "At this phase, our creative team builds assets that convert. Our focus remains on commanding attention and driving action that builds your business.",
    },
    {
      title: "Engineering Your Digital Edge",
      image: "home_our_process_4",
      desc: "Here, we build, integrate, and stress-test everything for optimum performance. Your codes, funnels, ad accounts, or tracking pixels are all finalized for scaling.",
    },
    {
      title: "Continuous Growth and ROI",
      image: "home_our_process_5",
      desc: "With real-time tracking, A/B testing, and monthly performance reviews, we double down on what’s working and immediately cut what isn’t.",
    },
  ],
};


export const OurClients = {
  "subTitle": "Global Partnership",
  "headingWidth": 55,
  "isAutoSlide": true,
  "headingParts": [
    {
      "text": "Growing Brands and Businesses",
      "color": "#000000",
      "weight": "400"
    },
    {
      "text": "We are Proud to Scale With",
      "color": "#000000",
      "weight": "600"
    }
  ],
  "listData": [
    {
      "alt": "Crisppi's Chicken",
      "src": '/clients/Client_1.webp'
    },
    {
      "alt": "Knox Pediatric Dentistry",
      "src": '/clients/Client_2.webp'
    },
    {
      "alt": "Aban Persian Restaurant",
      "src": '/clients/Client_3.webp'
    },
    {
      "alt": "Extensions Company",
      "src": '/clients/Client_4.webp'
    },
    {
      "alt": "Hill Property Media",
      "src": '/clients/Client_5.webp'
    },
    {
      "alt": "Devete Financial",
      "src": '/clients/Client_6.webp'
    },
    {
      "alt": "Always Air Services",
      "src": '/clients/Client_7.webp'
    },
    {
      "alt": "Total Comfort FL",
      "src": '/clients/Client_8.webp'
    },
    {
      "alt": "Superior Heating and Air Conditioning",
      "src": '/clients/Client_9.webp'
    },
    {
      "alt": "TiffinStash",
      "src": '/clients/Client_10.webp'
    },
    {
      "alt": "C.J. Varela",
      "src": '/clients/Client_11.webp'
    },
    {
      "alt": "Yellowfin Roofing",
      "src": '/clients/Client_12.webp'
    },
    {
      "alt": "Koontz",
      "src": '/clients/Client_13.webp'
    },
    {
      "alt": "Cunningham AC, Heat & Propane",
      "src": '/clients/Client_14.webp'
    },
    {
      "alt": "Universal Pest Control",
      "src": '/clients/Client_15.webp'
    },
    {
      "alt": "Passion Chiropractic",
      "src": '/clients/Client_16.webp'
    },
    {
      "alt": "Zenison Massage Therapy",
      "src": '/clients/Client_17.webp'
    },
    {
      "alt": "Drive Group LLC",
      "src": '/clients/Client_18.webp'
    },
    {
      "alt": "Plan to Prosper",
      "src": '/clients/Client_19.webp'
    },
    {
      "alt": "Blue Chip Shutters and Blinds",
      "src": '/clients/Client_20.webp'
    },
    {
      "alt": "Security Center Florida",
      "src": '/clients/Client_21.webp'
    },
    {
      "alt": "Acies Renovations",
      "src": '/clients/Client_22.webp'
    },
    {
      "alt": "East Nashville Chiropractor",
      "src": '/clients/Client_23.webp'
    },
    {
      "alt": "Diversified Tree Service, Inc.",
      "src": '/clients/Client_24.webp'
    },
    {
      "alt": "The Digital Department",
      "src": '/clients/Client_25.webp'
    },
    {
      "alt": "Resort Exteriors",
      "src": '/clients/Client_26.webp'
    },
    {
      "alt": "Rice's Termite & Pest Control",
      "src": '/clients/Client_27.webp'
    },
    {
      "alt": "A to Z Quality Fencing",
      "src": '/clients/Client_28.webp'
    },
  ]
}
export const DMOurProcessData = {
  image: "Static Website Images/about_main_anwqk5",
  subTitle: "Got Questions?",
  bgColor: "#000000",
  "serviceId": "digital_marketing",
  headingParts: [
    {
      text: "Everything Our Clients Ask",
      color: "#000000",
      weight: "400",
    },
    {
      text: "Before Partnering With Us",
      color: "#000000",
      weight: "700",
    },
  ],
  textColor: "black",
  span: "Have questions? Our FAQ section provides clear, concise answers about our services to guide you effortlessly.",
  description:
    "Stay ahead of the digital curve with expert insights, practical strategies, and the latest trends designed to help your brand grow with confidence.",
  list: [
    {
      title: "Search Engine Optimization",
      subTitle: "Saas SEO | E-Commerce SEO",
      image: `/our_process/digital_marketing/image_1.webp`,
      description: "Increase organic visibility, attract qualified traffic, and generate leads through strategic digital marketing and SEO services that reduce reliance on paid advertising.",
      desc2: "Build a sustainable source of traffic that continues to grow over time.",
      button: "/search-engine-optimization",
    },
    {
      title: "AI SEO",
      subTitle: "LMM SEO/LLMO | GEO | AEO",
      image: `/our_process/digital_marketing/image_2.webp`,
      description: "Improve visibility across AI-powered search experiences with our AI marketing services and AI search optimization strategies, helping your brand stay discoverable wherever customers seek answers.",
      desc2: "Stay discoverable as search behavior shifts from keywords to conversations.",
      button: "/ai-seo-agency",
    },
    {
      title: "Local SEO",
      subTitle: "GBP Only | GBP + Website",
      image: `/our_process/digital_marketing/image_3.webp`,
      description: "Improve your local presence and connect with nearby customers actively searching for your services.",
      desc2: "Turn local searches into calls, visits, and revenue for your business.",
      button: "/local-seo-company",
    },
    {
      title: "Link Building",
      subTitle: "High Authority Link Building | Guest Post Links | Niche Edits | Press Releases",
      image: `/our_process/digital_marketing/image_4.webp`,
      description: "Build trust with high-quality backlinks that strengthen rankings and support long-term organic growth.",
      desc2: "Earn credibility that helps your website outperform competitors in search.",
      button: "/link-building-agency",
    },
    {
      title: "Pay Per Click",
      subTitle: "Google Ads | Meta Ads | Linkedin Ads | TikTok Ads",
      image: `/our_process/digital_marketing/image_5.webp`,
      description: "Drive targeted traffic, generate qualified leads, and maximize ROI through strategic paid campaigns as part of our comprehensive online digital marketing services.",
      desc2: "Reach high-intent customers at the exact moment they're ready to act.",
      button: "/ppc-management-company",
    },
    {
      title: "Social Media Management",
      subTitle: "Post Creation | Content Calendar | Reel Editing | Creatives",
      image: `/our_process/digital_marketing/image_6.webp`,
      description: "Increase engagement, build credibility, and connect with your audience across relevant social platforms.",
      desc2: "Create meaningful interactions that strengthen brand awareness and loyalty.",
      button: "/social-media-management",
    },
    {
      title: "Content Writing & Marketing",
      subTitle: "Article Writing | Blog Writing | Web Content | E-Commerce Content",
      image: `/our_process/digital_marketing/image_7.webp`,
      description: "Create valuable, search-friendly content that attracts, engages, and converts your ideal customers.",
      desc2: "Transform expertise into content that drives trust, traffic, and conversions.",
      button: "/content-marketing-solutions",
    },
  ],
};

export const FAQSSectionData = {
  image: "Static Website Images/about_main_anwqk5",
  subTitle: "Got Questions?",
  headingParts: [
    {
      text: "Everything Our Clients Ask",
      color: "#000000",
      weight: "400",
    },
    {
      text: "Before Partnering With Us",
      color: "#000000",
      weight: "700",
    },
  ],
  textColor: "black",
  span: "Have questions? Our FAQ section provides clear, concise answers about our services to guide you effortlessly.",
  description:
    "Stay ahead of the digital curve with expert insights, practical strategies, and the latest trends designed to help your brand grow with confidence.",
  list: [
    {
      image: "blog_1",
      title: "What services does Adaired offer?",
      description:
        "Adaired provides complete digital solutions, including digital and AI marketing services, custom web designs, web development, and App development to help businesses build a strong online presence, attract more customers, and achieve long-term success.",
      bgColor: "#FFF4F3",
      rating: 5,
    },
    {
      image: "blog_2",
      title: "What makes Adaired different from a traditional agency?",
      description:
        "As an AI marketing Agency, we replace intuitions with data-driven intelligence. Our focus is largely on revenue impact rather than on clicks, operating with human intelligence and advanced automation to make your business profitable.",
      bgColor: "#D7EBFF",
      rating: 5,
    },
    {
      image: "blog_3",
      title: "How soon does digital marketing show results?",
      description: `The results differ based on your strategies, competition, and the state of your website. However, with complete access, better rankings and increased traffic can be observed with consistent efforts within 3-6 months.`,
      bgColor: "#E1F2E2",
      rating: 5,
    },
    {
      image: "blog_2",
      title: "My marketing budget is currently being wasted. What should I do?",
      description:
        "Industry data shows that 76% of marketing spend is often wasted on underperforming channels. Under such circumstances, you must identify your leaks and reallocate your budget toward high-intent audiences, or you should contact a digital marketing agency like Adaired for a complete takeover.",
      bgColor: "#D7EBFF",
      rating: 5,
    },
    {
      image: "blog_2",
      title: "How do you track and report on performance? ",
      description:
        "At Adaired, transparency is maintained through real-time reporting dashboards. These tools provide complete visibility into your performance across channels, transforming raw data into actionable intelligence so you always know your ROI and current campaign status.",
      bgColor: "#D7EBFF",
      rating: 5,
    },
    {
      image: "blog_3",
      title: "Do you provide custom packages for small businesses?",
      description:
        "Yes, Adaired does not believe in “One-Size-Fits-All” bundles. Every strategy at this AI marketing agency is custom-built to align with your specific industry, niche market, and financial capacity.",
      bgColor: "#E1F2E2",
      rating: 5,
    },
    {
      image: "blog_3",
      title: "What technologies do you use for Web and App Development? ",
      description:
        "Agencies typically utilize modern, scalable frameworks such as WordPress, Shopify, Laravel, ReactJS, and Flutter. The focus is on compact, clean coding and schema-rich structures to ensure sites are fast and easily cited by AI search engines.",
      bgColor: "#E1F2E2",
      rating: 5,
    },
    {
      image: "blog_3",
      title: "How does UI/UX design directly impact my bottom line? ",
      description:
        "UI/UX design is treated as a sales tool rather than just an aesthetic choice. Through A/B testing and user behavior analysis, agencies optimize the sales funnel to turn passive website visitors into active, high-value leads.",
      bgColor: "#E1F2E2",
      rating: 5,
    },
  ],
};

export const LetsTalkSectionData = {
  headingParts: [
    {
      text: "Ready to Start Your SEO Project Today?",
      color: "#FFFFFF",
      weight: "700",
    },
  ],
  button: "Get Your Free Marketing Audit",
  description: [
    "Boost your online visibility, attract targeted traffic, and grow your business with our expert SEO strategies.",
  ],
  bg: "bg-gradient-to-r from-[#2830F3] to-[#00FFC5]",
};

export const slideData: {
  headingParts: { text: string; color: string; weight: string }[];
  tags: string[];
  description: string;
  button: string;
  bgClass: string;
  variant?: "2-column" | "3-column";
  images: any;
}[] = [
    {
      headingParts: [
        { text: "Digital", color: "#000000", weight: "500" },
        { text: "Marketing", color: "#000000", weight: "600" },
      ],
      tags: [
        "SEO",
        "PPC",
        "LEAD GENERATION",
        "REMARKETING",
        "PERFORMANCE MARKETING",
      ],
      description:
        "Explore our data-backed case studies showcasing how we transformed raw online presence into compounding business growth.",
      button: "See Our Marketing Results",
      bgClass: "bg-linear-to-b from-[#DBEAFF] to-[#F6FAFF]",
      variant: "2-column",
      images: ["case_study_digital_left", "case_study_digital_right"],
    },
    {
      headingParts: [
        { text: "Web", color: "#000000", weight: "500" },
        { text: "Development", color: "#000000", weight: "600" },
      ],
      tags: [
        "WEBSITE DEVELOPMENT",
        "E-COMMERCE",
        "CMS SOLUTIONS",
        "CUSTOM INTEGRATIONS",
      ],
      description:
        "Witness how we engineered a clean, fast, and conversion-optimized website designed to streamline operations and maximize business profitability.",
      button: "Explore Our Frameworks",
      bgClass: "bg-linear-to-b from-[#EBD8FF] to-[#FFFFFF]",
      images: ["case_study_webdev"],
    },
    {
      headingParts: [
        { text: "UI/UX", color: "#000000", weight: "500" },
        { text: "Designs", color: "#000000", weight: "600" },
      ],
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
      bgClass: "bg-linear-to-b from-[#B3FFEE] to-[#FFFFFF]",
      images: ["case_study_03"],
    },
    {
      headingParts: [
        { text: "App", color: "#000000", weight: "500" },
        { text: "Development", color: "#000000", weight: "600" },
      ],
      tags: [
        "IOS DEVELOPMENT",
        "ANDROID APPS",
        "CROSS-PLATFORM",
        "CUSTOM SOLUTIONS",
        "APP MAINTENANCE",
      ],
      description:
        "Dive into our iOS and Android architectures to see how we transform custom software into highly valuable digital assets.",
      button: "Explore Our Deployments",
      bgClass: "bg-linear-to-b from-[#EAC3FF] to-[#FFFFFF]",
      variant: "3-column",
      images: ["case_study_appdev_1", "case_study_appdev_2", "case_study_appdev_3"],
    },
  ];
