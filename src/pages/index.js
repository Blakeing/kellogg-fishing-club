import React from 'react';

import SEO from '../components/seo';
//import catAndHumanIllustration from '../images/client-pick.png';
import catAndHumanIllustration from '../images/splash-page.jpg';

function IndexPage() {
  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <img
        alt="Cat and human sitting on a couch"
        className="block w-full h-full mx-auto"
        src={catAndHumanIllustration}
      />
    </>
  );
}

export default IndexPage;
