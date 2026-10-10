import { string, z } from "zod";

/* =============================
   COMMON
============================= */

const headingPart = z.object({
  text: z.string(),
  size: z.string().optional(),
  color: z.string().optional(),
  gradient: z.string().optional(),
  weight: z.string().optional(),
  font: z.string().optional(),
  style: z.string().optional(),
});

const metaDetails = z.object({
  title: z.string(),
  description: z.string(),
  alternates: z.object({
    canonical: z.string(),
  }),
});

const descriptionItem = z.object({
  description: z.string().optional(),
  list: z.array(z.string()).optional(),
});

const faqDescriptionItem = z.union([
  z.string(),

  z.object({
    description: z.string().optional(),
    list: z.array(z.string()).optional(),
  }),
]);

/* =============================
   MAIN SCHEMA
============================= */

export const serviceSchema = z.object({
  slug: z.string(),
  sectionsOrder: z.array(z.string()).optional(),
  metaDetails,

  // banner: z
  //   .object({
  //     code: z.string().optional(),
  //     serviceId: z.string().optional(),
  //     breakIndex: z.number().optional(),
  //     isCenter: z.boolean().optional(),
  //     isIcons: z.boolean().optional(),
  //     isVisible: z.boolean().optional(),
  //     customPadding: z.string().optional(),
  //     paddingBottom: z.string().optional(),
  //     customPaddingRight: z.number().optional(),
  //     customPaddingLeft: z.number().optional(),
  //     isGap: z.boolean().optional(),
  //     customGap: z.string().optional(),
  //     subTitle: z.string().optional(),
  //     subHeading: z.string().optional(),
  //     isStyleHeading: z.boolean().optional(),
  //     headingParts: z.array(headingPart).optional(),
  //     description: z.union([z.string(), z.array(z.string())]).optional(),
  //     span: z.string().optional(),
  //     button: z.string().optional(),
  //     button2: z.string().optional(),
  //     width: z.string().optional(),
  //     img: z.string().optional(),
  //     imgWidth: z.string().optional(),
  //     imgHeight: z.string().optional(),
  //     bg: z.string().optional(),
  //     isVideo: z.boolean().optional(),
  //     isVideo2: z.boolean().optional(),
  //     isGooglePartner: z.boolean().optional(),
  //     isMetaPartner: z.boolean().optional(),
  //     isUpwork: z.boolean().optional(),
  //     isClutch: z.boolean().optional(),
  //   })
  //   .optional(),

  banner: z.object({}).passthrough().optional(),

  // keyStats: z
  //   .object({
  //     isVisible: z.boolean().optional(),
  //     isCenter: z.boolean().optional(),
  //     isCarousel: z.boolean().optional(),
  //     code: z.string().optional(),
  //     breakIndex: z.number().optional(),
  //     headingParts: z.array(headingPart).optional(),
  //     description: z.union([z.string(), z.array(z.string())]).optional(),
  //     isCard: z.boolean().optional(),
  //     bgColor: z.string().optional(),
  //     textColor: z.string().optional(),
  //     imgWidth: z.string().optional(),
  //     imgHeight: z.string().optional(),
  //     width: z.number().optional(),
  //     img: z.string().optional(),
  //     labelImage: z.string().optional(),
  //     list: z
  //       .array(
  //         z.object({
  //           icon: z.string().optional(),
  //           sufix: z.string().optional(),
  //           prefix: z.string().optional(),
  //           value: z.string().optional(),
  //           growthValue: z.string().optional(),
  //           title: z.string().optional(),
  //           label: z.string().optional(),
  //           description: z.union([z.string(), z.array(z.string())]).optional(),
  //         }),
  //       )
  //       .optional(),
  //   })
  //   .optional(),

  keyStats: z.object({}).passthrough().optional(),

  // whatAreService: z
  //   .object({
  //     isVisible: z.boolean().optional(),
  //     isVariant: z.string().optional(),
  //     isRowReverse: z.boolean().optional(),
  //     breakIndex: z.number().optional(),
  //     isLastParaBold: z.boolean().optional(),
  //     img: z.string().optional(),
  //     headingParts: z.array(headingPart).optional(),
  //     description: z.string().optional(),
  //     bgColor: z.string().optional(),
  //     textColor: z.string().optional(),
  //     button: z.string().optional(),
  //     width: z.number().optional(),
  //     customPadding: z.string().optional(),
  //     customPaddingRight: z.union([z.string(), z.number()]).optional(),
  //     customPaddingLeft: z.union([z.string(), z.number()]).optional(),
  //     customGap: z.string().optional(),
  //     imgWidth: z.string().optional(),
  //     imgHeight: z.string().optional(),
  //     data: z
  //       .array(
  //         z.object({
  //           description: z.string().optional(),
  //           listTextColor: z.string().optional(),
  //           isListSingle: z.boolean().optional(),
  //           isListBold: z.boolean().optional(),
  //           list: z.array(z.string()).optional(),
  //         }),
  //       )
  //       .optional(),
  //   })
  //   .optional(),

  whatAreService: z.object({}).passthrough().optional(),

  // whatAreService2: z
  //   .object({
  //     isVisible: z.boolean().optional(),
  //     isVariant: z.string().optional(),
  //     isRowReverse: z.boolean().optional(),
  //     breakIndex: z.number().optional(),
  //     isLastParaBold: z.boolean().optional(),
  //     img: z.string().optional(),
  //     headingParts: z.array(headingPart).optional(),
  //     bgColor: z.string().optional(),
  //     textColor: z.string().optional(),
  //     button: z.string().optional(),
  //     width: z.number().optional(),
  //     customPadding: z.string().optional(),
  //     customGap: z.string().optional(),
  //     imgWidth: z.string().optional(),
  //     imgHeight: z.string().optional(),
  //     data: z
  //       .array(
  //         z.object({
  //           description: z.string().optional(),
  //         }),
  //       )
  //       .optional(),
  //   })
  //   .optional(),

  whatAreService2: z.object({}).passthrough().optional(),

  // importantToBusiness: z
  //   .object({
  //     isVariant: z.string().optional(),
  //     breakIndex: z.number().optional(),
  //     borderColor: z.string().optional(),
  //     isVisible: z.boolean().optional(),
  //     isCenter: z.boolean().optional(),
  //     cardColor: z.string().optional(),
  //     headingParts: z.array(headingPart).optional(),
  //     buttonName: z.string().optional(),
  //     data: z
  //       .array(
  //         z.object({
  //           icon: z.string().optional(),
  //           name: z.string().optional(),
  //           description: z.array(z.string()).optional(),
  //         }),
  //       )
  //       .optional(),
  //   })
  //   .optional(),

  importantToBusiness: z.object({}).passthrough().optional(),

  // importantToBusiness2: z
  //   .object({
  //     isVariant: z.string().optional(),
  //     breakIndex: z.number().optional(),
  //     borderColor: z.string().optional(),
  //     isVisible: z.boolean().optional(),
  //     isCenter: z.boolean().optional(),
  //     cardColor: z.string().optional(),
  //     headingParts: z.array(headingPart).optional(),
  //     buttonName: z.string().optional(),
  //     data: z
  //       .array(
  //         z.object({
  //           icon: z.string().optional(),
  //           name: z.string().optional(),
  //           description: z.array(z.string()).optional(),
  //         }),
  //       )
  //       .optional(),
  //   })
  //   .optional(),

  importantToBusiness2: z.object({}).passthrough().optional(),

  // whatIncluded: z
  //   .object({
  //     isVisible: z.boolean().optional(),
  //     isVariant: z.string().optional(),
  //     labelImage: z.string().optional(),
  //     isCenter: z.boolean().optional(),
  //     isImage: z.boolean().optional(),
  //     isButton: z.boolean().optional(),
  //     breakIndex: z.boolean().optional(),
  //     isDecVarticle: z.boolean().optional(),
  //     description: z.array(z.string()).optional(),
  //     isFetureProofVisible: z.boolean().optional(),
  //     headingParts: z.array(headingPart).optional(),
  //     borderColor: z.string().optional(),
  //     bgColor: z.string().optional(),
  //     textColor: z.string().optional(),
  //     label: z.string().optional(),
  //     list: z
  //       .array(
  //         z.object({
  //           icon: z.string().optional(),
  //           bgImage: z.string().optional(),
  //           title: z.string().optional(),
  //           description: z.array(z.string()).optional(),
  //           link: z.string().optional(),
  //           button: z.string().optional(),
  //           btnColor: z.string().optional(),
  //           points: z.array(z.any()).optional(),
  //         }),
  //       )
  //       .optional(),
  //     card: z
  //       .array(
  //         z.object({
  //           headingParts: z.array(headingPart).optional(),
  //           description: z.array(z.string()).optional(),
  //           img: z.string().optional(),
  //           button: z.string().optional(),
  //           breakIndex: z.boolean().optional(),
  //         }),
  //       )
  //       .optional(),

  //   })
  //   .optional(),

  whatIncluded: z.object({}).passthrough().optional(),

  // whatIncluded2: z
  //   .object({
  //     isVisible: z.boolean().optional(),
  //     isVariant: z.string().optional(),
  //     labelImage: z.string().optional(),
  //     isCenter: z.boolean().optional(),
  //     isButton: z.boolean().optional(),
  //     breakIndex: z.boolean().optional(),
  //     isDecVarticle: z.boolean().optional(),
  //     description: z.array(z.string()).optional(),
  //     isFetureProofVisible: z.boolean().optional(),
  //     headingParts: z.array(headingPart).optional(),
  //     borderColor: z.string().optional(),
  //     bgColor: z.string().optional(),
  //     textColor: z.string().optional(),
  //     list: z
  //       .array(
  //         z.object({
  //           icon: z.string().optional(),
  //           title: z.string().optional(),
  //           description: z.array(z.string()).optional(),
  //           button: z.string().optional(),
  //           link: z.string().optional(),
  //           btnColor: z.string().optional(),
  //           points: z.array(z.any()).optional(),
  //         }),
  //       )
  //       .optional(),
  //     card: z
  //       .array(
  //         z.object({
  //           headingParts: z.array(headingPart).optional(),
  //           description: z.array(z.string()).optional(),
  //           img: z.string().optional(),
  //           button: z.string().optional(),
  //           breakIndex: z.boolean().optional(),
  //         }),
  //       )
  //       .optional(),

  //   })
  //   .optional(),

  whatIncluded2: z.object({}).passthrough().optional(),

  whatIncluded3: z.object({}).passthrough().optional(),

  // ourProcess: z
  //   .object({
  //     isVisible: z.boolean().optional(),
  //     breakIndex: z.number().optional(),
  //     isCenter: z.boolean().optional(),
  //     headingParts: z.array(headingPart).optional(),
  //     description: z.union([z.string(), z.array(z.string())]).optional(),
  //     bgGradient: z.string().optional(),
  //     services: z
  //       .array(
  //         z.object({
  //           icon: z.string().optional(),
  //           title: z.string().optional(),
  //           description: z.array(z.string()).optional(),
  //         }),
  //       )
  //       .optional(),
  //   })
  //   .optional(),

  ourProcess: z.object({}).passthrough().optional(),

  // serviceResult: z
  //   .object({
  //     isVisible: z.boolean().optional(),
  //     isVariant: z.string().optional(),
  //     isRowReverse: z.boolean().optional(),
  //     isCenter: z.boolean().optional(),
  //     textColor: z.string().optional(),
  //     headingParts: z.array(headingPart).optional(),
  //     bgColor: z.string().optional(),
  //     borderColor: z.string().optional(),
  //     cardColor: z.string().optional(),
  //     titleColor: z.string().optional(),
  //     img: z.string().optional(),
  //     imgHeight: z.string().optional(),
  //     description: z.array(z.string()).optional(),
  //     list: z.array(z.any()).optional(),
  //     button: z.string().optional(),
  //   })
  //   .optional(),

  serviceResult: z.object({}).passthrough().optional(),

  // notSeeingResult: z
  //   .object({
  //     isVisible: z.boolean().optional(),
  //     headingParts: z.array(headingPart).optional(),
  //     textColor: z.string().optional(),
  //     description: z.union([z.string(), z.array(z.string())]).optional(),
  //     button: z.string().optional(),
  //     img: z.string().optional(),
  //     imgHeight: z.string().optional(),
  //     imgWidth: z.string().optional(),
  //     bgImage: z.string().optional(),
  //   })
  //   .optional(),

  notSeeingResult: z.object({}).passthrough().optional(),

  // leadingTools: z
  //   .object({
  //     isVisible: z.boolean().optional(),
  //     isVariant: z.string().optional(),
  //     isLastParaBold: z.string().optional(),
  //     headingParts: z.array(headingPart).optional(),
  //     description: z.union([z.string(), z.array(z.string())]).optional(),
  //     span: z.string().optional(),
  //     textColor: z.string().optional(),
  //     bgColor: z.string().optional(),
  //     bgImage: z.string().optional(),
  //     list: z
  //       .array(
  //         z.object({
  //           img: z.string().optional(),
  //           description: z.string().optional(),
  //         }),
  //       )
  //       .optional(),
  //   })
  //   .optional(),

  leadingTools: z.object({}).passthrough().optional(),

  // leadingToolsForPerformence: z
  //   .object({
  //     isGapTop: z.boolean().optional(),
  //     isVisible: z.boolean().optional(),
  //     isVariant: z.string().optional(),
  //     headingParts: z.array(headingPart).optional(),
  //     description: z.union([z.string(), z.array(z.string())]).optional(),
  //     bgImage: z.string().optional(),
  //     list: z.array(z.object({ img: z.string().optional() })).optional(),
  //   })
  //   .optional(),

  leadingToolsForPerformence: z.object({}).passthrough().optional(),

  // adairedHelp: z
  //   .object({
  //     isVisible: z.boolean().optional(),
  //     isVariant: z.string().optional(),
  //     breakIndex: z.number().optional(),
  //     img: z.string().optional(),
  //     bgColor: z.string().optional(),
  //     textColor: z.string().optional(),
  //     cardBg: z.string().optional(),
  //     isCenter: z.boolean().optional(),
  //     numberBg: z.string().optional(),
  //     cardBorderColor: z.string().optional(),
  //     headingParts: z.array(headingPart).optional(),

  //     // ✅ supports: string | mixed array
  //     description: z
  //       .union([z.string(), z.array(z.union([z.string(), descriptionItem]))])
  //       .optional(),

  //     list: z
  //       .array(
  //         z.object({
  //           name: z.string().optional(),
  //           img: z.string().optional(),
  //           icon: z.string().optional(),

  //           // ✅ same structure inside list
  //           description: z
  //             .array(z.union([z.string(), descriptionItem]))
  //             .optional()
  //             .transform((val) => {
  //               if (!val) return [];

  //               return val.map((item) =>
  //                 typeof item === "string"
  //                   ? { description: item } // normalize
  //                   : item,
  //               );
  //             }),
  //         }),
  //       )
  //       .optional(),
  //   })
  //   .optional(),

  adairedHelp: z.object({}).passthrough().optional(),

  whatMakeDifferent: z.object({}).passthrough().optional(),
  whatMakeDifferent2: z.object({}).passthrough().optional(),
  whatMissing: z.object({}).passthrough().optional(),
  needofservice: z.object({}).passthrough().optional(),
  needofservice2: z.object({}).passthrough().optional(),
  importantToBussiness: z.object({}).passthrough().optional(),
  importantToBussiness2: z.object({}).passthrough().optional(),
  stopStruggling: z.object({}).passthrough().optional(),
  buildlinks: z.object({}).passthrough().optional(),
  techStackMobile: z.object({}).passthrough().optional(),
  industriesWeServe: z.object({}).passthrough().optional(),
  dataInTable: z.object({}).passthrough().optional(),
  areYouTired: z.object({}).passthrough().optional(),
  industryLeaders: z.object({}).passthrough().optional(),
  benefitofAiSeo: z.object({}).passthrough().optional(),
  benefitofAiSeo2: z.object({}).passthrough().optional(),
  BookAConsultation: z.object({}).passthrough().optional(),
  getPlan: z.object({}).passthrough().optional(),
  getsCredit: z.object({}).passthrough().optional(),
  readyToStart: z.object({}).passthrough().optional(),
  resultCompare: z.object({}).passthrough().optional(),
  resultCompare2: z.object({}).passthrough().optional(),
  expertTeam: z.object({}).passthrough().optional(),
  serveIndustry: z.object({}).passthrough().optional(),
  reportDashboard: z.object({}).passthrough().optional(),
  ourProcess2: z.object({}).passthrough().optional(),
  ourProcess3: z.object({}).passthrough().optional(),
  testimonial: z.object({}).passthrough().optional(),
  serviceCaseStudies: z.object({}).passthrough().optional(),
  whyChooseAdaired: z.object({}).passthrough().optional(),
  banner2: z.object({}).passthrough().optional(),
  ourProcess4: z.object({}).passthrough().optional(),
  ourServices: z.object({}).passthrough().optional(),
  ourClients: z.object({}).passthrough().optional(),
  results: z.object({}).passthrough().optional(),

  // faqData: z
  //   .object({
  //     isVisible: z.boolean().optional(),
  //     subTitle: z.string().optional(),
  //     bgColor: z.string().optional(),
  //     headingParts: z.array(headingPart).optional(),
  //     breakIndex: z.number().optional(),

  //     // ✅ MAIN DESCRIPTION
  //     description: z
  //       .union([z.string(), z.array(faqDescriptionItem)])
  //       .optional(),

  //     // ✅ FAQ LIST
  //     list: z
  //       .array(
  //         z.object({
  //           title: z.string().optional(),

  //           description: z
  //             .union([z.string(), z.array(faqDescriptionItem)])
  //             .optional(),
  //         }),
  //       )
  //       .optional(),
  //   })
  //   .optional(),

  // seoPackages: z
  //   .object({
  //     isVisible: z.boolean().optional(),
  //     cardLength: z.number().optional(),
  //     headingParts: z.array(headingPart).optional(),
  //     description: z.string().optional(),
  //     button: z.string().optional(),
  //     data: z
  //       .array(
  //         z.object({
  //           title: z.string().optional(),
  //           description: z.string().optional(),
  //           price: z.string().optional(),
  //           heading: z.string().optional(),
  //           button: z.string().optional(),
  //           list: z
  //             .array(
  //               z.object({
  //                 des: z.array(z.string()).optional(),
  //               }),
  //             )
  //             .optional(),
  //         }),
  //       )
  //       .optional(),
  //   })
  //   .optional(),

  faqData: z.object({}).passthrough().optional(),
  seoPackages: z.object({}).passthrough().optional(),
});

export const updateServiceSchema = serviceSchema.partial();