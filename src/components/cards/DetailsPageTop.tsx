import { unitBangla } from "@/lib/units";
import { IProductDataType, IUnitBangla } from "@/types/allDataType";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";

export default function DetailsPageTop({
  product,
}: {
  product: IProductDataType;
}) {
  const unit = unitBangla[product?.unit as keyof IUnitBangla];
  const isUp = product?.change.dir === "up";

  const priceParcentege = isUp
    ? ((product?.today - product?.yesterday) / product?.today) * 100
    : ((product?.yesterday - product?.today) / product?.yesterday) * 100;

  const arrowIcon = isUp ? (
    <FaAnglesUp className="text-xs sm:text-sm" />
  ) : (
    <FaAnglesDown className="text-xs sm:text-sm" />
  );
  return (
    <div className="group relative isolate overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-lg sm:rounded-3xl sm:p-5 lg:p-7">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-16 -top-16 -z-10 size-48 rounded-full bg-blue-50/70 blur-3xl" />

      <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7 md:flex-row md:items-center md:justify-between">
        {/* Product Information */}
        <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-5">
          {/* Product Image / Emoji */}
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-gradient-to-br from-gray-50 to-gray-100 text-3xl shadow-sm sm:size-16 sm:rounded-2xl sm:text-4xl lg:size-20 lg:text-5xl">
            {product?.image}
          </div>

          {/* Product Details */}
          <div className="min-w-0 flex-1 space-y-2 sm:space-y-3">
            <h2 className="break-words text-lg font-extrabold leading-snug tracking-tight text-gray-900 sm:text-xl lg:text-3xl">
              {product?.nameBn}
            </h2>

            <p className="break-words text-xs font-medium text-gray-500 sm:text-sm sm:text-base">
              প্রতি {unit} {product?.categoryNameBn}
            </p>

            {/* Price Change Description */}
            <div
              className={`inline-flex max-w-full flex-wrap items-center gap-x-1.5 gap-y-1 rounded-lg px-2.5 py-2 text-xs font-semibold sm:rounded-xl sm:px-3 sm:text-sm ${
                product?.change.dir === "up"
                  ? "bg-red-50 text-red-600"
                  : product?.change.dir === "down"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-gray-100 text-gray-600"
              }`}
            >
              <span>
                {product?.change.dir === "up"
                  ? "↗"
                  : product?.change.dir === "down"
                    ? "↘"
                    : "—"}
              </span>

              <span>
                {product?.change.dir === "up"
                  ? "গতকালের তুলনায় দাম বেড়েছে"
                  : product?.change.dir === "down"
                    ? "গতকালের তুলনায় দাম কমেছে"
                    : "গতকালের তুলনায় দাম অপরিবর্তিত"}
              </span>

              {product?.change.dir === "up" ? (
                <span>
                  {(product.today - product.yesterday).toLocaleString("bn-BD")}{" "}
                  টাকা
                </span>
              ) : product?.change.dir === "down" ? (
                <span>
                  {(product.yesterday - product.today).toLocaleString("bn-BD")}{" "}
                  টাকা
                </span>
              ) : null}
            </div>
          </div>
        </div>

        {/* Today's Price Card */}
        <div className="w-full min-w-0 shrink-0 rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-3 sm:rounded-2xl sm:p-5 md:w-52 lg:w-60">
          <p className="text-xs font-medium text-gray-500 sm:text-sm">
            আজকের বাজারদর
          </p>

          <div className="mt-2 flex flex-wrap items-baseline gap-2 md:justify-center">
            <span className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              {product?.today.toLocaleString("bn-BD")}
            </span>

            <span className="text-xs font-semibold text-gray-500 sm:text-sm">
              টাকা
            </span>
          </div>

          {/* Percentage Change */}
          <div className="mt-3 flex items-center justify-between gap-3 border-t border-gray-200 pt-3 md:justify-center">
            <div
              className={`flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-bold sm:px-3 sm:text-sm ${
                product?.change.dir === "up"
                  ? "bg-red-100 text-red-700"
                  : product?.change.dir === "down"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-gray-100 text-gray-600"
              }`}
            >
              <span>{arrowIcon}</span>
              <span>{Number((priceParcentege).toFixed(1)).toLocaleString("bn-BD")}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
