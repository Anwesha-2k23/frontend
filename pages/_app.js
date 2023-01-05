import '../styles/globals.css'
import { Poppins } from "@next/font/google";
import Script from 'next/script';
import Footer from '../components/Footer/Footer';

const poppins = Poppins({
  weight: "900",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
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
      <Footer />
    </main>
  );
}

export default MyApp
