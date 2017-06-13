export const REMOVE_FROM_DASHBOARD = "REMOVE_FROM_DASHBOARD";

export function removeFromDash(index) {
  return {
    type: REMOVE_FROM_DASHBOARD,
    payload: index
  };
};
