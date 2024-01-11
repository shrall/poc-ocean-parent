import type { AppProps } from "next/app";
import localFont from "next/font/local";

import "@/styles/globals.css";

const bcaSans = localFont({
  src: [
    {
      path: "../../public/fonts/bcasans-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/bcasans-lightitalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/bcasans-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/bcasans-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/bcasans-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/bcasans-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/bcasans-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/bcasans-bolditalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/bcasans-extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/bcasans-extrabolditalic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${bcaSans.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
