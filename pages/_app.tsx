import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import Script from "next/script";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider>
        <Script
          src="https://kit.fontawesome.com/ee8decf9b5.js"
          crossOrigin="anonymous"
        ></Script>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
