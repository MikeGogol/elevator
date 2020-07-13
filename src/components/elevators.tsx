import React from "react";

import {
  callElevatorToFloor,
  source,
  getInitialState,
  getFloorsNumber,
  Elv,
} from "../services/elevatorService";

import Elevator from "./Elevator";
import ControlPanel from "./ControlPanel";
import AppHeader from "./AppHeader";

type State = {
  elevators: Array<Elv>;
  floors: Array<number>;
};

export class Elevators extends React.Component<{}, State> {
  public readonly state: Readonly<State> = { elevators: [], floors: [] };

  async componentDidMount() {
    const [
      { data: elevators },
      {
        data: { floors: numOfFloors },
      },
    ] = await Promise.all([getInitialState(), getFloorsNumber()]);
    this.setState({ elevators, floors: this.createFloors(numOfFloors) });
    source.onmessage = (event: { data: string }) => {
      const elevator: Elv = JSON.parse(event.data);
      this.handleSetFloor(elevator);
    };
  }

  handleElevatorCall = async (elv: number) => {
    callElevatorToFloor(elv);
  };

  createFloors = (length: number) => {
    const floors = Array.from(Array(length).keys());
    return floors;
  };

  handleSetFloor = (elevator: Elv) => {
    const { id, floor, state } = elevator;
    const { elevators } = this.state;
    const updatedElv: Elv = { ...elevator, floor, state };
    const updatedElvs = elevators.map((elv) => {
      if (elv.id === id) {
        return updatedElv;
      }
      return elv;
    });
    this.setState({ elevators: updatedElvs });
  };

  render() {
    const { elevators, floors } = this.state;
    return (
      <>
        <AppHeader />
        <div className="elv-area">
          {elevators.map((elv) => (
            <Elevator
              key={elv.id}
              id={elv.id}
              floor={elv.floor}
              state={elv.state}
            />
          ))}
        </div>
        <ControlPanel items={floors} onItemSelect={this.handleElevatorCall} />
      </>
    );
  }
}
