export type RegionalRailTrain = {
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

export type Bus = {
    StopName: string | null,
    Route: string | null,
    date: string | null,
    day: string | null,
    Direction: string | null,
    DateCalender: string | null
}