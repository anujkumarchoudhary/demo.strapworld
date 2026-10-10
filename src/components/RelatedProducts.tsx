"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import { useResponsive } from "../hooks/useResponsive";
import { MdArrowBack, MdArrowRight } from "react-icons/md";
import Image from "next/image";
import React from "react";
import SaveAndCancel from "./common/SaveAndCancel";
import { useStaggerReveal } from "../hooks/useStaggerReveal";
import ButtonLink from "./common/ButtonLink";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
};


const RelatedProducts = ({ data }: any) => {
  const { isDesktop } = useResponsive();

  // Handle different API data structures
  const source = data?.relatedProducts ?? data;

  const relatedList = Array.isArray(source)
    ? source
    : Array.isArray(source?.list)
      ? source.list
      : source?.productId
        ? [source]
        : [];

  // Extract the populated product
  const products = relatedList
    .map((item: any) => item?.productId ?? item)
    .filter((product: any) => product && product.title);

  const {
    ref: productsRef,
    visibleItems,
  } = useStaggerReveal(products.length, {
    delay: 150,
    threshold: 0.15,
  });

  return (
    <section
      id="our-products"
      ref={productsRef}
      style={{
        background: source?.bgColor || "#063F3D",
      }}
      className="py-10 sm:py-12 lg:py-16"
    >
      <MaxWidth>
        <Heading
          as="h2"
          isDart={true}
          isCenter={!isDesktop}
          isAccentLine={true}
          label="Products"
          labelColor="#39B972"
          accentColor="#39B972"
          textColor={source?.textColor || "#ffffff"}
          isGradient={true}
          headingParts={[{ text: "Related Products" }]}
          description={"source?.description"}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 mt-16">
          {products.map((product: any) => (
            <div
              key={product._id ?? product.slug}
              className="group flex h-full flex-col overflow-hidden rounded-[10px] bg-white transition-all duration-300"
            >
              {/* Image */}
              <Link
                href={product.slug}
                className="relative block aspect-square w-full overflow-hidden"
              >
                <Image
                  src={product.image}
                  fill
                  alt={product.title}
                  className="rounded-tl-[10px] rounded-tr-[10px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </Link>

              {/* Content */}
              <div className="relative flex min-h-[160px] flex-col p-6">
                {/* Title */}
                <Link
                  href={product.slug}
                  className="pr-12 text-[20px] font-semibold tracking-[-0.01em] text-[#16161D]"
                >
                  {product.title}
                </Link>

                {/* Arrow */}
                <Link
                  href={product.slug}
                  aria-label={`View ${product.title}`}
                  className="group absolute right-4 top-4"
                >
                  <MdArrowBack
                    size={40}
                    className="rotate-180 rounded-full bg-[#063F3D] p-2 text-[#39B972] transition-all duration-300 group-hover:translate-x-1"
                  />
                </Link>

                {/* Description */}
                <p className="mt-auto pt-6 text-left text-[16px] text-black/80">
                  {product.description?.slice(0, 50)}
                  {product.description?.length > 50 ? "..." : ""}
                </p>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <p className="mt-8 text-center text-white">
            No related products found.
          </p>
        )}
      </MaxWidth>
    </section>
  );
};

export default RelatedProducts;
