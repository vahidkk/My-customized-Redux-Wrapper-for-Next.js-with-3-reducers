import { wrapper } from "../store/store";

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);

// import { wrapper } from "../store/store";
// import "../assets/css/bootstrap.min.css";
// import Head from "next/dist/shared/lib/head";
// import Layout from "../components/layout/Layout";
// import "../assets/css/fontawesome.min.css";
// import "../assets/css/main.css";
// import "../node_modules/react-simple-tree-menu/dist/main.css";
// import { useEffect } from "react";

// const WrappedApp = ({ Component, pageProps }) => {
//   useEffect(() => {
//     import("../assets/js/bootstrap.bundle.min");
//   }, []);

//   return (
//     <>
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link
//           rel="stylesheet"
//           href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap"
//         ></link>
//         <link
//           rel="shortcut icon"
//           type="image/x-icon"
//           href="assets/img/favicon.ico"
//         ></link>
//       </Head>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </>
//   );
// };

// export default wrapper.withRedux(WrappedApp);
