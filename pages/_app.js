import '../styles/globals.css'
import { Poppins } from "@next/font/google";
import Script from 'next/script';

const poppins = Poppins({
  weight: "900",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
      </Script>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
