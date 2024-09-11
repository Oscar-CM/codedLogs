
import Image from "next/image";
import Link from 'next/link';
import {

  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <main className=" p-3 m-3">
      <Image
        src="/hack.jpeg"
        fill
        alt="background home"
        className="absolute h-[70px] -z-10 opacity-10"
      />
      <Navbar />
      <div className="flex items-center justify-center mt-10 text-red-400 relative z-10">
      <div className="">

        <h1 className="text-3xl"> Welcome to CodedLogs</h1>
        <h1 className="bg-green-600 p-4 m-2 rounded-xl text-red-400">
          <Link href="/dashboard" className="text-white">Explore our Products</Link>
        </h1>
      </div>
      </div>
      <div>
        <h1 className="flex items-center"> We are here to stay</h1>
      </div>
    </main>
  );
}
