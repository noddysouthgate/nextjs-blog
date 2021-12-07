import React from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';

function Live({ joke }) {
  return (
    <Layout>
      <Head>
        <title>Chuck Jokes</title>
      </Head>
      {joke}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://api.chucknorris.io/jokes/random`);
  const data = await res.json();

  if (!data) {
    return {
      props: { joke: 'N/A' },
    };
  }

  return {
    props: { joke: data?.value },
  };
}

export default Live;
