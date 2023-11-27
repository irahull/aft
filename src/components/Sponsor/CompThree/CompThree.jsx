import React, { useEffect, useState } from "react";
import "./compthree.scss";
import CompThreeText from "../../../assets/agri-tech/parternship.png";
import CompThreeCross from "../../../assets/agri-tech/comptwo-cross.png";
import ShakingHand from "../../../assets/agri-tech/shaking-hand.png";
import CircularCard from "./CircularCard/CircularCard";

const CompThree = ({ PageProgress, Progress }) => {
  const [valSeven, setValSeven] = useState(false);

  const progress4 = Progress[10];
  const progress5 = Progress[11];
  const progress6 = Progress[12];

  useEffect(() => {
    if (PageProgress >= progress6) {
      setTimeout(() => {
        setValSeven(true);
      }, 1000);
    } else {
      setValSeven(false);
    }
  }, [PageProgress]);

  return (
    <div
      className="sponsor-compthree"
      style={{
        transform: PageProgress >= progress4 && "translate(0,0)",
      }}
    >
      <div className="compthree-div">
        <div className="compthree-s1">
          <div
            className="compthree-image-wrapper"
            style={{
              transform:
                PageProgress >= progress5 && PageProgress < progress6
                  ? "translateY(-25vh)"
                  : PageProgress >= progress6 && "translateY(-36vh)",
            }}
          >
            <img src={CompThreeCross} alt="" className="cross-upper" />
            <img src={CompThreeText} alt="" className="compthree-text" />
            <img
              src={CompThreeCross}
              alt=""
              className="cross-lower"
              style={{
                transform:
                  PageProgress >= progress5 &&
                  "translateY(-125%) rotate(180deg)",
              }}
            />
          </div>
          <div
            className="shankinghand-bg"
            style={{
              transform: PageProgress >= progress6 && "translateY(-10vh)",
            }}
          >
            <img
              src={ShakingHand}
              alt=""
              className="c3-shakinghand"
              style={{
                opacity: PageProgress >= progress5 ? "1" : "0",
              }}
            />
          </div>
        </div>
        <CircularCard valSeven={valSeven} />
      </div>
    </div>
  );
};

export default CompThree;
