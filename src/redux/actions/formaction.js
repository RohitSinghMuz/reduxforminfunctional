export const formdataone = (payload) => {
  console.log(payload, "payload");
  return {
    type: "Form",
    payload: payload,
  };
};
