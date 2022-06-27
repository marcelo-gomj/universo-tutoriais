import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

import '../styles/globals.css';
import '../styles/nprogress.css';

import { Layout } from '../components/Layout';

function Ut({ Component, pageProps }) {
  const Router = useRouter();
  
  NProgress.configure({ showSpinner : false });

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Ut
