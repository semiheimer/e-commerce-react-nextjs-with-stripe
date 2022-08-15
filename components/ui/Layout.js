import React from 'react';
import Head from 'next/head';
import Footer from '../Footer';
import Navbar from '../navbar/Navbar';
import dynamic from 'next/dynamic';

// const Navbar = dynamic(import('../navbar/Navbar'), {
//   ssr: false,
// });
const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Semih Store</title>
        <meta name='description' content='e-commerce app with nextjs redux' />
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
