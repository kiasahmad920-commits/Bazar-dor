
"use client";

import { IProductDataType } from "@/types/allDataType";
import ProductCard from "../cards/ProductCard";
import { Button, Dropdown, Label } from "@heroui/react";
import { useMemo, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

type SortOption = "default" | "min" | "max";

export default function ProductsCategorys({
  categoryProducts
}: {
  categoryProducts: IProductDataType[];
}) {
  const [dropDownText, setDropDownText] =
    useState<SortOption>("default");

  const sortProducts = useMemo(() => {
    if (dropDownText === "default") {
      return categoryProducts;
    }

    if (dropDownText === "min") {
      return [...categoryProducts].sort(
        (a, b) => a.today - b.today
      );
    }

    return [...categoryProducts].sort(
      (a, b) => b.today - a.today
    );
  }, [dropDownText, categoryProducts]);

  const options: { value: SortOption; label: string }[] = [
    { value: "default", label: "ডিফল্ট" },
    { value: "min", label: "দাম: কম থেকে বেশি" },
    { value: "max", label: "দাম: বেশি থেকে কম" },
  ];

  const selectedLabel =
    options.find((option) => option.value === dropDownText)?.label;

  return (
    <>
      <div className="mt-6 px-2 flex items-center justify-between gap-2">
        <p className="text-gray-500">
          মোট {sortProducts?.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>

        <Dropdown>
          <Button
            aria-label="পণ্য সাজানোর পদ্ধতি"
            className="rounded-lg font-semibold text-[#05893E] bg-[#E2F0E7]"
          >
            {selectedLabel}
          </Button>

          <Dropdown.Popover>
            <Dropdown.Menu
              onAction={(key) => setDropDownText(key as SortOption)}
            >
              {options.map((option) => (
                <Dropdown.Item key={option.value} id={option.value}>
                  <Label className="flex items-center gap-2">
                    {dropDownText === option.value ? (
                      <IoMdCheckmark />
                    ) : (
                      <div className="w-3.5" />
                    )}
                    {option.label}
                  </Label>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mt-3 md:grid-cols-3 lg:grid-cols-4">
        {sortProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
