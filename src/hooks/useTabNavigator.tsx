import React from "react";
import useCurrentPageStore from "./stores/useCurrentPageStore";
import useTabCollection from "./stores/useTabCollection";
import useTabStore from "./stores/useTabStore";

type LinkProps = {
  children: React.ReactNode;
  to: number;
  props: any;
};

const Link: React.FC<LinkProps> = ({ children, to, ...props }) => {
  const activeTab = useTabStore((state) => state.activeTab);
  const setActiveTab = useTabStore((state) => state.setActiveTab);
  const setCurrentPage = useCurrentPageStore((state) => state.setCurrentPage);
  const tabs = useTabCollection((state) => state.tabs);

  return (
    <React.Fragment>
      <button
        {...props}
        onClick={() => {
          setActiveTab(to);
          setCurrentPage(tabs[activeTab].page);
        }}
      >
        {children}
      </button>
    </React.Fragment>
  );
};

const useLink = (to: number) => {
  useTabStore((state) => state.setActiveTab)(to);

  useCurrentPageStore((state) => state.setCurrentPage)(
    useTabCollection((state) => state.tabs)[
      useTabStore((state) => state.activeTab)
    ].page
  );
};

const useTabNavigator = () => {
  return {
    Link,
    useLink,
  };
};

export default useTabNavigator;
