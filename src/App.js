import React, { useState } from 'react';
import TopBar from './TopBar';
import LeftMenu from './LeftMenu';
import Body from './Body';

function App() {
  // State to keep track of which page is selected
  const [selectedPage, setSelectedPage] = useState('pageOne');

  const handleSelectPage = (pageName) => {
    setSelectedPage(pageName);
  };

  return (
    <div style={styles.appContainer}>
      {/* Top Bar */}
      <TopBar />

      {/* Main Container: Left Menu + Body */}
      <div style={styles.mainContainer}>
        <LeftMenu onSelect={handleSelectPage} />
        <Body selectedPage={selectedPage} />
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh', // full viewport height
  },
  mainContainer: {
    display: 'flex',
    flex: 1, // Fill remaining space after top bar
    flexDirection: 'row',
  },
};

export default App;