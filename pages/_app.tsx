import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Navigation />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
