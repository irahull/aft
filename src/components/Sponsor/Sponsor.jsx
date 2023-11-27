import React, { useState } from "react";
import "./sponsor.scss";

import CompOne from "./CompOne/CompOne";
import CompTwo from "./CompTwo/CompTwo";
import CompThree from "./CompThree/CompThree";

const Sponsor = ({ PageProgress, Progress }) => {
  return (
    <section className="sponser-section">
      <CompOne PageProgress={PageProgress} Progress={Progress} />
      <CompTwo PageProgress={PageProgress} Progress={Progress} />
      <CompThree PageProgress={PageProgress} Progress={Progress} />
    </section>
  );
};

export default Sponsor;
