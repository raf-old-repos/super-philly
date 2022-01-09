import React from "react";
import "./App.css";

import { AiFillHome } from "react-icons/ai";


// Tab routing
import useTabNavigator from "./hooks/useTabNavigator";
import useTabRouter  from "./hooks/useTabRouter";

// Layouts

import MainLayout from "./layouts/main.layout";

// Pages
import Home from "./pages/home";
import { BottomTabGroup } from "./components/BottomTabGroup";


function App() {

  const { CurrentPage, activeTab, setTabs, tabs } = useTabRouter();

  setTabs([
    {
      label: "Home",
      icon: <AiFillHome />,
      page: Home,
    },
  ]);

  return (
    <React.Fragment>
      <MainLayout
        tabGroup={
          <BottomTabGroup
            tabs={tabs}
            activeTab={activeTab}
            onChange={useTabNavigator().useLink}
          />
        }
      >
        <CurrentPage />
      </MainLayout>
    </React.Fragment>
  );
}

export default App;
