import React, { useEffect, useState } from "react";
import Employee from "./employee2";
import {useForm} from "react-hook-form";
import Pagination from "./pagination";

const Search = () => {

  const {register, handleSubmit} = useForm();

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage]=useState(1);
  const [cardsPerPage]=useState(5);

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

  // I want to use the form to gather the user input - take user input and store it into the object that useForm creates - onSubmit change the query parameters for the filter to search for the given results.
//get current posts
const indexOfLastCard = currentPage * cardsPerPage;
const indexOfFirstCard = indexOfLastCard - cardsPerPage;
const currentCards = employees.slice(indexOfFirstCard, indexOfLastCard)

const paginate = (pageNumber) =>setCurrentPage(pageNumber);
  return (
    <div>
    <form onSubmit={handleSubmit()}className="searchbar">
      <input type="text" {...register('query')}/>
      
      <button className="searchButton"type="submit">Submit</button>
    </form>
 
           <Employee employees ={currentCards} loading={loading} />
           <Pagination cardsPerPage={cardsPerPage} totalCards={employees.length} paginate={paginate}/>
    
    </div>
    )
}


export default Search;

