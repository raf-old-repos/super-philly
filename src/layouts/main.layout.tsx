import React from "react";
import "../styles/layout.css";

type MainLayoutProps = {
  children: React.ReactNode;
  tabGroup: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, tabGroup }) => {
  return (
    <React.Fragment>
      <div className="main-layout">{children}</div>
      <div className="bottom-tab-group">{tabGroup}</div>
    </React.Fragment>
  );
};

export default MainLayout;
