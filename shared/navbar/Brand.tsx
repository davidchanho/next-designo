import Link from 'next/link';
import React from 'react'

function Brand() {
    return (
      <Link href="/">
        <img
          src="/assets/shared/desktop/logo-dark.png"
          alt=""
          width={404}
          height={54}
        />
      </Link>
    );
}

export default Brand
