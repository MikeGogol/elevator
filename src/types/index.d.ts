declare module "react-reveal/Pulse" {
  import { Component, ReactNode } from "react";

  type Props = {
    spy: number | string;
    children: ReactNode;
  };

  export default class Pulse extends Component<Props, any> {}
}
