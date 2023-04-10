import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/Components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Uzoma | Portfolio</title>
        <meta
          name="description"
          content="Personal Portfolio for Uzoma Victor"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout />
      </main>
    </>
  );
}
