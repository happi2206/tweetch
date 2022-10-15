import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import DefaultLayout from '../layouts/DefaultLayout';
import SideBar from '../components/SideBar';
function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Navigation />
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </SessionProvider>
    </>
  );
}

export default MyApp;
