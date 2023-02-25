const initState = {
  formdata: [],
};

const formreducer = (state = initState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "Form":
      return {
        ...state,
        formdata: [{ ...state.formdata, ...action.payload }],
      };
    default:
      return state;
  }
};

export default formreducer;
