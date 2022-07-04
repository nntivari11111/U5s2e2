//Create ActionCreator functions here

import axios from "axios";
import * as types from "./actionTypes";

const getShoes = (params) => (dispatch) => {
  dispatch({ type: types.GET_SHOES_DATA_REQUEST });

  return axios
    .get("http://localhost:8080/shoes", params)
    .then((r) =>
      dispatch({ type: types.GET_SHOES_DATA_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: types.GET_SHOES_DATA_FAILURE, payload: e }));
};

export { getShoes };

