const initalState = {
  laptop: [],
  mobile: [],
  medical: [],
  accessories: [],
  userLogin: false,
};

export const globalReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SET_LAPTOP_DATA":
      return {
        ...state,
        laptop: action.payload,
      };
    case "SET_MOBILE_DATA":
      return {
        ...state,
        mobile: action.payload,
      };

    case "SET_MEDICAL_DATA":
      return {
        ...state,
        medical: action.payload,
      };
    case "SET_ACCESSORIES_DATA":
      return {
        ...state,
        accessories: action.payload,
      };

    case "RESET":
      return initalState;

    default:
      return state;
  }
};
