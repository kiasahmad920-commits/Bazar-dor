export default function ProductDetailsSkeleton() {
  return (
    <div className="min-h-screen space-y-3 animate-pulse bg-[#F0F5F1] p-2 sm:space-y-4 sm:p-4">
      {/* Product Header */}
      <section className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="size-12 shrink-0 rounded-lg bg-gray-200 sm:size-14" />

          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-5 w-36 max-w-full rounded bg-gray-200 sm:w-48" />
            <div className="h-3 w-24 rounded bg-gray-100" />
            <div className="h-4 w-36 max-w-full rounded bg-gray-100" />
          </div>
        </div>

        {/* Current Price */}
        <div className="w-full space-y-2 rounded-xl border border-gray-200 p-3 text-center sm:w-36 sm:shrink-0">
          <div className="mx-auto h-3 w-20 rounded bg-gray-100" />
          <div className="mx-auto h-6 w-24 rounded bg-gray-200" />
          <div className="mx-auto h-4 w-16 rounded-full bg-gray-100" />
        </div>
      </section>

      {/* Price Comparison Section */}
      <section className="space-y-3 rounded-xl bg-white p-3 sm:p-4">
        {/* Heading */}
        <div className="space-y-2">
          <div className="h-5 w-36 rounded bg-gray-200" />
          <div className="h-3 w-48 max-w-full rounded bg-gray-100" />
        </div>

        {/* Three Price Cards */}
        <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="space-y-3 rounded-lg border border-gray-200 p-3 sm:p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="h-3 w-16 rounded bg-gray-200" />
                <div className="size-7 rounded-lg bg-gray-100" />
              </div>

              <div className="h-6 w-24 rounded bg-gray-200" />
              <div className="h-3 w-28 max-w-full rounded bg-gray-100" />
              <div className="h-1 w-10 rounded bg-gray-200" />
            </div>
          ))}
        </div>

        {/* Table Heading */}
        <div className="space-y-2 pt-1">
          <div className="h-5 w-44 max-w-full rounded bg-gray-200" />
          <div className="h-3 w-36 max-w-full rounded bg-gray-100" />
        </div>

        {/* Responsive Table */}
        <div className="overflow-hidden rounded-lg border border-gray-200">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-2 border-b border-gray-200 bg-gray-50 px-3 py-3 sm:px-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="h-3 rounded bg-gray-200"
              />
            ))}
          </div>

          {/* Table Rows */}
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-5 items-center gap-2 border-b border-gray-100 px-3 py-3 last:border-b-0 sm:px-4"
            >
              <div className="h-3 w-full max-w-24 rounded bg-gray-200" />

              <div className="mx-auto h-4 w-10 rounded bg-gray-100" />

              <div className="mx-auto h-4 w-10 rounded bg-emerald-100" />

              <div className="mx-auto h-4 w-10 rounded bg-rose-100" />

              <div className="mx-auto h-4 w-12 rounded bg-indigo-100" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}