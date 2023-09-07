import React from "react";
import { Viewer } from "../components/Viewer/Viewer";
import { PlayList } from "../components/PlayList/PlayList";
import { LateralMenu } from "../components/LateralMenu/LateralMenu";
import { Search } from "../components/Search/Search";

const Browser = (props) => {
  const { component } = props;
  return (
    <main className="mainContainer">
      <LateralMenu/>
      {
        component === "viewer" ? <Viewer/> :
        component === "search" ? <Search/> :
        component === "playlist" ? <PlayList/> : null
      }
    </main>
  );
};

export default Browser;
