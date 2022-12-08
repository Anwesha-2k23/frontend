import '../styles/globals.css'
import Script from 'next/script';
import { Roboto, Poppins } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
});
const poppins = Poppins({
  weight: "900",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.GOOGLE_ANALYTICS});
        `}
      </Script>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
