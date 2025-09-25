import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SweetCard from "../component/SweetCard";
import axios from "axios";
import Header from "../component/Header";


const Home = () => {
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredSweets,setFilteredSweets] = useState([]);
 
  const navigate = useNavigate();


   const [user, setUser] = useState("");


   
  useEffect(() => {
    const fetchSweets = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_BACKENDURL}/api/sweets`,
          { withCredentials: true } // include cookies if needed
        );
        setFilteredSweets(res.data);
      } catch (err) {
        console.log(err);
      } 
    };

    fetchSweets();
  }, []);

  useEffect(() => {
  const fetchFilteredSweets = async () => {
    try {
     if(searchName || searchCategory || minPrice || maxPrice){
        const res = await axios.post(
        `${import.meta.env.VITE_APP_BACKENDURL}/api/sweets/search`,
        {
          name: searchName || undefined,
          category: searchCategory || undefined,
          pricemin: minPrice || undefined,
          pricemax: maxPrice || undefined,
        },
        { withCredentials: true }
      );
     
       setFilteredSweets(res.data);
     }
     
    } catch (error) {
      console.error("Error fetching sweets:", error);
    }
  };

  fetchFilteredSweets();
}, [searchName, searchCategory, minPrice, maxPrice]);



  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_BACKENDURL}/api/auth/getUserData`,
          { withCredentials: true }
        );
        if (res) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setUser(null);
      }
    };

    fetchUserData();
  }, []);



  return (
    <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-purple-100 flex flex-col overflow-auto">
      {/* Navbar */}
      <Header user={user} />
      {/* Search Section */}
      <div className="w-full flex justify-center items-center flex-col mt-6 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full  flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Sweet Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="w-auto md:w-[30%] flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <input
            type="text"
            placeholder="Category"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="w-auto md:w-[30%] flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <input
            type="text"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-auto md:w-[20%] px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none
             appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance]:textfield"
          />
          <input
            type="text"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-auto md:w-[20%] px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none
             appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance]:textfield"
          />
          <button
            onClick={() => {}}
            className=" cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl font-semibold transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      {/* Sweet Cards */}
      <SweetCard filteredSweets={filteredSweets} user={user}/>
    </div>
  );
};

export default Home;
