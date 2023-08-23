import Head from 'next/head';
import metadata from './about.json';

function AboutPage() {
  return (
    <>
      <Head>
        <title>{metadata.title }</title>
        <meta name="description" content={metadata.description} />
        {/* Add other metadata tags here */}
      </Head>
      hello about page
    </>
  );
}

export default AboutPage;
