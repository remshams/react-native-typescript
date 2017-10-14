import * as React from "react";
import MainView from "../views/main";
import { MainState } from "../reducers/main";
import { connect } from "react-redux";

export type MainProps = {
  message: string;
}

const Main = ({ message }: MainProps) => (
  <MainView message={message}/>
);

const mapStateToProps = (state: MainState) => ({
  message: state.value
});

export default connect(mapStateToProps)(Main);
