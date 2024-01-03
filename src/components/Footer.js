import React from 'react';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <p>&copy; {getCurrentYear()} RavenDev & Ndindairene </p>
      <p>All Rights Reserved</p>
    </footer>
  );
};

export default Footer;