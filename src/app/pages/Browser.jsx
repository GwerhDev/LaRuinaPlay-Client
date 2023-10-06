import React from "react";
import { Viewer } from "../components/Viewer/Viewer";
import { Library } from "../components/Library/Library";
import { MenuLateral } from "../components/MenuLateral/MenuLateral";
import { Search } from "../components/Search/Search";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContent } from "../../middlewares/redux/actions/content";
import { PlayList } from "../components/PlayList/PlayList";

const Browser = (props) => {
  const dispatch = useDispatch();
  const { component } = props;

  function router() {
    switch(component) {
      case "viewer":
        return <Viewer/>;
      case "search":
        return <Search/>;
      case "library":
        return <Library/>;
      case "playlist":
        return <PlayList/>;
      default:
        return null
    }
  }

  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  return (
    <main className="mainContainer">
      <MenuLateral/>
      { router() }
    </main>
  );
};

export default Browser;
