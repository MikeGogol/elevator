import React from "react";

import {
  callElevatorToFloor,
  source,
  getInitialState,
  getBuildingInfo,
} from "../services/elevatorService";

import Elevator from "./elevator";
import ControlPanel from "./controlPanel";
import AppHeader from "./appHeader";

type Elv = {
  id: string;
  floor: number;
  state: string;
};

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
    source.onmessage = (event) => {
      const elevator = JSON.parse(event.data);
      const { id, floor, state } = elevator;
      this.handleSetFloor(id, floor, state);
    };
  }

  createFloors = (number: number) => {
    const floors = Array.from(Array(number).keys());
    this.setState({ floors });
  };

  handleSetFloor = (id: string, floor: number, state: string) => {
    const { elevators } = this.state;
    let elv: any = elevators.find((c: Elv) => c.id === id);
    elv.floor = floor;
    elv.state = state;
    this.setState({ elevators });
  };

  handleElevatorCall = async (elv: number) => {
    await callElevatorToFloor(elv);
  };

  render() {
    const { elevators, floors } = this.state;
    return (
      <React.Fragment>
        <AppHeader />
        <div className="elv-area">
          {elevators.map((elv: Elv) => (
            <Elevator
              key={elv.id}
              id={elv.id}
              floor={elv.floor}
              state={elv.state}
            />
          ))}
        </div>
        <ControlPanel items={floors} onItemSelect={this.handleElevatorCall} />
      </React.Fragment>
    );
  }
}
