import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import catAndHumanIllustration from '../images/client-pick-3.png';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center ">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-3/4 mx-auto mb-8 md:w-1/2"
          src={catAndHumanIllustration}
        />
        <h2 className="p-3 mb-4 text-4xl font-thin text-white ">
          website coming soon!
        </h2>
        <p className="p-3 mb-4 text-xl font-thin text-white ">
          contact us:{' '}
          <a style={{ color: '#a7d056' }} href="mailto:kelloggfcinfo@gmail.com">
            kelloggfcinfo@gmail.com
          </a>
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
