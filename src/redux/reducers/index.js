const initialState = {
  singleProfile: {},
  experiences: [],
  content: []
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-PROFILE":
      return {
        ...state,
        singleProfile: action.payload
      };
    case "ADD_EXPERIENCES":
      return {
        ...state,
        experiences: [...state.experiences, action.payload]
      };
    case "SET_EXPERIENCES":
      return {
        ...state,
        experiences: action.payload
      };
      case "CREATE_POST":
        return{
          ...state,
          post: action.payload
        }
        
        

    default:
      return state;
  }
};

export default mainReducer;
