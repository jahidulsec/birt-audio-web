import React from "react";
import { Logo } from "../../../components/logo/logo";

function Navbar() {
  return <header className="sticky top-0 py-0.5 bg-background z-10">
    <Logo />
  </header>;
}

export { Navbar };
