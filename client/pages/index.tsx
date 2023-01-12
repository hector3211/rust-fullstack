import Head from "next/head";
import { Poppins } from "@next/font/google";
import Navbar from "./components/nav";

const popin = Poppins({
  weight: "300",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={popin.className + "min-w-full min-h-screen bg-zinc-800"}>
        <Navbar />
        <h1 className="flex text-red-500 text-3xl">hello</h1>
        <button className="btn btn-primary">button</button>
      </main>
    </>
  );
}
