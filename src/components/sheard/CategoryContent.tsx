
"use client";

import { getCategoriesData, getProductsData } from "@/lib/allDataFetch";
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
  const [products, setProducts] = useState<IProductDataType[]>([]);
  const [categories, setCategories] = useState<ICategoryDataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controlData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getProductsData(),
          getCategoriesData(),
        ]);

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Data fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };

    controlData();
  }, []);

  const categoryProducts = products.filter(
    (product) => String(product.category) === String(categoryId),
  );

  const head = categories.find(
    (category) => String(category.id) === String(categoryId),
  );

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
            text-2xl transition-transform duration-300
            sm:size-16 sm:text-3xl
          "
        >
          {head?.icon}
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            {head?.nameBn}
          </h2>

          <p>
            {categoryProducts.length.toLocaleString("bn-BD")}
            টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <ProductsCategorys categoryProducts={categoryProducts} />
    </div>
  );
}

