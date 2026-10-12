import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
    <Spinner className="text-success" size="lg" />
    </div>
  );
}