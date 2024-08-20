import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ search, setSearch, loading, setLoading, className, placeholder, navigation }) => {
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate(`/search/` + search);
    }, 2000);
  }

  return (
    <>
      <form action="" className="eventnearby__form" onSubmit={onSubmit}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={placeholder}
          className={className}
        />
        <div className="search__icon--wrapper">
          {loading ? (
            <FontAwesomeIcon icon="spinner" className="search__bar--loader" />
          ) : (
            <FontAwesomeIcon icon="magnifying-glass" className="search__icon" />
          )}
        </div>
      </form>
    </>
  );
};

export default SearchBar;
