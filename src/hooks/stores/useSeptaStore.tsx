import create from "zustand";

import { REGIONAL_RAIL_STATIONS } from "../../data/constants";


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

type BiDirectionalData = {
    Northbound: RegionalRailTrain[],
    Southbound: RegionalRailTrain[]
}
type RegionalRailArrivalsDeparturesType = {
    [stationHeader: string]: BiDirectionalData[]
}

const septaBaseURL = "http://www3.septa.org/hackathon/Arrivals/"

type useRegionalRailStoreType = {
    train: RegionalRailTrain,
    getTrainByName: 
}

export const useRegionalRailStore = create((set) => ({

}));
