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
  <main className={roboto.className}>
    <Component {...pageProps} />
  </main>
  )
}

export default MyApp
