import { ContexWrapper } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContexWrapper>
      <Component {...pageProps} />
    </ContexWrapper>
  );
}

export default MyApp;
