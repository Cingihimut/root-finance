import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";
import ButtonConnect from "./button-connect";

const items = [
  { name: "Get USDe", path: "/get-usde" },
  { name: "Liquidity", path: "/get-usde" },
  { name: "Defi Vault", path: "/get-usde" },
  { name: "Portofolio", path: "/get-usde" },
  { name: "Claim APY", path: "/claim" },
];

const NavItems = ({ sidebarView = false }) => (
  <div>
    <ul className={sidebarView ? "flex flex-col mt-10" : "flex gap-2"}>
      {items.map((item, index) => (
        <li className="py-4" key={index}>
          <Link
            href={item.path}
            className="text-sm h-9 py-2 px-4 rounded-md hover:bg-emerald-400/15"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

function Sidebar() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary" size="icon">
            <Menu />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>
        <SheetContent className="flex flex-col justify-between">
          <NavItems sidebarView />
          <div className="flex justify-end gap-2">
            <ModeToggle />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 sticky top-0 border-border border-b-[0.6px] backdrop-blur-lg">
      <div className="flex justify-between items-center h-20 ">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold">
            ///
          </Link>
          <div className="hidden lg:block">
            <NavItems />
          </div>
        </div>

        {/* CENTER */}
        <div className="flex gap-2">
          {/* SIDEBAR */}
          <div className="hidden lg:block">
            <ModeToggle />
          </div>

          <ButtonConnect />
          <Sidebar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
