import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const AddAlbum = (props) => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");

  // This function gets the user input (userId and title) and calls the addAlbumToList function to add the album to the list
  const getAlbumFormData = async () => {
    try {
      await props.addAlbumToList(Number(userId), title);
      setUserId("");
      setTitle("");
      alert("New Album added successfully to the bottom");
    } catch (error) {
      console.error("Error adding album:", error);
      alert("Error adding album. Please try again later.");
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar path="/" page="Home" />

      <div className="bg-gray-900 font-P3oppins h-screen items-center flex justify-center">
        <div className="p-4 bg-gray-400 rounded-xl flex-wrap space-y-5 w-128 h-64">
          <div className="flex justify-center font-bold">
            <h4>Enter New Album Details</h4>
          </div>
          <div className="mr-10 bg-white rounded-lg">
            <input
              id="aaform-userid-inp"
              className="m-2 pl-2 pr-4 bg-transparent outline-none w-full max-w-md"
              type="number"
              value={userId}
              placeholder="Enter User Id"
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="mr-10 bg-white rounded-lg">
            <input
              id="aaform-title-inp"
              className="m-2 pl-2 pr-4 bg-transparent outline-none w-full max-w-md"
              type="text"
              value={title}
              placeholder="Enter Album Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            {/* Use the Link component to navigate back to the home page ("/") when the "Add To List" button is clicked. */}
            <Link to="/">
              <button
                className="bg-indigo-600 p-2 px-4 text-white"
                onClick={getAlbumFormData}
              >
                Add To List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAlbum;
