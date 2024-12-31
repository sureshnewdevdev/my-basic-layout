import React from 'react';

function LeftMenu({ onSelect }) {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.menu}>
        <li style={styles.menuItem} onClick={() => onSelect('pageOne')}>Page One</li>
        <li style={styles.menuItem} onClick={() => onSelect('pageTwo')}>Page Two</li>
        <li style={styles.menuItem} onClick={() => onSelect('pageThree')}>Page Three</li>
      </ul>
    </aside>
  );
}

const styles = {
  sidebar: {
    backgroundColor: '#f0f0f0',
    width: '200px',
    padding: '1rem',
  },
  menu: {
    listStyleType: 'none',
    padding: 0,
  },
  menuItem: {
    marginBottom: '1rem',
    cursor: 'pointer',
  },
};

export default LeftMenu;