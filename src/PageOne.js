import React from 'react';
import InnerPage from './InnerPage';

function PageOne() {
  return <div style={styles.container}>This is Page One
  <InnerPage/>
  </div>;
}

const styles = {
  container: {
    padding: '1rem',
  },
};

export default PageOne;