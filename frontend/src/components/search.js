import React, { useEffect, useState } from "react";
import Employee from "./employee";
import Filter from "./filterSearch";
import Pagination from "./pagination";

const Search = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(5);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:3000/employees/");
    const data = await response.json();
    setEmployees(data);
    setLoading(false);
  };

  const searchData = (value) => {
    setSearchQuery(value);
    if (searchQuery !== "") {
      const filteredData = employees.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(employees);
    }
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = employees.slice(indexOfFirstCard, indexOfLastCard);
  const filteredCards = filteredResults.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <form className="search-form">
        <label className="search-label" htmlFor="search">search:  </label>
        <input
          type="text"
          className="search-bar"
          placeholder="Start Typing..."
          name="search"
          onChange={(event) => searchData(event.target.value)}
        />
      </form>
      {searchQuery.length > 1 ? (
        <Filter
          employees={filteredCards}
          loading={loading}
          key={employees._id}
        />
      ) : (
        <div>
          <Employee
            employees={currentCards}
            loading={loading}
            key={employees._id}
          />
          <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={employees.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};

export default Search;
