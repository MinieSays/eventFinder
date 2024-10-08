import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Events from "../components/Events";
import SearchBanner from "../components/SearchBanner";

const SearchResults = ({
  setLoading,
  setShowFilter,
  sortBy,
  showFilter,
  setSortBy,
  loading,
}) => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const API_KEY = process.env.REACT_APP_API_KEY;
  let { search } = useParams();

  useEffect(() => {
    async function getEvents() {
      const { data } = await axios.get(
        `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${search}&apikey=${API_KEY}`
      );
      setEvents(data._embedded.events);
      setLoading(false);
      setShowFilter(true);
    }
    getEvents();
  }, [search, setLoading, setShowFilter, API_KEY]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = events.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="search__results--container">
        <div className="row search__results--row">
          <Events
            sortBy={sortBy}
            events={events}
            showFilter={showFilter}
            setSortBy={setSortBy}
            loading={loading}
            search={search}
            currentPosts={currentPosts}
            setCurrentPage={setCurrentPage}
            totalPosts={events.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default SearchResults;
