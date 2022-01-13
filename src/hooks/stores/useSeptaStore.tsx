import create from "zustand";

import { REGIONAL_RAIL_STATIONS } from "../../data/constants";
import { URLbuilder } from "../../util/URLbuilder"


type RegionalRailTrain = {
    direction: string | null,
    path: string | null,
    train_id: string | null,
    origin: string | null,
    destination: string | null,
    line: string | null,
    status: string | null,
    service_type: "LOCAL" | "EXPRESS" | null,
    next_station: string | null,
    sched_time: string | Date | null,
    depart_time: string | Date | null,
    track: string | null,
    track_change: string | null,
    platform: string | null,
    platform_change: string | null
}


const septaBaseURL = "http://www3.septa.org/hackathon/"

const builder = new URLbuilder(septaBaseURL)

type TrainDirections  = "Northbound" | "Southbound"

type useRegionalRailStoreType = {
    train?: RegionalRailTrain[],
    getTrainByName: (line: string, direction: TrainDirections) => Promise<void>
}

export const useRegionalRailStore = create<useRegionalRailStoreType>((set) => ({
    train: undefined,
    getTrainByName: async (line: string, direction: TrainDirections) => {
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
