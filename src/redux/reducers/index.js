const initialState = {
  singleProfile: {},
  content: []
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-PROFILE":
      return {
        ...state,
        singleProfile: action.payload
      };
    default:
      return state;
  }
};

export default mainReducer;
