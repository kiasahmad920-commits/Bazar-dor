export default function CategoryProductsSkeleton() {
  return (
    <div className="mt-8 min-h-screen animate-pulse">
      {/* Category Header */}
      <div className="flex items-center gap-4 sm:gap-5">
        {/* Icon Skeleton */}
        <div className="size-14 shrink-0 rounded-xl bg-gray-200 sm:size-16" />

        {/* Title & Description */}
        <div className="min-w-0 flex-1 space-y-3">
          <div className="h-6 w-36 max-w-full rounded-md bg-gray-200 sm:h-7 sm:w-48" />
          <div className="h-3 w-56 max-w-full rounded bg-gray-200 sm:h-4 sm:w-72" />
        </div>
      </div>

      {/* Total Products Text */}
      <div className="mt-6 px-2">
        <div className="h-4 w-56 max-w-full rounded bg-gray-200" />
      </div>

      {/* Products Grid */}
      <div className="mt-3 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="min-w-0 rounded-xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4"
          >
            {/* Product Image & Name */}
            <div className="flex items-center gap-3">
              <div className="size-12 shrink-0 rounded-lg bg-gray-200 sm:size-14" />

              <div className="min-w-0 flex-1 space-y-2">
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-3 w-2/3 rounded bg-gray-100" />
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 h-px bg-gray-100" />

            {/* Price Label */}
            <div className="h-3 w-24 rounded bg-gray-100" />

            {/* Price & Change */}
            <div className="mt-3 flex items-center justify-between gap-2">
              <div className="h-5 w-20 rounded bg-gray-200" />
              <div className="h-5 w-14 rounded-full bg-gray-100" />
            </div>

            {/* Unit / Footer */}
            <div className="mt-3 h-3 w-16 rounded bg-gray-100" />
          </div>
        ))}
      </div>
    </div>
  );
}