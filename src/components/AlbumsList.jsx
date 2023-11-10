import React from "react";
import List from "./List";
import Navbar from "./Navbar";

const AlbumsList = (props) => {
  return (
    <>
      <Navbar page="Add Album" path="/add-album" />
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 overflow-hidden overscroll-none">
        {props.albums.map((album) => (
          <List
            album={album}
            key={album.id}
            setUpdateAlbum={props.setUpdateAlbum}
            deleteAlbumFromList={props.deleteAlbumFromList}
          />
        ))}
      </div>
    </>
  );
};

export default AlbumsList;
