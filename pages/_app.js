import '../styles/globals.css';

import Layout from './layout';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
// This APP uses react-query to fetch data from an API, it appears to be handling data fetching on the client side.
// This means that without additional server-side or static generation logic, this component is set up for client-side rendering.
