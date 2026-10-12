"use client";
import { ShoppingCartIcon } from "lucide-react";
import { Button, Dropdown, Label } from "@heroui/react";
import { useEffect, useState } from "react";
import { ICategoryDataType } from "@/types/allDataType";
import Link from "next/link";
import { getCategoryData } from "@/lib/allDataFetch";
import { redirect, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export default function Navbar() {
  const [date, setDate] = useState("");
  const pathName = usePathname();
  const [categoryData, setCategoryData] = useState<ICategoryDataType[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString("bn-BD", {
      dateStyle: "full",
    });
    const CategoryData = async () => {
      const data = await getCategoryData();
      setCategoryData(data);
    };
    CategoryData();
    setDate(currentDate);
  }, []);
  const { data: session } = authClient.useSession();
  let user;
  if (session?.user) {
    user = (
      <Dropdown>
        <Button aria-label="Menu" variant="ghost" className={`bg-[#E2F0E7] text-[#05893E] py-7`}>
          <div className="flex items-center gap-2">
            <Image
              src={
                session.user.image ||
                "https://cdn-icons-png.flaticon.com/512/14022/14022382.png"
              }
              alt="user"
              width={40}
              height={40}
              className="rounded-full w-8"
            ></Image>
            <p className="font-semibold">{session.user.name}</p>
          </div>
        </Button>
        <Dropdown.Popover>
          <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
            <Dropdown.Item>
            <Link href="/profile" onClick={()=>{
              setIsMenuOpen(false)
            }} className="w-full">
              <Label>View Profile</Label>
            </Link>
            </Dropdown.Item>
            <Dropdown.Item
              variant="danger"
              onClick={() => {
                setIsMenuOpen(false)
                authClient.signOut()
                redirect('/')
              }}
            >
              <Label>Sign Out</Label>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    );
  } else {
    user = (
      <>
        <Link href="/signin">
          <Button className="rounded-lg bg-white font-semibold text-[#05893E] hover:bg-[#E2F0E7]">
            সাইন ইন
          </Button>
        </Link>
        <Link href="/signup">
          <Button className="rounded-lg bg-[#05893E] px-4 py-2 font-semibold text-white hover:bg-[#109e4d]">
            সাইন আপ
          </Button>
        </Link>
      </>
    );
  }
  return (
    <nav className="relative z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="container mx-auto px-5 py-3 lg:px-30">
        {/* Navbar Top */}
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#05893E]">
              <ShoppingCartIcon className="size-6 text-white" />
            </div>

            <div className="min-w-0">
              <h2 className="text-xl font-bold text-[#05893E] sm:text-2xl">
                বাজার দর
              </h2>
              <p className="truncate text-xs text-gray-500">{date}</p>
            </div>
          </Link>

          {/* Desktop Auth Buttons */}
          <div className="hidden items-center gap-3 lg:flex">{user}</div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            aria-expanded={isMenuOpen}
            className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-[#05893E] transition hover:bg-[#E2F0E7] lg:hidden"
          >
            {isMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>

        {/* Desktop Category Links */}
        <div className="mt-3 hidden flex-wrap items-center gap-2 lg:flex">
          {categoryData.map((category) => {
            const isActive = pathName === `/categories/${category.id}`;

            return (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 font-semibold transition-colors ${
                  isActive
                    ? "bg-[#05893E] text-white"
                    : "text-[#05893E] hover:bg-[#E2F0E7]"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.nameBn}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 space-y-3 border-t border-gray-100 pt-4 lg:hidden">
            {/* Mobile Category Links */}
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {categoryData.map((category) => {
                const isActive = pathName === `/categories/${category.id}`;

                return (
                  <Link
                    key={category.id}
                    href={`/categories/${category.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-colors ${
                      isActive
                        ? "bg-[#05893E] text-white"
                        : "text-gray-700 hover:bg-[#E2F0E7] hover:text-[#05893E]"
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.nameBn}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="flex gap-3 border-t border-gray-100 pt-3 lg:hidden">
              {user}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
