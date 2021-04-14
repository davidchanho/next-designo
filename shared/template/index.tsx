import React, { PropsWithChildren } from "react";
import Footer from "../footer";
import NextHead from "../head";
import Navbar from "../navbar";

function Template({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      <NextHead />

      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Template;
