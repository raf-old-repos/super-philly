import create from "zustand";
import { URLbuilder } from "../../util/URLbuilder";

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
const covidBaseUrl = "https://disease.sh/v3/covid-19/nyt/"
const builder = new URLbuilder(covidBaseUrl)

const useCovidStore = create<CovidStoreType>((set) => ({
  data: undefined,
  fetch: async () => {
    const url = builder.attach("counties").attach("Philadelphia").url()
    const response = await fetch(url);
    const data = await response.json();
    set((state) => ({
      ...state,
      data,
    }));
  },
}));

export default useCovidStore;