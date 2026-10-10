export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": "https://adaired.com/#website",

  url: "https://adaired.com",

  name: "Adaired Digital Media",

  publisher: {
    "@id": "https://adaired.com/#organization",
  },

  inLanguage: ["en-US", "en-IN"],

  potentialAction: {
    "@type": "SearchAction",
    target: "https://adaired.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
