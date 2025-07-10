"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
export default function Page() {

  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col bg-stone-300">
      <div className="flex items-center justify-center relative">
        <div className="absolute w-full h-full z-0">
          <Image
            src="/top-bg-image.jpg"
            fill
            className="object-cover brightness-50"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <button className="btn btn-accent" onClick={() => router.push('/top')}>
            Accent
          </button>
        </div>
      </div>
    </main>
  );
}
