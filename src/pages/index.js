import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import catAndHumanIllustration from '../images/bass-club.png';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <section className="text-center">
        <p className="mb-8 text-2xl leading-loose">
          Contact Info:{` `}
          <a
            className="font-bold text-gray-900 no-underline"
            href="mailto:kelloggfcinfo@gmail.com"
          >
            kelloggfcinfo@gmail.com
          </a>
        </p>
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto "
          src={catAndHumanIllustration}
        />
      </section>
    </Layout>
  );
}

export default IndexPage;
