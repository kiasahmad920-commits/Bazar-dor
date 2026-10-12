"use client";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#F0F5F1] px-4 py-10 sm:px-6">
      <section className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white px-5 py-10 text-center shadow-sm sm:px-10 sm:py-14">
        {/* Illustration */}
        <div className="mx-auto flex size-24 items-center justify-center rounded-3xl bg-[#E2F0E7] text-5xl sm:size-28 sm:text-6xl">
          🧺
        </div>

        {/* 404 */}
        <div className="mt-6">
          <p className="text-6xl font-extrabold tracking-tight text-[#05893E] sm:text-8xl">
            404
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#05893E]" />

          <h1 className="mt-5 text-2xl font-bold text-gray-900 sm:text-3xl">
            পৃষ্ঠা খুঁজে পাওয়া যায়নি!
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
            দুঃখিত! আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি পাওয়া যায়নি।
            পৃষ্ঠাটি সরানো হতে পারে অথবা লিংকটি ভুল হতে পারে।
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 min-[400px]:flex-row">

          <Button
            onPress={() => router.back()}
            className="h-11 w-full rounded-lg border-gray-300 bg-white px-6 font-semibold text-gray-700 transition-colors hover:bg-gray-50 min-[400px]:w-auto"
          >
            ← আগের পৃষ্ঠায় ফিরে যান
          </Button>
        </div>

        {/* Footer Note */}
        <div className="mt-8 border-t border-gray-100 pt-5">
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-[#05893E]">
              বাজার দর
            </span>{" "}
            — প্রতিদিনের বাজারদর জানুন সহজেই।
          </p>
        </div>
      </section>
    </main>
  );
}