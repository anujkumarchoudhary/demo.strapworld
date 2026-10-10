export const createServiceBreadcrumbSchema = ({
  title,
  url,
}: {
  title: string;
  url: string;
}) => ({
  "@type": "BreadcrumbList",

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
      item: "https://adaired.com",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: title,
      item: url,
    },
  ],
});
