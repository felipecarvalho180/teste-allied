import PurchaseProvider from '../context/purchase/PurchaseProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <PurchaseProvider>
      <Component {...pageProps} />
    </PurchaseProvider>
  );
}

export default MyApp;
