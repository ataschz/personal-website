import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>0x4t4</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Ata Sanchez</h1>

        <div>
          {/*  <p className={styles.address}>
            $ETH
            <code className={styles.code}>0x4t4.eth</code>
          </p>
          <p className={styles.address}>
            $BTC
            <code className={styles.code}>0x4t4.rsk</code>
          </p>
          <p className={styles.address}>
            $SOL
            <code className={styles.code}>0x4t4.sol</code>
          </p>
          <p className={styles.address}>
            $UST
            <code className={styles.code}>0x4t4.ust</code>
          </p> */}
        </div>
        <div className={styles.address}>
          <h3>Public Address</h3>
          <a
            href="https://blockscan.com/address/0x96BffB89Efd286991e3dad868c7C87cd371D3ceE"
            className={styles.link}
          >
            <code className={styles.code}>
              0x96BffB89Efd286991e3dad868c7C87cd371D3ceE
            </code>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
