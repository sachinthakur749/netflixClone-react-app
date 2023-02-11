import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";
import Movie from "./Movie";

const Row = ({ title, fetchURL,rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4 ">{title}</h2>
      <div className="relative group  flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
        />
        <div
          id={"slider" + rowID}
          className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-none relative  "
        >
          {movies.map((items, id) => (
            <Movie key={id} items={items} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
        />
      </div>
    </div>
  );
};

export default Row;
