import React, { useState, useEffect } from "react";
import "./OptimizeTime.scss";
import BgImg from "../../assets/OptimizeImgs/backgroundImageOptimize.png";
import With from "../../assets/OptimizeImgs/Group1016.png";
import EllipseGreen from "../../assets/OptimizeImgs/EllipseGreen.png";
import OptimizeTime from "../../assets/OptimizeImgs/OptimizeYourTime.png";
import Vector1 from "../../assets/OptimizeImgs/Vector1513.png";
import Vector2 from "../../assets/OptimizeImgs/Vector1514.png";
import Vector3 from "../../assets/OptimizeImgs/Vector1515.png";
import LeftPhoto from "../../assets/OptimizeImgs/PhotoLeft.png";
import MiddlePhoto from "../../assets/OptimizeImgs/PhotoMiddle.png";
import RightPhoto from "../../assets/OptimizeImgs/PhotoRight.png";
import backgroundPeopleImg from "../../assets/OptimizeImgs/bgPeopleImg.png";
import CompressImg from "../../assets/OptimizeImgs/compressImg.png";
import TriangleLogo from "../../assets/OptimizeImgs/triangleLogo.png";
import IPhone14Pro from "../../assets/OptimizeImgs/iPhone14Pro.png";
import BenefitTxt from "../../assets/OptimizeImgs/BenefitTxt.png";
import GreenRectangle from "../../assets/OptimizeImgs/GreenRectangle.png";
import OfficeBg from "../../assets/OptimizeImgs/officeBg.png";
import LaptopImg from "../../assets/OptimizeImgs/LaptopImage.png";
import NavigateText from "../../assets/OptimizeImgs/NavigateTxt.png";
import LapImg1 from "../../assets/OptimizeImgs/Group1065.png";
import LapImg2 from "../../assets/OptimizeImgs/Group1066.png";
import LapImg3 from "../../assets/OptimizeImgs/Group1067.png";
import LapImg4 from "../../assets/OptimizeImgs/Group1069.png";
import GreenDashed1 from "../../assets/OptimizeImgs/GreenDashed1.png";
import GreenDashed2 from "../../assets/OptimizeImgs/GreenDashed2.png";
import GreenDashed3 from "../../assets/OptimizeImgs/GreenDashed3.png";
import smallGreenBlock from "../../assets/OptimizeImgs/Vector1519.png";

const UpperArea = ({ PageProgress, Progress }) => {
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (PageProgress >= progress2) {
      setTimeout(() => {
        setFlag2(true);
      }, 2500);
    } else {
      setFlag2(false);
    }

    if (PageProgress >= progress3) {
      setTimeout(() => {
        setFlag3(true);
      }, 2200);
    } else {
      setFlag3(false);
    }
  }, [PageProgress]);
  const progress0 = Progress[13];
  const progress1 = Progress[14];
  const progress2 = Progress[15];
  const progress3 = Progress[16];
  const progress4 = Progress[17];

  return (
    <div
      className="main-container-optimize"
      style={{ opacity: PageProgress >= progress4 && 0 }}
    >
      <div className="optimize-block-outer-layer-container">
        <img
          src={BgImg}
          alt="Background Image"
          className="bg-img-optimize"
          style={{
            opacity:
              flag && PageProgress < progress2
                ? 1
                : PageProgress >= progress2 && "0",
            transition: PageProgress >= progress2 && "1.5s ease-in-out 0.5s",
          }}
        />

        <div
          className="optimize-block"
          style={{
            top: PageProgress >= progress1 && "25%",
          }}
        >
          <div className="small-green-block-container">
            <img
              src={smallGreenBlock}
              alt="small green"
              className="small-green-blocks"
              style={{
                opacity:
                  PageProgress >= progress1 && PageProgress < progress2 && 1,
                marginTop: PageProgress >= progress1 && "12.25vw",
                transform:
                  PageProgress >= progress2 && "translate(-500vw,-30vh)",
              }}
            />
          </div>
          <img
            src={With}
            alt="with text"
            className="with-txt"
            style={{
              opacity: flag && 1,
              top: flag && PageProgress >= progress1 && "62.5%",
              left: flag && PageProgress >= progress1 && "48%",
              transform:
                PageProgress >= progress1 && PageProgress < progress2
                  ? "rotate(-60deg)"
                  : PageProgress >= progress2 &&
                    "translate(-500vw,-30vh)rotate(-60deg)",
              transition:
                PageProgress >= progress2 && "2.5s cubic-bezier(1, 0, 0, 1)",
            }}
          />
          <img
            src={EllipseGreen}
            alt="green shadow"
            className="green-shadow"
            style={{
              opacity: flag && 1,
              transform:
                PageProgress >= progress1 && PageProgress < progress2
                  ? "translate(-50%,-50%) scale(0.6)"
                  : PageProgress >= progress2 &&
                    "translate(-500vw,-30vh) scale(0.6)",
              transition:
                PageProgress >= progress2 && "2.5s cubic-bezier(1, 0, 0, 1)",
            }}
          />

          <img
            src={OptimizeTime}
            alt="optimize time txt"
            className="optimize-time-txt"
            style={{
              opacity: flag && PageProgress < progress2 && 1,

              transform:
                flag && PageProgress < progress1
                  ? "scale(1)"
                  : flag &&
                    PageProgress >= progress1 &&
                    PageProgress < progress2
                  ? "scale(0.8)"
                  : flag &&
                    PageProgress >= progress1 &&
                    PageProgress >= progress2 &&
                    "translate(-500vw,-30vh) scale(0.8)",
              zIndex: PageProgress >= progress1 && 1,
            }}
          />

          <img
            src={Vector1}
            alt="vector1"
            className="vector1"
            style={{
              opacity:
                PageProgress >= progress1 && PageProgress < progress2 && 1,
              transition:
                PageProgress < progress1 ||
                (PageProgress >= progress2 && "0.75s ease-in-out"),
            }}
          />
          <img
            src={Vector2}
            alt="vector2"
            className="vector2"
            style={{
              opacity:
                PageProgress >= progress1 && PageProgress < progress2 && 1,
              transition:
                PageProgress < progress1 ||
                (PageProgress >= progress2 && "0.75s ease-in-out"),
            }}
          />
          <img
            src={Vector3}
            alt="vector3"
            className="vector3"
            style={{
              opacity:
                PageProgress >= progress1 && PageProgress < progress2 && 1,
              transition:
                PageProgress < progress1 ||
                (PageProgress >= progress2 && "0.75s ease-in-out"),
            }}
          />
          <img
            src={LeftPhoto}
            alt="left photo"
            className="left-photo"
            style={{
              opacity: PageProgress >= progress1 && 1,
              top: PageProgress >= progress1 && "75%",
              left: PageProgress >= progress1 && "-14%",
              transform:
                PageProgress >= progress1 && PageProgress < progress2
                  ? "scale(1)"
                  : PageProgress >= progress2 &&
                    "translate(-500vw,-30vh) rotate(-150deg) scale(1)",
              transition:
                PageProgress >= progress2 && "2.5s cubic-bezier(1, 0, 0, 1)",
            }}
          />
          <img
            src={MiddlePhoto}
            alt="middle photo"
            className="middle-photo"
            style={{
              opacity: PageProgress >= progress1 && 1,
              top: PageProgress >= progress1 && "100%",
              left: PageProgress >= progress1 && "38%",
              transform:
                PageProgress >= progress1 && PageProgress < progress2
                  ? "scale(1)"
                  : PageProgress >= progress2 &&
                    "translate(-500vw,-30vh) rotate(-150deg) scale(1)",
              transition:
                PageProgress >= progress2 && "2.5s cubic-bezier(1, 0, 0, 1)",
            }}
          />
          <img
            src={RightPhoto}
            alt="right photo"
            className="right-photo"
            style={{
              opacity: PageProgress >= progress1 && 1,
              top: PageProgress >= progress1 && "40%",
              right: PageProgress >= progress1 && "-14%",
              transform:
                PageProgress >= progress1 && PageProgress < progress2
                  ? "scale(1)"
                  : PageProgress >= progress2 &&
                    "translate(-500vw,-30vh) rotate(-150deg) scale(1)",
              transition:
                PageProgress >= progress2 && "2.5s cubic-bezier(1, 0, 0, 1)",
            }}
          />
        </div>
      </div>

      <div
        className="people-background-container"
        style={{
          opacity: PageProgress >= progress2 && PageProgress < progress3 && 1,
          transition:
            PageProgress >= progress2 &&
            PageProgress < progress3 &&
            "1s ease-in-out 1s",
        }}
      >
        <img src={backgroundPeopleImg} alt="bgImg" className="bg-People-Img" />
        <img
          src={BenefitTxt}
          alt="benefit text"
          className="benefit-txt"
          style={{
            transform: flag2 && "translate(-50%,-50%) scale(2)",
            opacity: flag2 && 1,
            top:
              flag2 && PageProgress < progress3
                ? "20%"
                : PageProgress >= progress3 && "-100%",
          }}
        />
        <img
          src={GreenRectangle}
          alt="green rect"
          className="green-rect"
          style={{
            transform: flag2 && "translate(-50%,-50%) scale(2)",
            opacity: flag2 && 1,
            top: flag2 && "17%",
          }}
        />
        <div className="iphone-container">
          <img
            src={IPhone14Pro}
            alt="iphone14"
            className="iphone14Pro"
            style={{
              top:
                flag2 && PageProgress < progress3
                  ? "75%"
                  : PageProgress >= progress3 && "150%",
              opacity: flag2 && 1,
            }}
          />
          <img
            src={CompressImg}
            alt="compressImg"
            className="compress-Img"
            style={{
              transform:
                flag2 &&
                PageProgress < progress3 &&
                "translate(-50%,-50%) scaleY(2.2)",
              top:
                flag2 && PageProgress < progress3
                  ? "75%"
                  : PageProgress >= progress3 && "150%",
              opacity: flag2 && 1,
            }}
          />
          <img
            src={TriangleLogo}
            alt="triangle logo"
            className="triangle-logo"
            style={{
              transform:
                flag2 &&
                PageProgress < progress3 &&
                "translate(-50%,-50%) scale(2)",
              top:
                flag2 && PageProgress < progress3
                  ? "44%"
                  : PageProgress >= progress3 && "125%",
              opacity: flag2 && 1,
            }}
          />
        </div>
      </div>
      <div className="navigate-page-main-container">
        <div className="navigate-page-main">
          <img
            src={OfficeBg}
            alt="Office background"
            className="office-bg"
            style={{ opacity: PageProgress >= progress3 && 1 }}
          />

          <img
            src={NavigateText}
            alt="navigate text"
            className="navigate-txt"
            style={{ opacity: PageProgress >= progress3 && 1 }}
          />
          <div className="laptop-images-container">
            <img
              src={LaptopImg}
              alt="laptop image"
              className="laptop-img"
              style={{ opacity: PageProgress >= progress3 && 1 }}
            />

            <img
              src={LapImg1}
              alt="lap image1"
              className="lapImg1"
              style={{
                opacity: PageProgress >= progress3 && 1,
                transform: flag3 && "scale(1.8)",
                right: flag3 && "32%",
                bottom: flag3 && "55%",
              }}
            />
            <img
              src={LapImg2}
              alt="lap image2"
              className="lapImg2"
              style={{
                opacity: PageProgress >= progress3 && 1,
                transform: flag3 && "scale(2.2)",
                right: flag3 && "25%",
                top: flag3 && "0%",
              }}
            />
            <img
              src={LapImg3}
              alt="lap image3"
              className="lapImg3"
              style={{
                opacity: PageProgress >= progress3 && 1,
                transform: flag3 && "scale(1.8)",
                top: flag3 && "-7%",
                left: flag3 && "0%",
              }}
            />
            <img
              src={LapImg4}
              alt="lap image4"
              className="lapImg4"
              style={{
                opacity: PageProgress >= progress3 && 1,
                transform: flag3 && "scale(2)",
                left: flag3 && "2%",
                bottom: flag3 && "15%",
              }}
            />
            <div
              className="green-dashed1-container"
              style={{
                animation: flag3 && "lineAnim1 2s  linear 2s forwards",
                opacity: PageProgress >= progress3 && 1,
              }}
            >
              <img
                src={GreenDashed1}
                alt="green dashed 1"
                className="green-dashed1"
              />
            </div>
            <div
              className="green-dashed2-container"
              style={{
                animation: flag3 && "lineAnim1 2s  linear 2s forwards",
                opacity: PageProgress >= progress3 && 1,
              }}
            >
              <img
                src={GreenDashed2}
                alt="green dashed 2"
                className="green-dashed2"
              />
            </div>
            <div
              className="green-dashed3-container"
              style={{
                animation: flag3 && "lineAnim3 1.5s  linear 2s forwards",
                opacity: PageProgress >= progress3 && 1,
              }}
            >
              <img
                src={GreenDashed3}
                alt="green dashed 3"
                className="green-dashed3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperArea;
