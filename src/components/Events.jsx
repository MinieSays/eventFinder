import React from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const Events = ({
  sortBy,
  events,
  showFilter,
  setSortBy,
  loading,
  search,
  currentPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let sortedEvents;

  if (sortBy === "input") sortedEvents = currentPosts;
  if (sortBy === "concertName")
    sortedEvents = events.slice().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <div className="container">
        <div className="row event__row">
          <div className="filter__container">
            <h1 className="search__results--title">
              Search results for {<span className="red">"{search}"</span>}...
            </h1>
            {showFilter && (
              <>
                <div className="filter__container--wrapper">
                  <select
                    id="filter"
                    className="filter__box"
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                  >
                    <option value="DEFAULT" disabled>
                      Sort by..
                    </option>
                    <option value="concertName">Concert Name</option>
                  </select>
                </div>
              </>
            )}
          </div>
          <div className="event__container">
            {loading
              ? new Array(10).fill(0).map((_, index) => (
                  <div className="event__wrapper">
                    <figure className="event__img--wrapper event__img--wrapper-skelton">
                      <div className="event__img event__img--skeleton"></div>
                    </figure>
                    <div className="event__description">
                      <div className="event__venues--title--location">
                        <p className="event__venues--title event__venues--title--skeleton"></p>
                      </div>
                      <p className="event__title event__title--skeleton"></p>
                      <div className="event__price--date">
                        <div className="event__date--container">
                          <p className="event__date"></p>
                        </div>
                        <div className="event__price--container">
                          <p className="event__price"></p>
                          <p className="event__pricing"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : events === null
              ? `Sorry there are no events with the name "${search}"`
              : sortedEvents.map((event, i) => (
                  <div className="event__wrapper">
                    <figure className="event__img--wrapper">
                      <Link to={`${event.id}`}>
                        <img
                          src={event.images[4].url}
                          className="event__img"
                          alt=""
                        />
                        <div className="overlay overlay__left">
                          <button className="event__btn">Learn More</button>
                        </div>
                      </Link>
                    </figure>
                    <div className="event__description">
                      <div className="event__venues--title--location">
                        {event._embedded.venues
                          ? event._embedded.venues.map((venu, i) => (
                              <p className="event__venues--title" key={i}>
                                {venu.name || null}
                              </p>
                            ))
                          : null}
                        {event._embedded.venues
                          ? event._embedded.venues.map((citys, i) => (
                              <p key={i}>{citys.city.name || null}</p>
                            ))
                          : null}
                      </div>
                      <h1 className="event__title">{event.name || null}</h1>
                      <div className="event__price--date">
                        <div className="event__date--container">
                          <p className="event__date">Date</p>
                          <p> {event.dates.start.localDate}</p>
                        </div>
                        <div className="event__price--container">
                          <p className="event__price">Price:</p>
                          <p className="event__pricing">
                            {event.priceRanges
                              ? event.priceRanges.map((price, i) => (
                                  <span key={i}>
                                    $
                                    {price.min === 0
                                      ? "Not Applicable"
                                      : price.min}{" "}
                                    - ${price.max === 0 ? "" : price.max}
                                  </span>
                                ))
                              : "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          <div className="pagination">
            <Pagination
              totalPosts={events.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
//   event._embedded.venues.map((venu, i) => (
//     <p className="event__venues--title" key={i}>
//       {venu.name || null}
//     </p>
//   ))
