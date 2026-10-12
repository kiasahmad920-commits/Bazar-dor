"use client";
import { authClient } from "@/lib/auth-client";
import { ISignUpDataType } from "@/types/allDataType";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Eye } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsEyeSlash } from "react-icons/bs";

export default function SignInPage() {
  const [isConVisible, setIsConVisible] = useState(false);
  const {data: session} = authClient.useSession();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const resData: ISignUpDataType = {
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    };
    if(session?.user){
      toast.error("আপনার এই ইমেল দিয়ে আপনি একটি একাউন্ট তৈরি করেছেন । তাই এখন নতুন ইমেইল ব্যবহার করুন")
      return
    }
    const { data, error } = await authClient.signIn.email({
      email: resData.email,
      password: resData.password,
    });
    if(error){
      toast.error("অকার্যকর ইমেল বা পাসওয়ার্ড");
      return
    }
    toast.success("আপনার একাউন্টি সফলভাবে সাইন ইন হয়েছে")
    redirect("/")
  };
  const signInOnGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const signInOnGitHub = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="mx-auto my-10 w-full max-w-md px-4 sm:my-16 sm:px-0">
      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          সাইন ইন
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      {/* Sign In Card */}
      <div className="flex w-full flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="mb-1 block font-semibold text-gray-800">
              ইমেইল
            </Label>

            <Input className="min-h-12 w-full rounded-xl border border-[#16864a] bg-white px-4 py-3 text-sm outline-none transition focus:ring-4 focus:ring-[#16864a]/10" />

            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            className="w-full"
            name="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="mb-1 block font-semibold text-gray-800">
              পাসওয়ার্ড
            </Label>

            <InputGroup className="flex min-h-12 w-full items-center rounded-xl border border-[#16864a] bg-white pr-2 transition focus-within:ring-4 focus-within:ring-[#16864a]/10">
              <InputGroup.Input
                className="min-w-0 flex-1 px-3 text-sm outline-none"
                type={isConVisible ? "text" : "password"}
              />

              <InputGroup.Suffix className="shrink-0">
                <Button
                  isIconOnly
                  type="button"
                  aria-label={isConVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsConVisible(!isConVisible)}
                >
                  {isConVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <BsEyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>

            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>

            <FieldError />
          </TextField>

          {/* Submit Button */}
          <Button
            type="submit"
            className="mt-1 min-h-12 w-full rounded-xl bg-[#05893E] font-semibold text-white transition hover:bg-[#109e4d]"
          >
            সাইন ইন
          </Button>
        </Form>

        {/* Divider */}
        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-3 text-gray-400">
          <hr className="border-gray-200" />
          <p className="text-sm">অথবা</p>
          <hr className="border-gray-200" />
        </div>

        {/* Social Login */}
        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <Button
            onPress={signInOnGoogle}
            className="min-h-11 w-full flex-1 rounded-xl bg-[#E2F0E7] px-3 font-semibold text-[#05893E] transition hover:bg-[#d1e8d9]"
          >
            Google দিয়ে চালিয়ে যান
          </Button>

          <Button
            onPress={signInOnGitHub}
            className="min-h-11 w-full flex-1 rounded-xl bg-[#E2F0E7] px-3 font-semibold text-[#05893E] transition hover:bg-[#d1e8d9]"
          >
            GitHub দিয়ে চালিয়ে যান
          </Button>
        </div>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-600">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/signup"
            className="font-semibold text-[#05893E] hover:underline"
          >
            সাইন আপ করুন
          </Link>
        </p>
      </div>
    </div>
  );
}
