import http, { hostAdress } from "./httpService";

export function callElevatorToFloor(floor: number) {
  return http.put(hostAdress + "/floor/" + floor);
}

export function getInitialState() {
  return http.get(hostAdress + "/elevators");
}

export function getBuildingInfo() {
  return http.get(hostAdress + "/building");
}

export const source = new EventSource(hostAdress + "/stream");
