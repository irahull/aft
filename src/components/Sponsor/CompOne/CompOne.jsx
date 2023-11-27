import React, { useEffect, useState, useRef } from "react";
import "./compOne.scss";
import S1Upper from "../../../assets/agri-tech/s1-upper.png";
import S1Center from "../../../assets/agri-tech/center.png";
import S1Lower from "../../../assets/agri-tech/s1-lower.png";
import MainLogo from "../../../assets/agri-tech/main-logo.png";
import PresentOne from "../../../assets/agri-tech/present1.png";
import PresenTwo from "../../../assets/agri-tech/present2.png";
import PresentThree from "../../../assets/agri-tech/present3.png";
import S2Cross from "../../../assets/agri-tech/cross-mark.png";
import PhoneMockUp from "../../../assets/agri-tech/phone-mockup.png";
import S2LeafRIght from "../../../assets/agri-tech/right-leaf.png";
import S2LeafLeft from "../../../assets/agri-tech/left-leaf.png";
import S2Rectangle from "../../../assets/agri-tech/bottom-square-box.png";
import S2LogoText from "../../../assets/agri-tech/s2-logo-text.png";
import S2RightVeg from "../../../assets/agri-tech/s2-right-veg.png";
import S2LeftVeg from "../../../assets/agri-tech/s2-left-veg.png";
import S2Icecream from "../../../assets/agri-tech/s2-icecream.png";
import S2Phone from "../../../assets/agri-tech/s2-phone.png";
import S2Left from "../../../assets/agri-tech/s2-left.png";
import S2Right from "../../../assets/agri-tech/s2-right.png";

const CompOne = ({ PageProgress, Progress }) => {
  const [firstAnim, setfirstAnim] = useState(false);
  const [states, setStates] = useState([true, false, false]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leaf, setLeaf] = useState(false);

  const progress0 = Progress[5];
  const progress1 = Progress[6];
  const progress2 = Progress[7];
  const progress3 = Progress[8];
  const progress4 = Progress[9];

  useEffect(() => {
    if (PageProgress > progress0) {
      setTimeout(() => {
        setLeaf(true);
      }, 2000);
    }
  }, [PageProgress]);

  useEffect(() => {
    if (PageProgress < progress2) {
      const intervalId = setInterval(() => {
        const nextIndex = (currentIndex + 1) % states.length;

        const updatedStates = states.map((state, index) => index === nextIndex);

        setStates(updatedStates);
        setCurrentIndex(nextIndex);
      }, 2000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [states, currentIndex]);

  useEffect(() => {
    // if (PageProgress > progress0) {
      setTimeout(() => {
        setfirstAnim(true);
      }, 1500);
    // }else{
    //   setfirstAnim(false)
    // }
  }, [PageProgress]);

  return (
    <div className="compOne-main">
      <div
        className="compOne-s1-wrapper"
        id="compOne"
        style={{
          transform:
            PageProgress >= progress2 &&
            "translate(-150%, -50%) rotate(-90deg)",
        }}
      >
        <div
          className="compOne-slide-one"
          style={{
            opacity: firstAnim && "1",
          }}
        >
          <img
            src={S1Lower}
            alt=""
            className="s1-lower-extra"
            style={{
              opacity: firstAnim && "0",
            }}
          />
          {/* ------------------------------------ S1 first Section --------------------------- */}

          <div
            className="s1-first-section"
            style={{
              transform: firstAnim && "translateY(-42vh)",
            }}
          >
            <img src={S1Upper} alt="" className="s1-upper" />
            <img
              src={MainLogo}
              alt=""
              className="main-logo"
              style={{
                left: PageProgress >= progress1 && "15%",
              }}
            />
            <img
              src={S1Center}
              alt=""
              className="logo-below-image"
              style={{
                left: PageProgress >= progress1 && "21%",
                transform: PageProgress >= progress1 && "rotate(365deg)",
              }}
            />
            <img
              src={S1Lower}
              alt=""
              className="s1-lower"
              style={{
                transform: firstAnim && "translateY(-45vh) rotate(-90deg)",
              }}
            />
          </div>

          {/* ------------------------------------ S1 Second Section --------------------------- */}

          <div
            className="s1-second-section"
            style={{
              top: firstAnim && "0%",
            }}
          >
            <div
              className="image-wrapper"
              style={{
                transform:
                  PageProgress >= progress1 && "translateX(-18%) scale(1.15)",
              }}
            >
              <img
                src={PresentOne}
                alt=""
                className="txt1"
                style={{
                  opacity: states[0] === true ? "1" : "0",
                }}
              />
              <img
                src={PresenTwo}
                alt=""
                className="txt1"
                style={{
                  opacity: states[1] === true ? "1" : "0",
                }}
              />
              <img
                src={PresentThree}
                alt=""
                className="txt1"
                style={{
                  opacity: states[2] === true ? "1" : "0",
                }}
              />
            </div>
            <img
              src={S2Cross}
              alt=""
              className="cross-image"
              style={{
                left: PageProgress >= progress1 && "-7%",
                bottom: PageProgress >= progress1 && "-13%",
              }}
            />
            <div
              className="mockup-wrapper"
              style={{
                bottom: PageProgress >= progress1 && "0%",
              }}
            >
              <img src={PhoneMockUp} alt="" className="phone-mockup" />
              <img
                src={S2LeafLeft}
                alt=""
                className="left-leaf"
                style={{
                  bottom: leaf && "7vh",
                  right: leaf && "32%",
                }}
              />
              <img
                src={S2LeafRIght}
                alt=""
                className="right-leaf"
                style={{
                  bottom: leaf && "9vh",
                  right: leaf && "12%",
                }}
              />
              {/* <img
                src={S2Rectangle}
                alt=""
                className="s1-rect"
                style={{
                  opacity:
                    PageProgress >= progress0 && PageProgress < progress2
                      ? "1"
                      : "0",
                }}
              /> */}
            </div>
            <img
              src={S2Rectangle}
              alt=""
              className="s1-rect"
              style={{
                opacity:
                  PageProgress >= progress1 && PageProgress < progress3
                    ? "1"
                    : "0",

                transition: PageProgress < progress1 && "0.2s ease-in-out 0.1s",
              }}
            />
          </div>
        </div>
      </div>

      {/* ------------------------------- Slide Two ---------------------------------------- */}

      <div className="compOne-s2-wrapper">
        <div className="s2-first-section">
          <img
            src={S2Rectangle}
            alt=""
            className="s2-rect"
            style={{
              left: PageProgress >= progress2 && "-10%",
              opacity:
                PageProgress >= progress1 && PageProgress < progress3
                  ? "1"
                  : "0 ",
            }}
          />
          <div
            className="s2-img-wrapper"
            style={{
              transform:
                PageProgress >= progress3 && PageProgress < progress4
                  ? "translateY(-35%)"
                  : PageProgress >= progress4 && "translateY(-100%)",
            }}
          >
            <img
              src={S2LogoText}
              alt=""
              className="s2-center-text"
              style={{
                left: PageProgress >= progress2 && "50%",
              }}
            />
            <img
              src={S2Icecream}
              alt=""
              className="s2-icecream"
              style={{
                marginLeft: PageProgress >= progress2 && "41vw",
              }}
            />
          </div>

          <img
            src={S2LeftVeg}
            alt=""
            className="s2-left-veg"
            style={{
              bottom:
                PageProgress >= progress2 && PageProgress < progress3
                  ? "-10vh"
                  : PageProgress >= progress4 && "100vh",
            }}
          />
          <img
            src={S2RightVeg}
            alt=""
            className="s2-right-veg"
            style={{
              bottom:
                PageProgress >= progress2 && PageProgress < progress3
                  ? "-15vh"
                  : PageProgress >= progress3 && PageProgress < progress4
                  ? "75vh"
                  : PageProgress >= progress4 && "100vh",
            }}
          />
          <div
            className="s2-sponsor-mock"
            style={{
              bottom:
                PageProgress >= progress3 && PageProgress < progress4
                  ? "0%"
                  : "-80%",
            }}
          >
            <img src={S2Phone} alt="" className="s2-mockupp" />
          </div>
          <img
            src={S2Left}
            alt=""
            className="s2-left"
            style={{
              left:
                PageProgress >= progress3 && PageProgress < progress4
                  ? "0%"
                  : "-15%",
            }}
          />
          <img
            src={S2Right}
            alt=""
            className="s2-right"
            style={{
              right:
                PageProgress >= progress3 && PageProgress < progress4
                  ? "0%"
                  : "-15%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CompOne;
