import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  return (
    <div className="min-w-310 h-200 bg-gray-400 mb-5 text-black font-medium p-2 flex flex-col justify-between rounded-tl-xl rounded-br-xl rounded hover:rounded-xl">
      {/* Display the title of the album */}
      <h3 className="m-1 p-1 text-center">{props.album.title}</h3>
      <div className="w-full flex justify-between rounded-sm">
        {/* Use the Link component from react-router-dom to navigate to the "/update-album" route 
            when the "Update" button is clicked. */}
        <Link to="/update-album">
          <button
            className="bg-black text-white border-0 p-2 px-4 font-semibold cursor-pointer hover:bg-white hover:text-black rounded-lg"
            onClick={() => props.setUpdateAlbum(props.album)}
          >
            Update
          </button>
        </Link>
        <h3 className="p-1">ID : {props.album.id}</h3>
        {/* Call the deleteAlbumFromList function when the "Delete" button is clicked. */}
        <button
          className="cursor-pointer border-0 p-2 px-4 bg-red-500 text-white font-semibold hover:text-red-500 hover:bg-white rounded-lg"
          onClick={() => props.deleteAlbumFromList(props.album.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;

