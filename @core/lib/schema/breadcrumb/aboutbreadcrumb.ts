export const aboutBreadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  "@id": "https://adaired.com/about-us#breadcrumb",

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
      name: "About Us",
      item: "https://adaired.com/about-us",
    },
  ],
};