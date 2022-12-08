import React from "react";
import Head from "next/head";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* Head */}
      <Head>
        <title>Advice Generator App</title>
        <meta
          name="description"
          content="Advice Generator Application"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Advice Generator App: A Frontend Mentor Customized Challenge" />
        <meta property="og:description" content="Advice, Life, Lessons, Learnings, Value & Purpose" />
        {/* Flaticon */}
        <link rel="shortcut icon" href="/images/lightbulb3.png" />
      </Head>

      {/* Header, Main & Footer */}
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* Mobile Visibility */}
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* <MobileFooterButtons /> */}
      </div>
     
    </>
  );
};
export default Layout;