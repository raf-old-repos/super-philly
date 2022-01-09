import create from "zustand"


type CurrentPageState = {
    CurrentPage: React.ElementType,
    setCurrentPage: (CurrentPage: React.ElementType) => void,
}

const defaultComponent = () => <></>

const useCurrentPageStore = create<CurrentPageState>(set => ({
    CurrentPage: defaultComponent,
    setCurrentPage: (CurrentPage: React.ElementType) => set(state => ({ ...state, CurrentPage })),
}))

export default useCurrentPageStore