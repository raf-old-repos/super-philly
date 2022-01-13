import create from "zustand";
import { REGIONAL_RAIL_STATIONS } from "../../data/constants";
import { URLbuilder } from "../../util/URLbuilder"
import type { Bus, BusStop, RegionalRailTrain } from "../../types/Septa.type";

const septaBaseURL = "http://www3.septa.org/hackathon/"


type TrainDirections = "Northbound" | "Southbound"

type useRegionalRailStoreType = {
    train?: RegionalRailTrain[],
    getTrainByName: (line: string, direction: TrainDirections) => Promise<void>
}

export const useRegionalRailStore = create<useRegionalRailStoreType>((set) => ({
    train: undefined,
    getTrainByName: async (line: string, direction: TrainDirections) => {
        const builder = new URLbuilder(septaBaseURL)

        if (REGIONAL_RAIL_STATIONS.includes(line)) {
            const url = builder.attach("Arrivals").attach(line).url()
            const res = await fetch(url)
            const data = await res.json()

            const train = data[Object.keys(data)[0]][0][direction]

            set((state) => ({ ...state, train }))

        } else {
            console.log(`Regional rail station ${line} does not exist`)
        }

    }
}));

type BusScheduleStoreByIdType = {
    bus?: Bus,
    fetchBusById: (id: string) => Promise<void>
}

export const useBusScheduleStoreById = create<BusScheduleStoreByIdType>((set) => ({
    bus: undefined,
    fetchBusById: async (id: string) => {
        const builder = new URLbuilder(septaBaseURL)
        const url: string = builder.attach("BusSchedules").param("req1", id).url()
        const res = await fetch(url)
        if (!res.ok) {
            console.log("Bus ID does not exist")
        } else {
            const data = await res.json()

            const bus = data[Object.keys(data)[0]][0]

            set(state => ({ ...state, bus }))
        }
    }
}))

type BusStationListStoreType = {
    stops?: BusStop[],
    fetchBusStopsByRoute: (route: number) => Promise<void>
}

export const useBusStationListStore = create<BusStationListStoreType>(
    (set) => ({
        stops: undefined,
        fetchBusStopsByRoute: async (route: number) => {
            const builder = new URLbuilder(septaBaseURL)
            const url = builder.attach("Stops").param("req1", route.toString())
        }
    })
)