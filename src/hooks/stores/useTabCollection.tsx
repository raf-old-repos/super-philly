import create from "zustand"
import { BottomTab } from "../../types/TabRouter.type"


type TabCollectionState = {
    tabs: BottomTab[],
    setTabs: (tabs: BottomTab[]) => void,
}

const useTabCollection = create<TabCollectionState>(set => ({
    tabs: [],
    setTabs: (tabs: BottomTab[]) => set(state => ({ ...state, tabs })),
}))

export default useTabCollection