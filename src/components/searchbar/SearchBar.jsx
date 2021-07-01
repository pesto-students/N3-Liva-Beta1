import { useState, useRef, useEffect } from "react";
import style from "./SearchBar.module.scss";
import { endpoints, headers } from "../../endpoints";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(false);
  const [haspopup, setHasPopup] = useState(false);
  const [isComponentVisible, setIsComponentVisible] = useState(true);
  const node = useRef(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
    }
  };
  const handleClickOutside = (event) => {
    if (node.current && !node.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchData();
  };
  // function for Fetching data from the api
  const searchData = async () => {
      if(!debouncedTerm){
        setError(false);
      }
    try {
      const response = await fetch(
        `${endpoints.products}?query=${debouncedTerm}`,
        { headers: headers }
      );
      const data = await response.json();
      data.data ? setSearchResult(data.data) : setError(true);
      setHasPopup(true);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    if (debouncedTerm) {
      searchData();
    }
  }, [debouncedTerm]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [term]);
  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <div className={style.search} ref={node}>
      {isComponentVisible ? "aaaa" : "bbbb"}
      <form
        className={style.search}
        role="search"
        aria-label="Search for products"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className={`form-control ${style.search__form}`}
          aria-label="Enter name for search item"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          aria-haspopup={haspopup}
          onChange={handleChange}
        />
        <button
          type="submit"
          aria-label="click for submit search"
          className={`btn btn-primary ${style.search__btn}`}
        >
          Search
        </button>
      </form>
      {error && debouncedTerm && (
        <div className={style.search__result} role="listbox">
          {" "}
          NO data found
        </div>
      )}
      {!error && searchResult?.length > 0 && debouncedTerm && (
        <div className={style.search__result} role="listbox">
          {searchResult?.map((searchItem) => (
            <Link className={style.search__resultitem} to={`products/${searchItem.id}`}>
              <img
                src={searchItem.media.source}
                className={style.search__resultimg}
              />
              <div className="">
                <div>{searchItem.name}</div>
                <div>{searchItem.price.formatted_with_symbol}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
