"use client";
import { getCategoryData, getProductsData } from "@/lib/allDataFetch";
import { ICategoryDataType, IProductDataType } from "@/types/allDataType";
import ProductsCategorys from "./ProductsCategorys";
import { useEffect, useState } from "react";
import CategoryProductsSkeleton from "../skeleton/CategoryProductsSkeleton";
import Notfound from "../not-found/NotFound";

export default function CategoryContent({
  categoryId,
}: {
  categoryId: string;
}) {
  const [products, setPoducts] = useState<IProductDataType[]>([]);
  const [categories, setCategories] = useState<ICategoryDataType[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const contorldata = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
          next: { revalidate: 10 },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await res.json();
        setPoducts(data);
      } catch {
        throw new Error("Products data fetch faild");
      } finally {
        setLoading(false);
      }
      const categories: ICategoryDataType[] = await getCategoryData();
      setCategories(categories);
    };
    contorldata();
  }, []);
  console.log(categoryId);
  const categoryProducts = products.filter(
    (product) => product.category === categoryId,
  );
  const head = categories.find((product) => product.id === categoryId);
  if (loading) {
    return <CategoryProductsSkeleton />;
  }
  if (categoryProducts.length === 0) {
    return <Notfound />;
  }
  return (
    <div className="mt-8 mb-8 xl:h-screen">
      <div className="flex items-center gap-5">
        <div
          className="
            flex size-14 shrink-0 items-center justify-center
            rounded-xl bg-gradient-to-br from-gray-200 to-gray-300
            text-2xl sm:size-16 sm:text-3xl
            transition-transform duration-300
            group-hover:scale-105
          "
        >
          {head?.icon}
        </div>
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            {head?.nameBn}
          </h2>
          <p>
            {categoryProducts.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম
            ও পরিবর্তন
          </p>
        </div>
      </div>
      <ProductsCategorys categoryProducts={categoryProducts} />
    </div>
  );
}
