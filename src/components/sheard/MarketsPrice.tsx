import { IProductDataType } from "@/types/allDataType";

export default function MarketsPrice({
  product,
}: {
  product: IProductDataType;
}) {
  return (
    <div className="w-full min-w-0 space-y-4 sm:space-y-5">
      {/* Section Heading */}
      <div className="flex min-w-0 items-start gap-3">
        <div className="min-w-0">
          <h2 className="text-lg font-extrabold tracking-tight text-gray-900 sm:text-xl md:text-2xl">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
            বিভিন্ন বাজারের দামের তুলনা
          </p>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="w-full min-w-0 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm sm:rounded-2xl">
        <div className="w-full overflow-x-auto overscroll-x-contain">
          <table className="w-full min-w-[620px] border-collapse text-left sm:min-w-[700px] lg:min-w-0">
            <thead>
              <tr className="bg-gray-50">
                <th className="whitespace-nowrap border-b border-gray-200 px-3 py-3 text-xs font-bold text-gray-600 sm:px-4 sm:py-4 sm:text-sm">
                  বাজার
                </th>

                <th className="whitespace-nowrap border-b border-gray-200 px-3 py-3 text-xs font-bold text-gray-600 sm:px-4 sm:py-4 sm:text-sm">
                  বিভাগ
                </th>

                <th className="whitespace-nowrap border-b border-gray-200 px-3 py-3 text-xs font-bold text-emerald-700 sm:px-4 sm:py-4 sm:text-sm text-end">
                  সর্বনিম্ন
                </th>

                <th className="whitespace-nowrap border-b border-gray-200 px-3 py-3 text-xs font-bold text-rose-700 sm:px-4 sm:py-4 sm:text-sm text-end">
                  সর্বাধিক
                </th>

                <th className="whitespace-nowrap border-b border-gray-200 px-3 py-3 text-xs font-bold text-indigo-700 sm:px-4 sm:py-4 sm:text-sm text-end">
                  গড় দাম
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {product?.markets?.map((item, ind) => {
                const averagePrice = (item.max + item.min) / 2;

                return (
                  <tr
                    key={`${item.market}-${item.division}-${ind}`}
                    className="transition-colors duration-200 hover:bg-indigo-50/40"
                  >
                    {/* Market */}
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4 sm:py-4">
                      <span className="text-xs font-semibold text-gray-900 sm:text-sm">
                        {item.market}
                      </span>
                    </td>

                    {/* Division */}
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4 sm:py-4">
                      <span className="inline-flex rounded-md bg-gray-100 px-2 py-1 text-[11px] font-medium text-gray-600 sm:rounded-lg sm:px-2.5 sm:text-sm">
                        {item.division}
                      </span>
                    </td>

                    {/* Minimum Price */}
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4 sm:py-4 text-end">
                      <span className="inline-flex rounded-md bg-emerald-50 px-2 py-1.5 text-xs font-bold text-emerald-700 sm:rounded-lg sm:px-3 sm:text-sm">
                        {item.min.toLocaleString("bn-BD")}
                      </span>
                    </td>

                    {/* Maximum Price */}
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4 sm:py-4 text-end">
                      <span className="inline-flex rounded-md bg-rose-50 px-2 py-1.5 text-xs font-bold text-rose-700 sm:rounded-lg sm:px-3 sm:text-sm">
                        {item.max.toLocaleString("bn-BD")}
                      </span>
                    </td>

                    {/* Average Price */}
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4 sm:py-4 text-end">
                      <span className="inline-flex rounded-md bg-indigo-50 px-2 py-1.5 text-xs font-bold text-indigo-700 sm:rounded-lg sm:px-3 sm:text-sm">
                        {averagePrice.toLocaleString("bn-BD", {
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Scroll Hint */}
        <div className="border-t border-gray-100 bg-gray-50 px-3 py-2 text-center text-[11px] text-gray-500 sm:hidden">
          ← সম্পূর্ণ দাম দেখতে টেবিলটি ডানে-বামে সরান →
        </div>
      </div>
    </div>
  );
}
