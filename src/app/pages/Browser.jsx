import React from "react";
import { Viewer } from "../components/Viewer/Viewer";
import { PlayList } from "../components/PlayList/PlayList";
import { LateralMenu } from "../components/LateralMenu/LateralMenu";
import { Search } from "../components/Search/Search";

const Browser = (props) => {
  const { component } = props;
  
  function router() {
    switch(component) {
      case "viewer":
        return <Viewer/>
      case "search":
        return <Search/>;
      case "playlist":
        return <PlayList/>;
      default:
        return null
    }
  }

  return (
    <main className="mainContainer">
      <LateralMenu/>
      { router() }
    </main>
  );
};

export default Browser;
