"use client";

import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import ButtonConnect from "../button-connect";
import DrawerBar from "./DrawerBar";
import NavbarItems from "./NavbarItems";

const style = {
  ul: "flex flex-col lg:flex-row gap-4 lg:gap-2",
  icon: "lg:hidden text-secondary w-5",
  link: "flex justify-between lg:block lg:h-9 lg:py-2 lg:px-4 text-sm font-medium text-secondary-foreground hover:text-primary lg:hover:bg-primary/15 lg:rounded-md",
};

function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 sticky top-0 border-border border-b-[0.6px] backdrop-blur-lg">
      <div className="flex justify-between items-center h-20 ">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold">
            ///
          </Link>
          <div className="hidden lg:flex gap-2">
            <NavbarItems style={style} itemsIndex={0} />
            <NavbarItems style={style} itemsIndex={1} />
          </div>
        </div>

        {/* CENTER */}
        <div className="flex gap-2">
          {/* SIDEBAR */}
          <div className="hidden lg:block">
            <ModeToggle />
          </div>

          <ButtonConnect />
          <DrawerBar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
