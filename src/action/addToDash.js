export const ADD_TO_DASHBOARD = "ADD_TO_DASHBOARD";

export function addToDash(list) {
  return {
    type: ADD_TO_DASHBOARD,
    payload: list
  };
};
