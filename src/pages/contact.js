import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import catAndHumanIllustration from '../images/bass-club.png';

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          <section>
            <form className="mx-auto">
              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="first-name"
              >
                First Name
              </label>

              <input
                className="w-full mb-6 form-input"
                id="first-name"
                type="text"
              />

              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="last-name"
              >
                Last Name
              </label>

              <input
                className="w-full mb-6 form-input"
                id="last-name"
                type="text"
              />

              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="message"
              >
                Message
              </label>

              <textarea
                className="w-full mb-6 form-textarea"
                id="message"
                rows="8"
              />

              <button className="px-4 py-2 text-sm font-bold text-white bg-blue-700 border-b-4 border-red-500 rounded hover:border-red-300 hover:bg-blue-600">
                Submit
              </button>
            </form>
          </section>
        </div>

        <figure className="w-2/3 md:w-1/3">
          <img alt="A dog relaxing" src={catAndHumanIllustration} />
        </figure>
      </section>
    </Layout>
  );
}

export default ContactPage;
