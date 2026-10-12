import { unitBangla } from "@/lib/units";
import { IProductDataType } from "@/types/allDataType";
import Link from "next/link";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";

interface IUnitBangla {
  kg: string;
  g?: string;
  litre?: string;
  ml?: string;
  dozen?: string;
  piece?: string;
}

export default function ProductCard({
  product,
}: {
  product: IProductDataType;
}) {

  const unit = unitBangla[product.unit as keyof IUnitBangla] || product.unit;

  const isUp = product.change.dir === "up";

  const priceParcentege = isUp
    ? ((product.today - product.yesterday) / product.today) * 100
    : ((product.yesterday - product.today) / product.yesterday) * 100;

  const arrowIcon = isUp ? (
    <FaAnglesUp className="text-xs sm:text-sm" />
  ) : (
    <FaAnglesDown className="text-xs sm:text-sm" />
  );

  return (
    <Link
      href={`/product/${product.id}`}>
      <article
        className="
        group w-full overflow-hidden
        rounded-2xl border border-gray-200
        bg-white
        p-4 sm:p-5
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-gray-300
        hover:shadow-xl
        "
      >
        {/* Product Header */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Product Image / Emoji */}
          <div
            className="
            flex size-14 shrink-0 items-center justify-center
            rounded-xl bg-gradient-to-br from-gray-100 to-gray-200
            text-2xl sm:size-16 sm:text-3xl
            transition-transform duration-300
            group-hover:scale-105
            "
          >
            {product.image}
          </div>

          {/* Product Info */}
          <div className="min-w-0 flex-1">
            <h3
              className="
              truncate text-base font-bold text-gray-900
              sm:text-lg
            "
            >
              {product.nameBn}
            </h3>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              প্রতি {unit}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-gray-100" />

        {/* Price Section */}
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="mb-1 text-xs font-medium text-gray-500 sm:text-sm">
              আজকের দাম
            </p>

            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                {product.today.toLocaleString("bn-BD")}
              </span>

              <span className="text-xs font-medium text-gray-500 sm:text-sm">
                টাকা
              </span>
            </div>
          </div>

          {/* Price Change */}
          <div
            className={`
            flex shrink-0 items-center gap-1
            rounded-full px-2.5 py-1
            text-xs font-bold sm:px-3 sm:text-sm
            ${isUp ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}
            `}
          >
            {arrowIcon}
            <span>
              {Number(priceParcentege.toFixed(1)).toLocaleString("bn-BD")}%
            </span>
          </div>
        </div>

        {/* Yesterday Price */}
        <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
          <span>গতকালের দাম</span>

          <span>{product.yesterday.toLocaleString("bn-BD")} টাকা</span>
        </div>
      </article>
    </Link>
  );
}
