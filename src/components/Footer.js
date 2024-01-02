import React from 'react';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <p>&copy; {getCurrentYear()} RavenDev & IreneNdida</p>
    </footer>
  );
};

export default Footer;