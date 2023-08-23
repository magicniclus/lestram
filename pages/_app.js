"use client";
import "../styles/globals.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import * as fbq from "../lib/fpixel";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    fbq.pageview();
    const handleRouteChange = () => {
      fbq.pageview();
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-NZ64JVXS",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/fbevents.js"
      />
      <Script strategy="afterInteractive">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script');
        fbq('init', '${fbq.facebookPixelId}');
        `}
      </Script>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
