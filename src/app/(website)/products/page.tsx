"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import Banner from "@/src/components/common/Banner";
import OurProducts from "@/src/components/OurProducts";
import FinalCTA from "@/src/components/FinalCTA";
import FAQ from "@/src/components/FAQ";
import ManufactureProcess from "@/src/components/ManufactureProcess";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import Applications from "@/src/components/Applications";

import data from "./data.json";

interface Product {
  _id?: string;
  title: string;
  description?: string;
  button?: string;
  slug?: string;
  href?: string;
  image?: string;
  labels?: string[];
  [key: string]: any;
}

interface ProductsApiResponse {
  data?: Product[];
}

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const getProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get<
          Product[] | ProductsApiResponse
        >("https://strapworld-backend.onrender.com/api/products");

        const result = response.data;

        console.log("Products API response:", result);

        let productList: Product[] = [];

        if (Array.isArray(result)) {
          productList = result;
        } else if (Array.isArray(result?.data)) {
          productList = result.data;
        } else {
          console.error(
            "Unexpected products API response:",
            result
          );
        }

        if (isMounted) {
          setProducts(productList);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);

        if (isMounted) {
          setProducts([]);
          setError(
            "Unable to load products right now. Please try again later."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const {
    banner,
    ourProducts,
    bulkAndCustomOrders,
    finalCTA,
  } = data;

  const productsData = {
    ...ourProducts,
    list: products,
    label: "OUR PRODUCTS",
    textColor: "#000000",
    bgColor: "#F5F7F2",
    href: "/pet-strap-manufacturing",
    headingParts: [
      {
        text: "PET Strapping Products",
        color: "#000000",
        style: "normal",
        weight: "500",
      },
    ],
    description:
      "Explore our range of PET strapping products designed for secure packaging.",
  };

  return (
    <main>
      {/* Homepage Banner */}
      <Banner data={banner} />

      {/* Products Section */}
      {loading ? (
        <section className="bg-[#F5F7F2] px-4 py-16">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-base text-gray-600">
              Loading products...
            </p>
          </div>
        </section>
      ) : error ? (
        <section className="bg-[#F5F7F2] px-4 py-16">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-base text-red-600">{error}</p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-4 rounded-md bg-black px-5 py-2 text-white transition hover:bg-gray-800"
            >
              Try Again
            </button>
          </div>
        </section>
      ) : (
        <OurProducts data={productsData} />
      )}

      {/* Applications Section */}
      <Applications />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Manufacturing Process Section */}
      <ManufactureProcess data={bulkAndCustomOrders} />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Final Call To Action */}
      <FinalCTA data={finalCTA} />
    </main>
  );
};

export default Page;