import { Fragment } from "react";
import Layout from "../components/Layout";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
