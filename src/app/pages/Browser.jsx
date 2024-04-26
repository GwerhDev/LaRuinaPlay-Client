import React from "react";
import { Viewer } from "../components/Viewer/Viewer";
import { Album } from "../components/Album/Album";
import { Search } from "../components/Search/Search";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContent } from "../../middlewares/redux/actions/content";
import { PlayList } from "../components/PlayList/PlayList";
import { Navigator } from "../components/Navigator/Navigator";
import { MyLibrary } from "../components/MyLibrary/MyLibrary";

const Browser = (props) => {
  const dispatch = useDispatch();
  const { component } = props;

  function router() {
    switch (component) {
      case "viewer":
        return <Viewer />;
      case "search":
        return <Search />;
      case "my-library":
        return <MyLibrary />;
      case "album":
        return <Album />;
      case "playlist":
        return <PlayList />;
      default:
        return null
    }
  }

  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  return (
    <main className="main-container">
      <section className="section-container">
        <div className="primary-container">
          <Navigator />
          {
            router()
          }
        </div>
      </section>
    </main>
  );
};

export default Browser;
