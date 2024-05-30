"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  const path = usePathname();
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="bg-neutral-50 p-4 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 ">
      <div className="flex gap-12 items-center">
        <div className="flex gap-2 items-center text-3xl">
          {/* <FaHome className="text-4xl text-rose-500" /> */}
          <Image
            src={"/logo.png"}
            height={40}
            width={40}
            alt={"estatigo_logo"}
          />
          <h1 style={{ fontFamily: "cursive" }} className="text-rose-500">
            estatigo
          </h1>
        </div>

        <ul className="hidden md:flex gap-10">
          <Link href={"/"}>
            <li
              className={`hover:text-rose-500 font-normal text-md cursor-pointer ${
                path == "/" && "text-rose-500"
              }`}
            >
              Sale
            </li>
          </Link>
          {/* <Link href={"/"}> */}
          <li className="hover:text-rose-500 font-normal text-md cursor-pointer">
            Rent
          </li>
          {/* </Link> */}
          {/* <Link href={"/"}> */}
          <li className="hover:text-rose-500 font-normal text-md cursor-pointer">
            Find Agent
          </li>
          {/* </Link> */}
        </ul>
      </div>
      <div className="flex gap-2">
        <Button>List Property</Button>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href={"/sign-in"}>
            <Button variant="outline">Sign In</Button>
          </Link>
        )}
        {/* <Button variant="outline">Sign In</Button> */}
      </div>
    </div>
  );
}
