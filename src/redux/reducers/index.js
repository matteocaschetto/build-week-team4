const initialState = { mainState: { content: [] } };

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-PROFILE":
      return {};
    default:
      return state;
  }
};

export default mainReducer;
