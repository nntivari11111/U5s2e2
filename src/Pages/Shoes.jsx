import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import ShoeCard from "../Components/ShoeCard";
import { getShoes } from "../Redux/AppReducer/action";
import { useLocation} from "react-router-dom";
import styled from "styled-components";

const Shoes = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const shoesData= useSelector((state) => state.AppReducer.shoes);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let getShoesParams;
    if (location.search || shoesData.length === 0) {
      getShoesParams = {
        params: {
          category: searchParams.getAll("category"),
        },
      };
    }
    dispatch(getShoes(getShoesParams));
  }, [location.search,dispatch,searchParams,shoesData.length]);
  return (
    <div style={{ display: "flex" }}>
      <Filter />
      <FilterdWrapper>
        {shoesData.length > 0 &&
          shoesData.map((data) => {
            return (
              <div key={data.id} style={{ width: "99%" }}>
                <Link  to={`/shoes/${data.id}`}>
                  <ShoeCard data={data}{...data} />
                </Link>
              </div>
            );
          })}
      </FilterdWrapper>
    </div>
  );
};

export default Shoes;

const FilterdWrapper=styled.div`
width:100%;
display:grid;
gap:10px;
grid-template-columns: repeat(auto-fit,  minmax(310px, max-content));
justify-content:center;
`
