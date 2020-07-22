import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { AddTask } from '../AddTask';

export const Header = ({
  darkMode,
  setDarkMode,
  sideBarOpen,
  setSideBarOpen,
}) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const [darkModeButton, setDarkModeButton] = useState(true);

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <button
            data-testid="show-sidebar"
            aria-label="Show Sidebar"
            type="button"
            onClick={() => {
              setSideBarOpen(!sideBarOpen);
            }}
          >
            {/* <img src="/images/logo.png" alt="Todoist" /> */}
            <FaBars />
          </button>
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add">
              <button
                data-testid="quick-add-task-action"
                aria-label="Quick add task"
                type="button"
                onClick={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
              >
                +
              </button>
            </li>
            <li className="settings__darkmode">
              <button
                data-testid="dark-mode-action"
                aria-label="Darkmode on/off"
                type="button"
                onClick={() => {
                  setDarkMode(!darkMode);
                  setDarkModeButton(!darkModeButton);
                }}
              >
                {darkModeButton ? <FaMoon /> : <FaSun />}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
