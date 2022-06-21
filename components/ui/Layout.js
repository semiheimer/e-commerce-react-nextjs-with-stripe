import React from "react";
import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../navbar/Navbar";
const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Semih Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
