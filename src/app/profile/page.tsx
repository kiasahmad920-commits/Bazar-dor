"use client";

import { Suspense, useState } from "react";
import {
  UserRound,
  CalendarDays,
  Pencil,
  LogOut,
  ShieldCheck,
  CheckCircle2,
  X,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { FieldError, Form, Input, InputGroup, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import ProfileSkeleton from "@/components/skeleton/ProfileSkeleton";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const { data: session } = authClient.useSession();
  const profile = session?.user;

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);
    const formData = new FormData(e.currentTarget);
    const resData = {
      name: String(formData.get("name")),
      email: String(formData.get("email")),
    };
    await authClient.updateUser({
      name: resData.name,
    });
  };

  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <main className="min-h-screen bg-[#f3f7f3] px-4 py-8 text-[#202b23] sm:px-6 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-5xl">
          {/* Page Heading */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-[#16864a]"></div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              আমার প্রোফাইল
            </h1>
            <p className="mt-2 text-sm text-[#738078] sm:text-base">
              আপনার ব্যক্তিগত তথ্য দেখুন এবং প্রয়োজনে আপডেট করুন।
            </p>
          </div>
          {/* Profile Summary Card */}
          <section className="overflow-hidden rounded-3xl border border-[#dfe8df] bg-white shadow-[0_8px_35px_rgba(20,50,25,0.04)]">
            <div className="h-2 bg-gradient-to-r from-[#16864a] via-[#36a765] to-[#b7e4a9]" />

            <div className="flex flex-col gap-6 p-5 sm:flex-row sm:items-center sm:p-8">
              <div className="relative mx-auto shrink-0 sm:mx-0">
                <img src={profile?.image || "https://cdn-icons-png.flaticon.com/512/14022/14022382.png"} className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border-4 border-[#edf7ee] bg-[#e4f3e6] text-3xl font-bold text-[#16864a] sm:h-28 sm:w-28">
                </img>
              </div>

              <div className="min-w-0 flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                  <h2 className="break-words text-2xl font-bold sm:text-3xl">
                    {profile?.name}
                  </h2>
                  <ShieldCheck
                    size={20}
                    className="text-[#16864a]"
                    aria-label="Verified account"
                  />
                </div>

                <p className="mt-2 break-all text-sm text-[#738078] sm:text-base">
                  {profile?.email}
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf7ec] px-3 py-1.5 text-xs font-semibold text-[#16864a]">
                    <CheckCircle2 size={14} />
                    সক্রিয় অ্যাকাউন্ট
                  </span>
                  <span className="rounded-full bg-[#f3f5f3] px-3 py-1.5 text-xs font-medium text-[#68736b]">
                    সদস্য
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  authClient.signOut();
                  redirect("/");
                }}
                type="button"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-red-200 px-5 py-3 text-sm font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-50 sm:self-center"
              >
                <LogOut size={17} />
                সাইন আউট
              </button>
            </div>
          </section>
          {/* Personal Information */}
          <section className="mt-6 rounded-3xl border border-[#dfe8df] bg-white p-5 shadow-[0_8px_35px_rgba(20,50,25,0.04)] sm:mt-8 sm:p-8">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf7ec] text-[#16864a]">
                    <UserRound size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold sm:text-xl">
                      ব্যক্তিগত তথ্য
                    </h3>
                    <p className="mt-0.5 text-xs text-[#849087] sm:text-sm">
                      আপনার প্রোফাইলের তথ্য
                    </p>
                  </div>
                </div>
              </div>

              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#16864a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#116c3b]"
                >
                  <Pencil size={15} />
                  এডিট করুন
                </button>
              )}
            </div>

            <Form onSubmit={handleSave} className="w-full">
              <div>
                {/* Name */}
                <div>
                  <TextField
                    isRequired
                    name="name"
                    isReadOnly={!isEditing}
                    validate={(value) => {
                      if (value.length < 3) {
                        return "Name must be at least 3 characters";
                      }
                      return null;
                    }}
                  >
                    <p className="font-semibold">পূর্ণ নাম</p>
                    <InputGroup
                      className={`min-h-12 w-full rounded-xl border pr-4 text-sm outline-none transition  border-[#16864a] bg-white focus:ring-4 focus:ring-[#16864a]/10
                    }`}
                    >
                      <InputGroup.Suffix className="px-3">
                        <UserRound />
                      </InputGroup.Suffix>
                      <InputGroup.Input className="w-full" type="text" />
                    </InputGroup>
                    <FieldError />
                  </TextField>
                </div>
              </div>

              {isEditing && (
                <div className="mt-7 flex flex-col-reverse justify-end gap-3 border-t border-[#edf1ed] pt-5 sm:flex-row">
                  <button
                    onClick={() => setIsEditing(false)}
                    type="button"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#dfe8df] px-5 py-3 text-sm font-semibold text-[#5d6b60] transition hover:bg-[#f5f8f5]"
                  >
                    <X size={16} />
                    বাতিল
                  </button>
                  <button
                    type="submit"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#16864a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#116c3b]"
                  >
                    <CheckCircle2 size={17} />
                    পরিবর্তন সংরক্ষণ করুন
                  </button>
                </div>
              )}
            </Form>
          </section>
          {/* Account Details */}
          <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border border-[#dfe8df] bg-white p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf7ec] text-[#16864a]">
                <ShieldCheck size={22} />
              </div>
              <div>
                <p className="text-sm font-bold">অ্যাকাউন্ট নিরাপত্তা</p>
                <p className="mt-1 text-xs text-[#849087]">
                  আপনার অ্যাকাউন্ট সুরক্ষিত রাখুন
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-[#dfe8df] bg-white p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf7ec] text-[#16864a]">
                <CalendarDays size={22} />
              </div>
              <div>
                <p className="text-sm font-bold">সদস্য প্রোফাইল</p>
                <p className="mt-1 text-xs text-[#849087]">
                  আপনার ব্যক্তিগত তথ্য এক জায়গায়
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      </Suspense>
  );
}
