import React from 'react';

function TopBar() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My Company Name</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#3f51b5',
    padding: '1rem',
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    margin: 0,
  },
};

export default TopBar;