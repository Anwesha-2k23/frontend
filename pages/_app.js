import '../styles/globals.css'
import { Poppins } from "@next/font/google";
import Script from 'next/script';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';
// const Navbar = dynamic(() => import('../components/Navbar/Navbar'), {
//     ssr: false,
// })
import Navbar from '../components/Navbar-temp'
import Footer from '../components/Footer/Footer';

const poppins = Poppins({
  weight: "900",
});
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // const showHeader = router.pathname === '/ca-register' || '/ca-login' ? false : true;
  let showHeader = true;
  if(router.pathname === '/ca-register' || router.pathname === '/ca-login' || router.pathname === '/userLogin' || router.pathname === '/userRegister') {
    showHeader = false;
  }
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
      {showHeader && <Navbar />}
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp
