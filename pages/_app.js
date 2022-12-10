import '../styles/globals.css'
import { Roboto, Poppins } from "@next/font/google";
import Head from 'next/head';

const roboto = Roboto({
  weight: "400",
});
const poppins = Poppins({
  weight: "900",
});

function MyApp({ Component, pageProps }) {
  return (
  <main className={roboto.className}>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    </Head>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"></script>

    <Component {...pageProps} />
  </main>
  )
}

export default MyApp
