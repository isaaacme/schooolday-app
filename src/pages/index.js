import Head from "next/head";
import Styles from "../styles/Layout.module.css";
import Header from "../components/Header";
import Explainer from "../components/Explainer";
import Features from "../components/Features";

export default function Home() {
  return (
    <div className={Styles.Layout}>
      <Head>
        <title>isaac feldman - web stuff maker</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Header />
      <Explainer />
      <Features />
    </div>
  );
}
