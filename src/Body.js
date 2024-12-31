import React from 'react';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

function Body({ selectedPage }) {
  // Decide which component to show based on selectedPage
  let content;
  switch (selectedPage) {
    case 'pageOne':
      content = <PageOne />;
      break;
    case 'pageTwo':
      content = <PageTwo />;
      break;
    case 'pageThree':
      content = <PageThree />;
      break;
    default:
      content = <PageOne />; // Default page
  }

  return <div style={styles.bodyContainer}>{content}</div>;
}

const styles = {
  bodyContainer: {
    flex: 1, // expand to fill the rest of the space
    padding: '1rem',
  },
};

export default Body;