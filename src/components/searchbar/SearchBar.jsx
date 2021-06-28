import { useRef, useState } from "react";
import style from "./SearchBar.module.scss";
import useFetch from "react-fetch-hook";
const SearchBar = () => {
  const [searchItem, SetsearchItem] = useState("");

  const handleChange = event => {
      console.log(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  const searchInputRef = useRef();
  const {res} = useFetch()
  return (
    <form
      className={style.search}
      role="search"
      aria-label="Search for products"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className={`form-control ${style.search__form}`}
        onChange={handleChange}
        aria-label="Enter name for search item"
      />
      <button
        type="submit"
        aria-label="click for submit search"
        className={`btn btn-primary ${style.search__btn}`}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
