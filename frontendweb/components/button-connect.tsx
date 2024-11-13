import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

function ButtonConnect() {
  return (
    <div>
      <Link
        href="#"
        className={buttonVariants({ variant: "default", size: "default" })}
      >
        Connect
      </Link>
    </div>
  );
}

export default ButtonConnect;
