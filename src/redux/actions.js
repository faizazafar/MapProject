export const GET_VENUES = "GET_VENUES";

const API_URL = "https://cx6bmbl1e3.execute-api.us-east-2.amazonaws.com/venues";

export const getCities = () => {
  try {
    return async (dispatch) => {
      const result = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_VENUES,
          payload: json,
        });
      } else {
        console.log("Unable to fetch!");
      }
    };
  } catch (error) {
    console.log(error);
  }
};
