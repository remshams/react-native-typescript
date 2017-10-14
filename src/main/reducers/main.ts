export type MainState = {
  value: string;
}

export const initState: MainState = {
  value: "test"
};

export const mainReducer = (state: MainState = initState) => {
  return state;
};
