import * as React from "react";
import {
  addNavigationHelpers, NavigationAction, NavigationDispatch, NavigationState,
  TabNavigator
} from "react-navigation";
import Projects from "../../projects/containers/projects";
import { connect, Dispatch, DispatchProp } from "react-redux";
import { MainState } from "../reducers/main";

export type MainProps = {
  dispatch: NavigationDispatch<NavigationAction>;
  nav: NavigationState;
}

export const MainNavigator = TabNavigator({
  Projects: {
    screen: Projects
  }
});

const Main = ({ dispatch, nav }: MainProps & DispatchProp<NavigationDispatch<NavigationAction>>) => (
  <MainNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
);

const mapStateToProps = (state: MainState) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(Main);
