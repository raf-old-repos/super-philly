import create from "zustand"


type TabState = {
    activeTab: number,
    setActiveTab: (activeTab: number) => void,
}

const useTabStore = create<TabState>(set => ({
    activeTab: 0,
    setActiveTab: (activeTab: number) => set(state => ({ ...state, activeTab })),
}))

export default useTabStore