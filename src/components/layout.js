import PropTypes from 'prop-types';
import React from 'react';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <header className="h-12 bg-blue-700 border-b-4 border-red-500 " />

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="h-12 bg-blue-700 border-t-4 border-red-500 " />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
