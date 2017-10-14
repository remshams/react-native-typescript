import { NavigationState } from "react-navigation";
import { MainNavigator } from "../components/main";

export type MainState = {
  nav: NavigationState
}

const projectsViewAction = MainNavigator.router.getActionForPathAndParams("Projects");

export const initState: MainState = {
  nav: MainNavigator.router.getStateForAction(projectsViewAction, undefined)
};

export const mainReducer = (state: MainState = initState) => {
  return state;
};
