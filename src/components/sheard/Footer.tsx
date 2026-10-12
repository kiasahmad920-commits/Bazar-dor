import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-300">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:px-6 md:flex-row md:px-8 md:text-left lg:px-12 xl:px-20">
        <Link
          href="/"
          className="text-sm text-gray-800 hover:text-[#05893E]"
        >
          বাজার দর - প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </Link>

        <p className="text-sm text-gray-800">
          সকল দাম সম্ভাব্য: বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
}
