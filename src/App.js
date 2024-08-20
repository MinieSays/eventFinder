import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import EventInfo from "./pages/EventInfo";
import { Contact } from "./pages/Contact";

function App() {
  const [search, setSearch] = useState([]);
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const [hover, setHover] = useState(-1)
  const [sortBy, setSortBy] = useState("input");

  return (
    <div className="App">
      <Router>
        <Nav /> 
        <Routes>
          <Route
            path="/" exact
            element={<Home search={search} setSearch={setSearch} setLoading={setLoading} loading={loading} />}
          />
          <Route path="search/:search" element={<SearchResults events={events} setEvents={setEvents} setLoading={setLoading} setShowFilter={setShowFilter} showFilter={showFilter} hover={hover} setHover={setHover} sortBy={sortBy} setSortBy={setSortBy}  />} />
          <Route path="search/:search/:id" element={<EventInfo />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
