import api, { baseURL } from "./httpService";

export async function callElevatorToFloor(floor: number) {
  return api.put(`/floor/${floor}`);
}

export async function getInitialState() {
  const result = await api.get<Elv[]>("/elevators");
  console.log(result);
  return result;
}

export async function getFloorsNumber() {
  const result = await api.get<{ floors: number }>("/building");
  console.log(result);
  return result;
}

export const source = new EventSource(`${baseURL}/stream`);

export type Elv = {
  id: string;
  floor: number;
  state: string;
};
