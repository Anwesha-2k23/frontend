import '../styles/globals.css'
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: "900",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp
