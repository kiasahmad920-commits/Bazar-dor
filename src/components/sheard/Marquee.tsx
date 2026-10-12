import { getProductsData } from "@/lib/allDataFetch";
import { IProductDataType } from "@/types/allDataType";
import Link from "next/link";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import MarqueeText from "react-marquee-text";

interface IUnitBangla {
  kg: string;
  g?: string;
  litre?: string;
  ml?: string;
  dozen?: string;
  piece?: string;
}

export default async function Marquee() {
  const unitBangla: IUnitBangla = {
    kg: "কেজি",
    g: "গ্রাম",
    litre: "লিটার",
    ml: "মিলিলিটার",
    dozen: "ডজন",
    piece: "পিস",
  };

  const products = await getProductsData();

  return (
    <div className="sticky top-0 z-50 border-y border-gray-200 bg-gray-200/90 shadow-sm backdrop-blur-md py-1">
      <MarqueeText
        duration={15}
        direction="right"
        className="flex h-full items-center"
      >
        {products.map((product: IProductDataType) => {
          const isUp = product.change.dir === "up";

          const pricePercentage = isUp
            ? ((product.today - product.yesterday) /
                product.yesterday) *
              100
            : ((product.yesterday - product.today) /
                product.yesterday) *
              100;

          const arrowIcon = isUp ? (
            <FaAnglesUp className="text-[10px] sm:text-xs" />
          ) : (
            <FaAnglesDown className="text-[10px] sm:text-xs" />
          );

          const unit =
            unitBangla[product.unit as keyof IUnitBangla] ||
            product.unit;

          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="
                group mx-1.5 flex h-9 items-center gap-2
                whitespace-nowrap rounded-full px-3
                text-xs text-gray-700
                transition-all duration-200
                hover:bg-white
                sm:mx-2 sm:h-10 sm:gap-2.5 sm:px-4 sm:text-sm
              "
            >
              {/* Product Icon */}
              <span
                className="
                  flex size-6 items-center justify-center
                  rounded-full bg-white
                  text-sm shadow-sm
                  transition-transform duration-200
                  group-hover:scale-110
                  sm:size-7 sm:text-base
                "
              >
                {product.image}
              </span>

              {/* Product Name */}
              <span className="font-semibold text-gray-800">
                {product.nameBn}
              </span>

              {/* Price */}
              <span className="font-bold text-gray-900">
                {product.today.toLocaleString("bn-BD")}
                <span className="ml-0.5 font-normal text-gray-500">
                  /{unit}
                </span>
              </span>

              {/* Price Change */}
              <span
                className={`
                  flex items-center gap-1 rounded-full
                  px-2 py-0.5 font-semibold
                  ${
                    isUp
                      ? "bg-red-50 text-red-600"
                      : "bg-green-50 text-green-600"
                  }
                `}
              >
                {arrowIcon}
                {Number((pricePercentage).toFixed(1)).toLocaleString("bn-BD")}%
              </span>
            </Link>
          );
        })}
      </MarqueeText>
    </div>
  );
}
