import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as React from "react";
import "react-pwa-to-homescreen/dist/index.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout />
      <Head>
        <title>ຄຳສອນພຣະພຸດທະເຈົ້າ App</title>
        <meta name="description" content="ຄຳສອນພຣະພຸດທະເຈົ້າ App" />
        <link rel="icon" href="../public/favicon.ico" />
        <link rel="apple-touch-icon" href="../public/128.png" />
        <link rel="manifest" href="/manifest.webmanifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="theme-color" href="#D48F20C6" />
        <meta name="background_color" content="#D48F20C6" />
      </Head>
    </div>
  );
}
