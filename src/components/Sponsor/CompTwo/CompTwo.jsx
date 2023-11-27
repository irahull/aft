import React, { useEffect, useState } from "react";
import "./compTwo.scss";
import CircularElm from "../../../assets/agri-tech/circular-elm.png";
import CompTwoText from "../../../assets/agri-tech/comptwo-text.png";
import CompTwoArrow from "../../../assets/agri-tech/sponsor-arrow.png";
import HdCircularElm from "../../../assets/agri-tech/hd-circular-elm.png";

const CompTwo = ({ PageProgress, Progress }) => {
  const [valFiveAnim, setValFiveAnim] = useState(false);

  const progress3 = Progress[9];
  const progress4 = Progress[10];

  useEffect(() => {
    setTimeout(() => {
      if (PageProgress >= progress3) {
        setValFiveAnim(true);
      } else {
        setValFiveAnim(false);
      }
    }, 2600);
  }, [PageProgress]);

  return (
    <section
      className="comptwo-section"
      style={{
        transform:
          PageProgress >= progress3 && PageProgress < progress4
            ? "translate(0%, 0%)"
            : PageProgress >= progress4 && "translate(110%, 15%) rotate(30deg)",
      }}
    >
      <div className="comptwo-container">
        <div className="comptwo-s1">
          <div
            className="comptwo-s1-left"
            style={{
              width: valFiveAnim && "45%",
            }}
          >
            <img src={CircularElm} alt="" className="circular-elm" />
            <img
              src={CompTwoText}
              alt=""
              className="comptwo-text"
              style={{
                transform: valFiveAnim && "translate(-50%, -50%) scale(3)",
              }}
            />
            <img
              src={HdCircularElm}
              alt=""
              className="hd-circular"
              style={{
                opacity: valFiveAnim && "1",
                transform: valFiveAnim && "translateX(-300%) rotate(360deg)",
              }}
            />
            <img
              src={CircularElm}
              alt=""
              className="circular-elm-big"
              style={{
                transform: valFiveAnim && "translate(-40vw,-15vh)",
              }}
            />
          </div>
          <div
            className="comptwo-s1-right"
            style={{
              width: valFiveAnim && "60%",
            }}
          >
            <div className="arrow-left">
              <img
                src={CompTwoArrow}
                alt=""
                className="sponsor-arrow"
                style={{
                  width: valFiveAnim && "25%",
                  transform:
                    valFiveAnim && "translate(-50%,-26vh) rotate(42deg)",
                }}
              />
              <img
                src={CompTwoArrow}
                alt=""
                className="sponsor-arrow"
                style={{
                  width: valFiveAnim && "25%",
                  transform:
                    valFiveAnim && "translate(-50%,-1vh) rotate(42deg)",
                }}
              />
              <img
                src={CompTwoArrow}
                alt=""
                className="sponsor-arrow"
                style={{
                  width: valFiveAnim && "25%",
                  transform:
                    valFiveAnim && "translate(-50%,24vh) rotate(42deg)",
                }}
              />
            </div>
            <div
              className="text-right"
              style={{
                transform: valFiveAnim && "translatex(0%)",
              }}
            >
              <p className="comptwo-p1">SPONSOR 1</p>
              <p className="comptwo-p2">SPONSOR 1</p>
              <p className="comptwo-p3">SPONSOR 1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompTwo;
