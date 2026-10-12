export default function ProfileSkeleton() {
  return (
    <main className="min-h-screen animate-pulse bg-[#f3f7f3] px-4 py-8 text-[#202b23] sm:px-6 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-5xl">
        {/* Page Heading */}
        <div className="mb-8 space-y-3">
          <div className="h-4 w-24 rounded bg-[#dce8dd]" />
          <div className="h-9 w-48 max-w-full rounded-lg bg-gray-200 sm:h-10 sm:w-60" />
          <div className="h-4 w-full max-w-md rounded bg-gray-200" />
        </div>

        {/* Profile Summary Card */}
        <section className="overflow-hidden rounded-3xl border border-[#dfe8df] bg-white shadow-sm">
          <div className="h-2 bg-[#dce8dd]" />

          <div className="flex flex-col gap-6 p-5 sm:flex-row sm:items-center sm:p-8">
            {/* Avatar */}
            <div className="mx-auto size-24 shrink-0 rounded-2xl bg-[#e4f3e6] sm:mx-0 sm:size-28" />

            {/* User Information */}
            <div className="min-w-0 flex-1 space-y-3 text-center sm:text-left">
              <div className="mx-auto h-7 w-44 max-w-full rounded bg-gray-200 sm:mx-0 sm:w-56" />
              <div className="mx-auto h-4 w-52 max-w-full rounded bg-gray-100 sm:mx-0 sm:w-64" />

              <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                <div className="h-7 w-32 rounded-full bg-[#eaf7ec]" />
                <div className="h-7 w-16 rounded-full bg-gray-100" />
              </div>
            </div>

            {/* Sign Out Button */}
            <div className="h-11 w-full rounded-xl border border-red-100 bg-red-50 sm:w-32 sm:shrink-0" />
          </div>
        </section>

        {/* Personal Information Card */}
        <section className="mt-6 rounded-3xl border border-[#dfe8df] bg-white p-5 shadow-sm sm:mt-8 sm:p-8">
          {/* Section Heading */}
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-10 shrink-0 rounded-xl bg-[#eaf7ec]" />

              <div className="space-y-2">
                <div className="h-5 w-32 rounded bg-gray-200" />
                <div className="h-3 w-28 rounded bg-gray-100" />
              </div>
            </div>

            <div className="h-10 w-28 rounded-xl bg-[#dce8dd]" />
          </div>

          {/* Form Field */}
          <div className="space-y-3">
            <div className="h-4 w-20 rounded bg-gray-200" />

            <div className="flex min-h-12 items-center justify-between rounded-xl border border-[#dfe8df] bg-white px-4">
              <div className="h-4 w-40 max-w-[75%] rounded bg-gray-100" />
              <div className="size-5 rounded bg-gray-100" />
            </div>
          </div>

          {/* Optional Action Buttons */}
          <div className="mt-7 flex flex-col-reverse justify-end gap-3 border-t border-[#edf1ed] pt-5 sm:flex-row">
            <div className="h-11 w-full rounded-xl bg-gray-100 sm:w-24" />
            <div className="h-11 w-full rounded-xl bg-[#dce8dd] sm:w-48" />
          </div>
        </section>

        {/* Account Details */}
        <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-[#dfe8df] bg-white p-5"
            >
              <div className="size-12 shrink-0 rounded-xl bg-[#eaf7ec]" />

              <div className="min-w-0 flex-1 space-y-2">
                <div className="h-4 w-36 max-w-full rounded bg-gray-200" />
                <div className="h-3 w-48 max-w-full rounded bg-gray-100" />
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}