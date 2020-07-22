import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';

export const App = ({ darkModeDefault = false, sideBarDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  const [sideBarOpen, setSideBarOpen] = useState(sideBarDefault);
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid="application"
          className={darkMode ? 'darkmode' : undefined}
        >
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            sideBarOpen={sideBarOpen}
            setSideBarOpen={setSideBarOpen}
          />
          <Content sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

App.propTypes = {
  darkModeDefault: PropTypes.bool,
};
