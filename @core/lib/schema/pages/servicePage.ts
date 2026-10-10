import { websiteSchema } from "../website";
import { organizationSchema } from "../organization";
import { usaOfficeSchema } from "../usaAddress";
import { indiaOfficeSchema } from "../indiaAddress";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceSchemaProps {
  slug: string;
  title: string;
  description: string;
  alternateName?: string;
  serviceType?: string;
  faqs?: FAQ[];
}

export const createServicePageSchema = ({
  slug,
  title,
  description,
  alternateName,
  serviceType,
  faqs = [],
}: ServiceSchemaProps) => {
  const url = `https://adaired.com/${slug}`;

  const graph: any[] = [
    websiteSchema,

    organizationSchema,

    indiaOfficeSchema,

    usaOfficeSchema,

    {
      "@type": "WebPage",

      "@id": `${url}#webpage`,

      url,

      name: title,

      description,

      isPartOf: {
        "@id": "https://adaired.com/#website",
      },

      about: {
        "@id": `${url}#service`,
      },

      inLanguage: "en-US",
    },

    {
      "@type": "Service",

      "@id": `${url}#service`,

      name: title,

      alternateName: alternateName || title,

      serviceType: serviceType || title,

      description,

      url,

      provider: {
        "@id": "https://adaired.com/#organization",
      },

      areaServed: ["US", "IN"],

      availableChannel: {
        "@type": "ServiceChannel",

        serviceUrl: url,
      },
    },

    {
      "@type": "BreadcrumbList",

      "@id": `${url}#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",

          position: 1,

          name: "Home",

          item: "https://adaired.com",
        },
        {
          "@type": "ListItem",

          position: 2,

          name: "Services",

          item: "https://adaired.com/services",
        },
        {
          "@type": "ListItem",

          position: 3,

          name: title,

          item: url,
        },
      ],
    },
  ];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",

      "@id": `${url}#faq`,

      mainEntity: faqs.map((faq) => ({
        "@type": "Question",

        name: faq.question,

        acceptedAnswer: {
          "@type": "Answer",

          text: faq.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",

    "@graph": graph,
  };
};
