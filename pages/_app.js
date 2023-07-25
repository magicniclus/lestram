"use client";
import "../styles/globals.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-TDB6JT84",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
