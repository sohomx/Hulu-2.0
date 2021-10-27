import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="">
      <h1>This is the header</h1>
      <img
        src="https://www.techadvisor.co.uk/cmsdata/features/3779153/hulu_logo_copy_thumb1200_16-9.png"
        alt="hulu-logo"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
