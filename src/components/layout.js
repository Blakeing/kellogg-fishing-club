import PropTypes from 'prop-types';
import React from 'react';
import Tilt from '../images/splash-page-bg-2.jpg';

function Layout({ children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${Tilt})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="flex-col flex-1 min-h-screen font-sans"
    >
      <main className="flex items-center justify-center w-full h-screen max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
