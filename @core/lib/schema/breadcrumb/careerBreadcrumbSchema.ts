export const careerBreadcrumbSchema = {
  "@type": "BreadcrumbList",

  "@id": "https://adaired.com/career#breadcrumb",

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
      name: "Career",
      item: "https://adaired.com/career",
    },
  ],
};