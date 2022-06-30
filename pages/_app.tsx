import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";

const TopBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/functions">
            <a>Functions</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog Posts</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>human&gt;managed_ | nextjs-sanity sandbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main>
        <div style={{ maxWidth: "800px" }}>
          <Component {...pageProps} />
        </div>
      </main>
      <footer>human&gt;managed_</footer>
    </>
  );
};

export default App;
