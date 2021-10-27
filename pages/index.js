import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0 🎥</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Navbar */}
      <Nav />
      {/* Results */}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const type = context.query.type;

  const request = await fetch(
    `https://api.themoviedb.org/3/${requests[type]?.url}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return {
    props: {
      results: request.results,
    },
  };
}
