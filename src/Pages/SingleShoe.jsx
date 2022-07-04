import React from "react";
import  { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { getShoes } from "../Redux/AppReducer/action";
import {useParams } from "react-router-dom";

const SingleShoe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const shoes = useSelector((state) => state.AppReducer.shoes);
  const [SingleDataShoe, setSingleDataShoe] = useState({});

  useEffect(() => {
    if (shoes.length === 0) {
      dispatch(getShoes());
    }
  }, [shoes.length, dispatch]);

  useEffect(() => {
    if (id) {
      const SingleDataShoe = shoes.find((shoe) => shoe.id === Number(id));
      SingleDataShoe && setSingleDataShoe(SingleDataShoe);
    }
  }, [id, shoes]);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{SingleDataShoe?.name}</h2>
      <div>
        <img src={`${SingleDataShoe.image}`} alt="Cover Pic" />
      </div>
      <div>
        <div>{SingleDataShoe?.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
