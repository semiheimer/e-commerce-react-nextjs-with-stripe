import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import { Toaster } from "react-hot-toast";
import Layout from "../components/ui/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
