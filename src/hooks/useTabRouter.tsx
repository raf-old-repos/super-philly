import useTabStore from "./stores/useTabStore";
import useCurrentPageStore from "./stores/useCurrentPageStore";
import useTabCollection from "./stores/useTabCollection";

const useTabRouter = () => {
  // CurrentPage and activeTab
  const activeTab = useTabStore((state) => state.activeTab);
  const CurrentPage = useCurrentPageStore((state) => state.CurrentPage);

  // Tab setter and getter
  const setTabs = useTabCollection((state) => state.setTabs);
  const tabs = useTabCollection((state) => state.tabs);

  return { CurrentPage, activeTab, setTabs, tabs };
};

export default useTabRouter;
