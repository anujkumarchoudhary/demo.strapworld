/* ======================================
   NAV TYPES
====================================== */

export type NavLeaf = {
  name: string;
  href: string;
};

export type NavGroup = {
  icon: string;
  name: string;
  href: string;
  subItems: NavLeaf[];
};

export type WebsiteNavItem = {
  label: string;
  value: string;
  href: string;
  subItems?: NavGroup[] | NavLeaf[];
};

/* ======================================
   TYPE GUARDS (CRITICAL FIX)
====================================== */

export const isNavGroupArray = (
  items: WebsiteNavItem["subItems"],
): items is NavGroup[] =>
  Array.isArray(items) &&
  items.length > 0 &&
  typeof items[0] === "object" &&
  "subItems" in items[0];

export const isNavLeafArray = (
  items: WebsiteNavItem["subItems"],
): items is NavLeaf[] =>
  Array.isArray(items) && (items.length === 0 || !("subItems" in items[0]));

/* ======================================
   ROUTES
====================================== */

export const routes: {
  auth: Record<string, string>;
  root: Record<string, string>;
  websiteNav: WebsiteNavItem[];
  homeWebsite: Record<string, string>;
  ecommerceNav: {
    label: string;
    value: string;
    href: string;
  }[];
  eCommerce: {
    home: string;
    products: string;
    shop: string;
    cart: string;
    contentProductForm: (slug: string) => string;
    orders: string;
    orderDetails: (id: string) => string;
    thankyouPage: string;
  };
  userDashboard: {
    website: string;
    dashboard: string;
    accountSettings: string;
    passwordSettings: string;
    cart: string;
    orders: string;
    tickets: string;
    inbox: (tickedId: string) => string;
    invoices: string;
    invoiceDetails: (id: string) => string;
  };
  termsNconditions: string;
  privacyPolicy: string;
} = {
  auth: {
    signUp: "/auth/sign-up",
    signIn: "/auth/sign-in",
    forgotPassword: "/auth/forgot-password",
    error: "/auth/error",
  },

  root: {
    home: "/",
    bhwHome: "/content-marketing-solutions",
    TermsNConditions: "/terms-and-conditions",
    PrivacyPolicy: "/privacy-policy",
  },

  websiteNav: [
    // {
    //   label: 'About Us',
    //   value: 'about',
    //   href: '/about-us',
    // },
    {
      label: "Services",
      value: "services",
      href: "#",
      subItems: [
        // {
        //   icon: icon_1,
        //   name: 'White Label (For Agencies)',
        //   href: '/services/white-label-agency-india',
        //   subItems: [
        //     {
        //       name: 'White Label SEO',
        //       href: '/services/seo-outsourcing-india',
        //     },
        //     {
        //       name: 'White Label Social Media',
        //       href: '/services/social-media-outsourcing-india',
        //     },
        //     {
        //       name: 'White Label Paid Ads',
        //       href: '/services/white-label-paid-ads-india',
        //     },
        //     {
        //       name: 'White Label Link Building',
        //       href: '/services/white-label-link-building-india',
        //     },
        //   ],
        // },
        {
          icon: "icon_5",
          name: "Search Engine Optimization",
          href: "/search-engine-optimization",
          subItems: [
            // {
            //   name: 'SEO',
            //   href: '/services/seo-company-india',
            // },
            {
              name: "SaaS SEO",
              href: "/saas-seo-agency",
            },
            {
              name: "E-Commerce SEO",
              href: "/ecommerce-seo-agency",
            },
          ],
        },
        {
          icon: "icon_8",
          name: "AI SEO",
          href: "/ai-seo-agency",
          subItems: [
            // {
            //   name: 'AI SEO',
            //   href: '/services/ai-seo-india',
            // },
            {
              name: "LLM SEO/LLMO",
              href: "/llm-seo-agency",
            },
            {
              name: "GEO",
              href: "/generative-engine-optimization",
            },
            {
              name: "AEO",
              href: "/answer-engine-optimization",
            },
          ],
        },
        {
          icon: "icon_6",
          name: "Local SEO",
          href: "/local-seo-company",
          subItems: [
            {
              name: "GBP Only",
              href: "/google-my-business-optimization",
            },
            {
              name: "GBP + Website",
              href: "/gmb-website-seo",
            },
          ],
        },
        {
          icon: "icon_2",
          name: "Link Building",
          href: "/link-building-agency",
          subItems: [
            {
              name: "High Authority Link Building",
              href: "#",
            },
            {
              name: "Guest Post Links",
              href: "#",
            },
            {
              name: "Niche Edits",
              href: "#",
            },
            {
              name: "Press Releases",
              href: "#",
            },
          ],
        },
        {
          icon: "icon_9",
          name: "Pay Per Click",
          href: "/ppc-management-company",
          subItems: [
            {
              name: "Google Ads",
              href: "/google-ads-management-company",
            },
            {
              name: "Meta Ads",
              href: "/meta-ads-agency",
            },
            {
              name: "Linkedin Ads",
              href: "/linkedIn-marketing-agency",
            },
            {
              name: "TikTok Ads",
              href: "/tiktok-ads-agency",
            },
          ],
        },
        {
          icon: "icon_3",
          name: "Social Media Management",
          href: "/social-media-management",
          subItems: [
            {
              name: "Post Creation",
              href: "#",
            },
            {
              name: "Content Calendar",
              href: "#",
            },
            {
              name: "Reel Editing",
              href: "#",
            },
            {
              name: "Creatives",
              href: "#",
            },
          ],
        },
        {
          icon: "icon_7",
          name: "Web Design & Development",
          href: "/web-development-services",
          subItems: [
            {
              name: "Wordpress Development",
              href: "/wordpress-development-company",
            },
            {
              name: "Shopify Development",
              href: "/shopify-development-company",
            },
            {
              name: "E-Commerce Development",
              href: "/ecommerce-development-company",
            },
            {
              name: "Custom Web Development",
              href: "/custom-web-development-company",
            },
          ],
        },
        {
          icon: "icon_10",
          name: "Mobile App Development",
          href: "/mobile-app-development-company",
          subItems: [
            {
              name: "IOS Development",
              href: "/ios-app-development-company",
            },
            {
              name: "Android Development",
              href: "/android-app-development-company",
            },
            {
              name: "Cross-Platform",
              href: "/cross-platform-app-development",
            },
            {
              name: "Wearables",
              href: "/wearables-app-development",
            },
          ],
        },
        {
          icon: "icon_4",
          name: "Content Writing & Marketing",
          href: "/content-marketing-solutions",
          subItems: [
            {
              name: "Article Writing",
              href: "#",
            },
            {
              name: "Blog Writing",
              href: "#",
            },
            {
              name: "Web Content",
              href: "#",
            },
            {
              name: "E-Commerce Content",
              href: "#",
            },
          ],
        },
      ],
    },
    {
      // label: 'White Label',
      // value: 'White Label',
      label: "For Agencies",
      value: "For Agencies",
      href: "/white-label-digital-marketing-agency",
      subItems: [
        {
          name: "White Label SEO",
          href: "/white-label-seo"
        },
        {
          name: "White Label Social Media",
          href: "/white-label-social-media-management",
        },
        {
          name: "White Label Paid Ads",
          href: "/white-label-ppc",
        },
        {
          name: "White Label Link Building",
          href: "/white-label-link-building",
        },
      ],
    },

    // {
    //   label: "Industries",
    //   value: "industries",
    //   href: "#",
    // },

    {
      label: "Resources",
      value: "resources",
      href: "#",
      subItems: [
        { name: "About Us", href: "/about-us" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Blog", href: "/blog" },
        { name: "Career", href: "/career" },
      ],
    },

    {
      label: "Contact Us",
      value: "contact",
      href: "/contact",
    },
  ],

  homeWebsite: {
    TermsNConditions: "/terms-and-conditions",
    PrivacyPolicy: "/privacy-policy",
  },

  ecommerceNav: [
    { label: "Home", value: "home", href: "/content-marketing-solutions" },
    {
      label: "Services",
      value: "services",
      href: "/content-marketing-solutions#products",
    },
    { label: "FAQs", value: "faqs", href: "/content-marketing-solutions#faqs" },
    {
      label: "Pricing",
      value: "pricing",
      href: "/content-marketing-solutions#products",
    },
    {
      label: "Contact",
      value: "contact",
      href: "/content-marketing-solutions#contact",
    },
  ],

  eCommerce: {
    home: "/services/content-marketing-solutions",
    products: "/services/content-marketing-solutions/#products",
    shop: "/services/content-marketing-solutions/#products",
    cart: "/services/content-marketing-solutions/cart",
    contentProductForm: (slug: string) =>
      `/services/content-marketing-solutions/products/${slug}/form`,
    orders: "/services/content-marketing-solutions/orders",
    orderDetails: (id: string) =>
      `/dashboard/shop/orders/order-details?orderNumber=${id}`,
    thankyouPage: "/services/content-marketing-solutions/thankyou",
  },

  userDashboard: {
    website: "/services/content-marketing-solutions",
    dashboard: "/dashboard",
    accountSettings: "/dashboard/user/profile-settings",
    passwordSettings: "/dashboard/user/profile-settings/password",
    cart: "/dashboard/shop/cart",
    orders: "/dashboard/shop/orders",
    tickets: "/dashboard/support/tickets",
    inbox: (tickedId: string) => `/dashboard/support/inbox?tkt=${tickedId}`,
    invoices: "/dashboard/invoices",
    invoiceDetails: (id: string) =>
      `/dashboard/invoices/details?invoiceNumber=${id}`,
  },

  termsNconditions: "https://www.adaired.com/terms-and-conditions",
  privacyPolicy: "https://www.adaired.com/privacy-policy",
};
