import create from "zustand";

type CovidStoreType = {
  data?: CovidDataType;
  fetch: () => Promise<void>;
};

type CovidDataType = {
  date: string;
  county: string;
  state: string;
  fips: string;
  cases: number;
  deaths: number;
  updated: number;
};

const useCovidStore = create<CovidStoreType>((set) => ({
  data: undefined,
  fetch: async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/nyt/counties/Philadelphia");
    const data = await response.json();
    set((state) => ({
      ...state,
      data,
    }));
  },
}));

export default useCovidStore;