import '../ui/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import theme from '../ui/themes/theme';
import Header from '../ui/components/surfaces/Header/Header';
import { AppContainer } from '@styles/pages/AppContainer';
import Footer from '../ui/components/surfaces/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
