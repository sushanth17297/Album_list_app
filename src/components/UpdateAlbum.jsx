import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const UpdateAlbum = (props) => {
  const getUpdateData = () => {
    const id = props.album.id;
    let updateTitle = document.getElementById("title-inp").value;
    let updateUserid = document.getElementById("userid-inp").value;

    // If the updateTitle input is empty, use the current album's title
    if (updateTitle === "") {
      updateTitle = props.album.title;
    }

    // If the updateUserid input is empty, use the current album's userId
    if (updateUserid === "") {
      updateUserid = props.album.userId;
    }

    // Call the updateAlbumInList function with the updated data
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar path="/" page="Home" />

      <div className="bg-gray-900 font-P3oppins h-screen items-center flex justify-center">
        <div className="p-4 bg-gray-400 rounded-xl flex-wrap space-y-4 w-128 h-72">
          {/* Display the current album's title */}
          <h4>Title: {props.album.title}</h4>
          <div className="mr-10 bg-white rounded-lg ">
            <input
              className="m-2 pl-2 pr-4 bg-transparent outline-none w-full max-w-md"
              type="text"
              id="title-inp"
              placeholder="Enter New Title"
            />
          </div>

          {/* Display the current album's userId */}
          <h4>User Id: {props.album.userId}</h4>
          <div className="mr-10 bg-white rounded-lg">
            <input
              className="m-2 pl-2 pr-4 bg-transparent outline-none w-full max-w-md"
              type="number"
              id="userid-inp"
              placeholder="Enter New UserId"
            />
          </div>

          {/* Use the Link component to navigate back to the home page ("/") when the "Save" button is clicked. */}
          <div className="flex justify-center">
            <Link to="/">
              <button
                className="bg-sky-900 p-2 px-4 border-black text-white  hover:bg-white hover:text-sky-900 mt-2 hover:border-2 rounded-lg"
                type="submit"
                onClick={getUpdateData}
              >
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateAlbum;
