export const ADD_EVENT = "ADD_EVENT";

export function addEvent(index, list) {
  console.log(index, list);
  return {
    type: ADD_EVENT,
    payload: {index, list}
  };
};
