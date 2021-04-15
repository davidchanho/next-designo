import Link from "next/link";
import React from "react";

function Brand() {
  return (
    <Link href="/">
      <img
        src="/assets/shared/desktop/logo-dark.png"
        alt=""
        width={202}
        height={27}
      />
    </Link>
  );
}

export default Brand;
