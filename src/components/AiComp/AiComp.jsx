import React from "react";
import "./aiComp.scss";
import AiGreenImg from "../../assets/agri-tech/ai-green-img.png";
import AiConnectText from "../../assets/agri-tech/connect-text.png";
import AiImagineText from "../../assets/agri-tech/imaging-walking.png";
import AiAFTCText from "../../assets/agri-tech/aftc-driven.png";
import AiItConnectText from "../../assets/agri-tech/it-connect.png";
import AiText from "../../assets/agri-tech/ai.png";
import LineBar from "../../assets/agri-tech/ai-below-line.png";
import FrameImg1 from "../../assets/agri-tech/ai-img1.png";
import FrameImg2 from "../../assets/agri-tech/ai-img2.png";
import FrameImg3 from "../../assets/agri-tech/ai-img3.png";
import AiLine1 from "../../assets/agri-tech/ai-line1.png";
import AiLine2 from "../../assets/agri-tech/ai-line2.png";
import AiLine3 from "../../assets/agri-tech/ai-line3.png";
import AiPhone from "../../assets/agri-tech/ai-phone.png";
import ScheduleText from "../../assets/agri-tech/schedule-text.png";

const AiComp = ({ pageProgress, progress }) => {
  const progress0 = progress[0];
  const progress1 = progress[1];
  const progress2 = progress[2];
  const progress3 = progress[3];
  const progress4 = progress[4];
  const progress5 = progress[5];
  return (
    <div className="aicomp-main">
      <div className="aicomp-div">
        <img
          src={AiText}
          alt=""
          className="ai-text"
          style={{
            opacity: pageProgress >= progress0 && "1",
            transform:
              pageProgress >= progress3 &&
              "translate(-300%,-50%) rotate(-20deg)",
            transition: pageProgress >= progress3 && "1.8s ease-in-out",
            marginTop: pageProgress >= progress2 && "-1vw",
          }}
        />

        {/* <div
          className="small-green-shape"
          style={{
            opacity: pageProgress >= progress0 && "1",
          }}
        >
          <img src={AiGreenImg} alt="" className="small-shape1" />
          <img src={AiGreenImg} alt="" className="small-shape2" />
          <img src={AiGreenImg} alt="" className="small-shape3" />
        </div> */}

        <div
          className="ai-content-wrapper"
          style={{
            transform:
              pageProgress >= progress3 && "translateX(-100%) rotate(-15deg)",
            marginTop: pageProgress >= progress2 && "-1vw",
          }}
        >
          <img
            src={AiGreenImg}
            alt=""
            className="ai-green"
            style={{
              top: pageProgress >= progress0 && "50%",
              transform:
                pageProgress >= progress0 && pageProgress < progress1
                  ? "translate(-50%, -50%) rotate(-45deg)"
                  : pageProgress >= progress1 && pageProgress < progress2
                  ? "translate(-50%, -40%) rotate(-45deg)"
                  : pageProgress >= progress2 &&
                    "translate(-260%, -100%) scale(0.12)",
            }}
          />
          <img
            src={AiGreenImg}
            alt=""
            className="ai-green2"
            style={{
              left: pageProgress >= progress2 && "50%",
              transform:
                pageProgress >= progress2 &&
                "translate(-50%, -40%)  skewY(0) scale(1.1) rotate(0)",
            }}
          />
          <img
            src={AiConnectText}
            alt=""
            className="connect-text"
            style={{
              top:
                pageProgress >= progress0 && pageProgress < progress1
                  ? "50%"
                  : pageProgress >= progress1 && "52%",
            }}
          />
          <h2
            className="ai-based"
            style={{
              opacity: pageProgress >= progress0 && "1",
            }}
          >
            Based
          </h2>
          {/* --------------------------------------- */}
          <div
            className="ai-text-wrapper"
            style={{
              transform: pageProgress >= progress0 && "translateY(0%) ",
            }}
          >
            <h2 className="ai-htwo">Matchmaking</h2>
            <img src={LineBar} alt="" className="line-bar" />
            <img
              src={AiImagineText}
              alt=""
              className="imagine-text"
              style={{
                opacity: pageProgress >= progress1 && "0",
                transform:
                  pageProgress >= progress1 && "translateY(-90%) scale(0.4)",
              }}
            />
            <img
              src={AiAFTCText}
              alt=""
              className="aftc-text"
              style={{
                opacity:
                  pageProgress >= progress1 && pageProgress < progress2
                    ? "1"
                    : pageProgress >= progress2 && "0",
              }}
            />
            <img
              src={AiItConnectText}
              alt=""
              className="itconnect-text"
              style={{
                opacity: pageProgress >= progress2 && "1",
                transform: pageProgress >= progress2 && "translateY(0%)",
              }}
            />
          </div>
        </div>

        <div className="ai-frame-wrapper">
          <div className="ai-phone-mockup">
            <img
              src={AiPhone}
              alt=""
              className="ai-phone"
              style={{
                opacity: pageProgress >= progress3 && "1",
                transition: pageProgress >= progress4 && "2s ease-in-out",
                transform: pageProgress >= progress4 && "translate(-50%,-200%)",
              }}
            />
            <img
              src={ScheduleText}
              alt=""
              className="schedule-text"
              style={{
                opacity:
                  pageProgress >= progress3 && pageProgress < progress4
                    ? "1"
                    : pageProgress >= progress4 && "0",
              }}
            />

            <img
              src={LineBar}
              alt=""
              className="line-bar2"
              style={{
                opacity:
                  pageProgress >= progress3 && pageProgress < progress4
                    ? "1"
                    : pageProgress >= progress4 && " 0",
              }}
            />
          </div>

          <div
            className="ai-line-bars"
            style={{
              opacity:
                pageProgress >= progress2 && pageProgress < progress3
                  ? "1"
                  : pageProgress >= progress3 && "0",
            }}
          >
            <img src={AiLine1} alt="" className="ai-line1" />
            <img src={AiLine2} alt="" className="ai-line2" />
            <img src={AiLine3} alt="" className="ai-line3" />
          </div>

          <div
            className="frame-images"
            style={{
              transform:
                pageProgress >= progress2 && "translateY(0%) skew(0,0)",
            }}
          >
            <img
              src={FrameImg3}
              alt=""
              className="frame-img1"
              style={{
                transform:
                  pageProgress >= progress3 && pageProgress < progress4
                    ? "translate(17vw,14vw) rotate(-15deg)"
                    : pageProgress >= progress4 &&
                      "translate(-35vw,14vw) rotate(-15deg)",
              }}
            />
            <img
              src={FrameImg2}
              alt=""
              className="frame-img2"
              style={{
                opacity: pageProgress >= progress3 && "0",
              }}
            />
            <img
              src={FrameImg1}
              alt=""
              className="frame-img3"
              style={{
                opacity: pageProgress >= progress3 && "0",
              }}
            />
          </div>

          <div
            className="match-data"
            style={{
              transform:
                pageProgress >= progress2 && "translate(0%)",
            }}
          >
            <div
              className="md-top"
              style={{
                transform:
                  pageProgress >= progress3 && pageProgress < progress4 ?
                  "translate(17vw,17vw) rotate(-10deg)" :  pageProgress >= progress4 && "translate(-30vw,10vw)",
              }}
            >
              <img src={AiGreenImg} alt="" />
              <p>50%</p>
              <br />
              <span>match</span>
            </div>
            <div
              className="md-center"
              style={{
                opacity: pageProgress >= progress3 && "0",
              }}
            >
              <img src={AiGreenImg} alt="" />
              <p>36%</p>
              <br />
              <span>match</span>
            </div>

            <div
              className="md-bottom"
              style={{
                opacity: pageProgress >= progress3 && "0",
              }}
            >
              <img src={AiGreenImg} alt="" />
              <p>16%</p>
              <br />
              <span>match</span>
            </div>
          </div>
          <img
            src={FrameImg1}
            alt=""
            className="frame-img-extra"
            style={{
              opacity: pageProgress >= progress2 && "1",
              transform:
                pageProgress >= progress2 && pageProgress < progress3
                  ? "rotate(-20deg)"
                  : pageProgress >= progress3 && pageProgress < progress4
                  ? "translate(-18vw,3vw) rotate(20deg)"
                  : pageProgress >= progress4 && "translate(30vw,3vw)",
            }}
          />

          <div className="last-green-shape">
            <img
              src={AiGreenImg}
              alt=""
              className="left-green-shape"
              style={{
                opacity: pageProgress >= progress4 && "0",
                transform:
                  pageProgress >= progress3 &&
                  "translate(0%,0%) rotate(45deg) scale(1)",
              }}
            />
            <img
              src={AiGreenImg}
              alt=""
              className="right-green-shape"
              style={{
                opacity: pageProgress >= progress4 && "0",
                transform:
                  pageProgress >= progress3 &&
                  "translate(0%,0%) rotate(90deg) scale(1)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiComp;
