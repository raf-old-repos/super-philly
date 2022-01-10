import time

output = ""

with open('rrStations.txt', "r") as f:
    stations = [line.rstrip() for line in f]
    
    for station in stations:
        station.strip(" ")
        output += f"\"{station}\",\n"

with open("stationsMinfied.txt", "x") as new:
    new.write(f"[{output}]")

