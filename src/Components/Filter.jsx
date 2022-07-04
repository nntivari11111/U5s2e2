import React from "react";
import {useState } from "react"
import  { useEffect} from "react";

import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );

  const handleOnChange = (e) => {
    const option = e.target.value;
    let newCategoryOptions = [...category];
    if (category.includes(option)) {
      newCategoryOptions.splice(newCategoryOptions.indexOf(option), 1);
    } else {
      newCategoryOptions.push(option);
    }
    setCategory(newCategoryOptions);
  };

  useEffect(() => {
    if (category) {
      setSearchParams({ category });
    }
  }, [category, setSearchParams]);
  return (
    <FilterWrapper>
      <h3 style={{ textAlign: "center" }}>Filters</h3>
      <div>Category</div>
      <div  data-cy="filter-category">
        <div>
          <input
            onChange={handleOnChange}
            type="checkbox"
            value="Sneakers"
            checked={category.includes("Sneakers")}
          />
          <label htmlFor="">Sneakers</label>
        </div>
        <div>
          <input
            onChange={handleOnChange}
            type="checkbox"
            value="Loafers"
            checked={category.includes("Loafers")}
          />
          <label htmlFor="">Loafers</label>
        </div>
        <div>
          <input
            onChange={handleOnChange}
            type="checkbox"
            value="Canvas"
            checked={category.includes("Canvas")}
          />
          <label htmlFor="">Canvas</label>
        </div>
        <div>
          <input
            onChange={handleOnChange}
            type="checkbox"
            value="Boots"
            checked={category.includes("Boots")}
          />
          <label htmlFor="">Boots</label>
        </div>
      </div>
    </FilterWrapper>
  );
};

export default Filter;

const FilterWrapper=styled.div`
border: 2px solid black;
width:30%;
border-radius:5px;
`;