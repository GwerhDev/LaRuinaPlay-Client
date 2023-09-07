import React from "react";
import { LateralMenu } from "../components/LateralMenu/LateralMenu";
import { Viewer } from "../components/Viewer/Viewer";
const Browser = () => {

  return (
    <main className="mainContainer">
      <LateralMenu/>
      <Viewer/>
    </main>
  );
};

export default Browser;
