import GlobalStyles from "../styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyles />  
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        theme="dark"
        closeOnClick
        pauseOnHover
      />
    <Component {...pageProps} />
    </>
  )
}


