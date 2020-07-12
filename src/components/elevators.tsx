import React, { Component } from "react";

import {
  callElevatorToFloor,
  source,
  getInitialState,
  getBuildingInfo,
} from "../services/elevatorService";

interface Elv {
  id: string;
  floor: number;
  state: string;
}

type ElevatorsState = {
  elevators: Array<Elv>;
  floors: Array<Number>;
};

export class Elevators extends React.Component<{}, ElevatorsState> {
  state = { elevators: [], floors: [] };

  async componentDidMount() {
    const { data: elevators } = await getInitialState();
    const {
      data: { floors },
    } = await getBuildingInfo();
    this.createFloors(floors);
    this.setState({ elevators });
    console.log(this.state);
    source.onmessage = (event) => {
      const elevator = JSON.parse(event.data);
      const { id, floor, state } = elevator;
      this.handleSetFloor(id, floor, state);
    };
  }

  createFloors = (number: number) => {
    let floors = [];
    for (let i: number = 0; i < number; i++) {
      floors.push(i);
    }
    this.setState({ floors });
  };

  handleSetFloor = (id: string, floor: number, state: string) => {
    const { elevators } = this.state;
    let elv: any = elevators.find((c: Elv) => c.id === id);
    elv.floor = floor;
    elv.state = state;
    this.setState({ elevators });
  };

  render() {
    return <div>Hello</div>;
  }
}
