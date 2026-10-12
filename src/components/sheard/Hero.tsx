"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeroImg from "@/assets/bazar-hero.png";
import { authClient } from "@/lib/auth-client";
import { getProductsData } from "@/lib/allDataFetch";
import { IProductDataType } from "@/types/allDataType";

export default function Hero() {
  const [date, setDate] = useState("");
  const [products, setProducts] = useState<IProductDataType[]>([]);

  useEffect(() => {
    const newDate = new Date().toLocaleDateString("bn-BD", {
      dateStyle: "full",
    });

    setDate(newDate);

    const getProductData = async () => {
      const products = await getProductsData();
      setProducts(products);
    };

    getProductData();
  }, []);

  const { data: session } = authClient.useSession();

  const markets = products[0]?.markets ?? [];
  const divisions = [...new Set(markets.map((item) => item.division))];

  let heroLeft;

  if (session?.user) {
    heroLeft = (
      <div className="grid w-full grid-cols-1 gap-4 rounded-2xl border-2 border-dashed border-[#c2d8ca] bg-[#E2F0E7] p-4 text-center min-[420px]:grid-cols-3 min-[420px]:gap-2 sm:p-5">
        <div className="flex flex-col justify-center py-2">
          <p className="text-sm text-gray-700">পণ্য</p>
          <p className="text-2xl font-bold text-[#05893E] sm:text-3xl">
            {products.length.toLocaleString("bn-BD")}
          </p>
          <p className="text-xs text-gray-600 sm:text-sm">
            টি নিত্যদিনের পণ্য
          </p>
        </div>

        <div className="flex flex-col justify-center border-y-2 border-dashed border-[#c2d8ca] py-3 min-[420px]:border-x-2 min-[420px]:border-y-0 min-[420px]:px-2 sm:px-3">
          <p className="text-sm text-gray-700">বাজার</p>
          <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {markets.length.toLocaleString("bn-BD")}
          </p>
          <p className="text-xs text-gray-600 sm:text-sm">
            টি বাজার অন্তর্ভুক্ত
          </p>
        </div>

        <div className="flex flex-col justify-center py-2">
          <p className="text-sm text-gray-700">বিভাগ</p>
          <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {divisions.length.toLocaleString("bn-BD")}
          </p>
          <p className="text-xs text-gray-600 sm:text-sm">
            টি বিভাগের তথ্য
          </p>
        </div>
      </div>
    );
  } else {
    heroLeft = (
      <Image
        src={HeroImg}
        alt="বাজারের পণ্য"
        width={300}
        height={300}
        priority
        className="h-auto w-full max-w-[220px] object-contain sm:max-w-[280px] lg:max-w-[320px]"
      />
    );
  }

  return (
    <section className="grid grid-cols-1 items-center gap-6 overflow-hidden rounded-2xl bg-white px-4 py-5 shadow-md sm:gap-8 sm:px-6 sm:py-7 md:grid-cols-2 md:px-7 lg:gap-10 lg:px-8 lg:py-8">
      {/* Left Content */}
      <div className="flex min-w-0 flex-col gap-5 sm:gap-6">
        <div className="grid gap-4 sm:gap-5">
          <p className="w-fit max-w-full break-words rounded-full bg-[#E2F0E7] px-3 py-2 text-sm font-semibold text-[#05893E] sm:px-4 sm:text-base">
            {date}
          </p>

          <h2 className="text-2xl font-bold leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h2>
        </div>

        <p className="line-clamp-3 text-sm leading-7 text-gray-500 sm:text-base">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন- সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <a href="#allProducts" className="w-full rounded-lg bg-[#05893E] font-semibold text-white sm:w-fit sm:px-8 py-2 text-center">
          সব পণ্য
        </a>
      </div>

      {/* Right Content */}
      <div className="flex min-w-0 items-center justify-center md:justify-end">
        {heroLeft}
      </div>
    </section>
  );
}