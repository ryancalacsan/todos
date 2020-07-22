import React from 'react';
import { Sidebar } from './Sidebar';
import { Tasks } from '../Tasks';

export const Content = ({ sideBarOpen, setSideBarOpen }) => {
  return (
    <div className="content">
      <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <Tasks />
    </div>
  );
};
