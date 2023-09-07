import React from "react";
import { PlayList } from "../../components/PlayList/PlayList";
import { LateralMenu } from "../../components/LateralMenu/LateralMenu";
const Browser = () => {

  return (
    <main className="mainContainer">
      <LateralMenu/>
      <PlayList/>
    </main>
  );
};

export default Browser;
