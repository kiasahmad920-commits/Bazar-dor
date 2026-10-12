import { IProductDataType } from "@/types/allDataType";

export default function PriceSummury({
  product,
}: {
  product: IProductDataType;
}) {
  let min = product?.markets[0]?.min;
  let max = 0;
  for (let i = 0; i < product?.markets?.length; i++) {
    if (product?.markets[i]?.min < min) {
      min = product?.markets[i]?.min;
    }
    if (product?.markets[i]?.max > max) {
      max = product?.markets[i]?.max;
    }
  }
  const avaregePrice = (max + min) / 2;
  return (
    <div className="space-y-4">
      {/* Section Heading */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            দামের সারসংক্ষেপ
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            বাজারদরের একটি সংক্ষিপ্ত চিত্র
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Minimum Price */}
        <div className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="absolute -right-6 -top-6 size-24 rounded-full bg-emerald-50 blur-2xl transition-all group-hover:bg-emerald-100" />

          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-600">
                সর্বনিম্ন দাম
              </p>
              <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                ↘
              </span>
            </div>

            <div>
              <p className="text-2xl font-black tracking-tight text-emerald-600 sm:text-3xl">
                {min?.toLocaleString("bn-BD")}
                <span className="ml-1 text-sm font-semibold">টাকা</span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
                সবচেয়ে কম দামের বাজার
              </p>
            </div>

            <div className="h-1 w-12 rounded-full bg-emerald-400 transition-all duration-300 group-hover:w-20" />
          </div>
        </div>

        {/* Maximum Price */}
        <div className="group relative overflow-hidden rounded-2xl border border-rose-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="absolute -right-6 -top-6 size-24 rounded-full bg-rose-50 blur-2xl transition-all group-hover:bg-rose-100" />

          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-600">
                সর্বাধিক দাম
              </p>
              <span className="flex size-10 items-center justify-center rounded-xl bg-rose-50 text-xl">
                ↗
              </span>
            </div>

            <div>
              <p className="text-2xl font-black tracking-tight text-rose-600 sm:text-3xl">
                {max?.toLocaleString("bn-BD")}
                <span className="ml-1 text-sm font-semibold">টাকা</span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
                সবচেয়ে বেশি দামের বাজার
              </p>
            </div>

            <div className="h-1 w-12 rounded-full bg-rose-400 transition-all duration-300 group-hover:w-20" />
          </div>
        </div>

        {/* Average Price */}
        <div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:col-span-2 lg:col-span-1">
          <div className="absolute -right-6 -top-6 size-24 rounded-full bg-blue-50 blur-2xl transition-all group-hover:bg-blue-100" />

          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-600">গড় দাম</p>
              <span className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-xl">
                ≈
              </span>
            </div>

            <div>
              <p className="text-2xl font-black tracking-tight text-blue-600 sm:text-3xl">
                {avaregePrice?.toLocaleString("bn-BD")}
                <span className="ml-1 text-sm font-semibold">টাকা</span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
                প্রতি কেজির হিসাবে
              </p>
            </div>

            <div className="h-1 w-12 rounded-full bg-blue-400 transition-all duration-300 group-hover:w-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
