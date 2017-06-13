export const FILTER = "FILTER";

export function filter(dashboard) {
  return {
    type: FILTER,
    payload: dashboard
  };
};
