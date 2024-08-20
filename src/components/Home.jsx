import { React } from "react";
import SearchHeader from "./SearchHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { iconOne, iconThree, iconTwo } from "../assets";
import SearchBar from "../UI/SearchBar";

const Home = ({ search, setSearch, setLoading, loading }) => {

  return (
    <section id="home">
      <div className="container search__container">
        <div className="row search__row">
          <SearchHeader
            title={"Event Finder"}
            subtitle={
              <>
                Find your next reason to <span className="red">jam out</span>!
              </>
            }
          />
          <SearchBar search={search} setSearch={setSearch} loading={loading} setLoading={setLoading} className={"events__home--input-field"} placeholder={"Search your favorite artist"} />
        </div>
        {loading ? (
          <div className="loader">
            <p className="home__loading">
              Searching for events with "{search}"...
            </p>
            <FontAwesomeIcon icon="spinner" className="spinner" />
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Home;
