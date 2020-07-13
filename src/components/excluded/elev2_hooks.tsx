import React, { useState, useEffect } from "react";

import {
  callElevatorToFloor,
  source,
  getInitialState,
  getFloorsNumber,
  Elv,
} from "../../services/elevatorService";

import Elevator from "../Elevator";
import ControlPanel from "../ControlPanel";
import AppHeader from "../AppHeader";

type State = {
  elevators: Array<Elv>;
  floors: Array<number>;
};

const createFloors = (length: number) => {
  const floors = Array.from(Array(length).keys());
  return floors;
};

export function Elevators() {
  const [elevators, setElevators] = useState<State["elevators"]>([]);
  const [floors, setFloors] = useState<State["floors"]>([]);

  useEffect(() => {
    const handleOnMessage = (event: { data: string }) => {
      const elevator: Elv = JSON.parse(event.data);
      console.log(elevator);
      handleSetFloor(elevator);
    };
    source.addEventListener("message", handleOnMessage);
    (async () => {
      const [
        { data: elevators },
        {
          data: { floors: numOfFloors },
        },
      ] = await Promise.all([getInitialState(), getFloorsNumber()]);

      setFloors(createFloors(numOfFloors));
      setElevators(elevators);
    })();
    return () => {
      source.removeEventListener("message", handleOnMessage);
      source.close();
    };
  }, []);

  const handleElevatorCall = async (elv: number) => {
    callElevatorToFloor(elv);
  };

  const handleSetFloor = (elevator: Elv) => {
    setElevators((oldElevators) => {
      const { id, floor, state } = elevator;
      const updatedElv: Elv = { ...elevator, floor, state };
      console.log("elevators: ");
      console.log(oldElevators);
      const updatedElvs = oldElevators.map((elv) => {
        if (elv.id === id) {
          return updatedElv;
        }
        return elv;
      });
      console.log(updatedElvs);
      return updatedElvs;
    });
  };

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
      <ControlPanel items={floors} onItemSelect={handleElevatorCall} />
    </>
  );
}
