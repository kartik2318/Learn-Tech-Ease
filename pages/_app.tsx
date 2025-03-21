// _app.tsx
import Head from 'next/head';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Header from './layout/Header';
import Footer from './layout/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <> 
  <Header />
  <Component {...pageProps} />
  <Footer />
  </>
  );
}

export default MyApp;
