export const contactBreadcrumbSchema = {
  "@type": "BreadcrumbList",

  "@id": "https://adaired.com/contact#breadcrumb",

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
      name: "Contact Us",
      item: "https://adaired.com/contact",
    },
  ],
};