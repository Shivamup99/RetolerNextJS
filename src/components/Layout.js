import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Retoler Property</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
