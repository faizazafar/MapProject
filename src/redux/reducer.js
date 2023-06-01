import { GET_VENUES } from "./actions";

const initialState = {
  cities: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VENUES:
      return { ...state, cities: action.payload };
    default:
      return state;
  }
}

export default userReducer;
