import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../UI/Button";
// import Button from "../ui/Button";

const EventInfo = () => {
  const { id } = useParams();
  const [event, setEventInfo] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;


  useEffect(() => {
    async function getEventInfo() {
      const { data } = await axios.get(
        `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${API_KEY}`
      );
      const eventInfo = new Array(data);
      setEventInfo(eventInfo);
    }
    getEventInfo();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {event.map((info) => (
          <div className="event__info--container">
            <div className="event__info--image--wrapper">
              <figure className="event__info--img--container">
                <a href={info.images[4].url}>
                <img
                  src={info.images[4].url}
                  className="event__info--img"
                  alt=""
                />
                </a>
              </figure>
            </div>
            <div className="event__info--information">
              <div className="event__main--info">
                <h1 className="event__info--title">{info.name}</h1>
                <div className="event__info--sub-title event__info--venue">
                  {info._embedded.venues.map((venue) => (
                    <>
                      <h3>{venue.name || null}</h3>
                      <p className="event__info--venue--address">
                        {venue.address.line1 || null},
                      </p>
                      <p className="event__info--sub-title">Laguna Beach, Ca</p>
                    </>
                  ))}
                </div>
                <p className="event__info--date">
                  Date: {info.dates.start.localDate}
                </p>
              </div>
              <div className="event__info--para">
                  {/* {info._embedded.venues.map((general) => (
                    <p>
                      {general.generalInfo.generalRule}
                    </p>
                  ))} */}
              </div>
              <div className="event__info--pricing-container">
                <p className="event__info--pricing">Pricing: 
                {info.priceRanges
                              ? info.priceRanges.map((price, i) => (
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
                <Button name={"Buy Tickets"} href={info.url} />
                {info._embedded.venues.map((link) => (
                  <a href={link.url} target="_blank" rel="noreferrer">
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default EventInfo;
