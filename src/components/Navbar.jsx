import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = (props) => {
  return (
    <div className="w-full p-5 bg-black flex justify-between fixed">
      <h2 className="bg-gray-400  w-fit p-2" onClick={() => props.handleClick(false)}>
        <span className="mr-2 text-3xl font-bold">ALBUMS</span>
        <FontAwesomeIcon icon="fa-solid fa-compact-disc" />
        <span className="bg-black text-gray-400 text-3xl font-bold">LIST</span>
      </h2>
      <Link to={props.path}>
        <button className="border-2 border-gray-400 text-gray-400 px-5 py-2 cursor-pointer transition duration-300 ease-in-out font-medium hover:bg-gray-400 hover:text-black">{props.page}</button>
      </Link>
    </div>
  );
};

export default Navbar;
