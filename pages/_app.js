import '../styles/globals.css'
import { Roboto, Poppins } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
});
const poppins = Poppins({
  weight: "900",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script async src={"https://www.googletagmanager.com/gtag/js?id=" + process.env.GOOGLE_ANALYTICS}></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', process.env.GOOGLE_ANALYTICS);
      </script>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
