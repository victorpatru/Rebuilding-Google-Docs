import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Script
          src="https://kit.fontawesome.com/ee8decf9b5.js"
          crossOrigin="anonymous"
        ></Script>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
