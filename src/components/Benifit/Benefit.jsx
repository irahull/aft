import React, { useEffect, useState } from "react";
import "./benefit.scss";
import MockUpS1 from "../../assets/agri-tech/bg-overlay.png";
import S2Bg from "../../assets/agri-tech/s2-benefits.png";
import GreenOverlay from "../../assets/agri-tech/s2-overlay.png";
import BenefitCard from "./BenefitCard/BenefitCard";
import AudienceRight from "../../assets/agri-tech/s2-right-sec.png";
import AudienceLeft from "../../assets/agri-tech/s2-left-sec.png";

const Benefit = ({ PageProgress, Progress }) => {
  const [benefitBg, setBenefitBg] = useState(false);
  const dataOne = [
    {
      id: 1,
      title:
        "Pre verified and scheduled Interactions for Forward-Thinking Professionals",
      textOne:
        "Engage with a network curated to enhance your strategic goals, matched through sophisticated AI.",
      textTwo:
        " Find peers and leaders who are looking to discuss, partner, and invest in the food and agriculture technology sectors.",
    },
  ];
  const dataTwo = [
    {
      id: 2,
      title: "Strategic Exposure for Leaders in Agri and Food Tech",
      textOne:
        "Position your brand at the forefront of industry innovation with AFTC's sponsorship opportunities.",
      textTwo:
        " Access a concentrated audience of decision-makers and influencers ready to explore and invest.",
    },
  ];
  const progress0 = Progress[0];
  const progress1 = Progress[1];
  const progress2 = Progress[2];
  const progress3 = Progress[3];
  const progress4 = Progress[4];
  const progress5 = Progress[5];

  useEffect(() => {
    setTimeout(() => {
      if (PageProgress >= progress1 && PageProgress < progress2) {
        setBenefitBg(true);
      } else {
        setBenefitBg(false);
      }
    }, 2000);
  }, [Progress]);

  return (
    <div
      className="benefits-main"
      style={{
        opacity: PageProgress >= progress5 && "0",
      }}
    >
      <div className="benefits-wrapper">
        <div className="benefits-s1">
          <h2
            style={{
              transform:
                PageProgress >= progress0 && PageProgress < progress2
                  ? "translate(-50%, -50%)"
                  : PageProgress >= progress2 && "translate(-40%, -400%)",
              animation:
                PageProgress >= progress1 && "BgPositionAnim  4s ease-in-out",
              color: benefitBg && "black",
              opacity: PageProgress >= progress2 && "0",
              backgroundSize: PageProgress >= progress0 && "1000%",
            }}
          >
            Benefits
          </h2>
          <img src={MockUpS1} alt="" className="s1-mockup" />
          <div
            className="s1-overlay1"
            style={{
              width: PageProgress >= progress1 && "0%",
            }}
          />
          <div
            className="s1-overlay2"
            style={{
              width: PageProgress >= progress2 && "150%",
            }}
          />
        </div>

        {/* ------------- slide two -------------- */}

        <div className="benefits-s2">
          <div className="s2-heading-wrapper">
            <h2
              className="h-two"
              style={{
                transform:
                  PageProgress >= progress2 &&
                  "translate(0%, -10%) skew(0deg, 0deg)",
                opacity: PageProgress >= progress2 && "1",
                backgroundSize: PageProgress >= progress2 && "1000%",
              }}
            >
              Benefits
            </h2>
            <span
              className="for-text"
              style={{
                transform:
                  PageProgress >= progress2 &&
                  "translate(0%, -20%) skew(0deg, 0deg) scale(1) rotate(0)",
              }}
            >
              For
            </span>
          </div>

          <div className="s2-image-wrapper">
            <img
              src={AudienceRight}
              alt=""
              className="s2-audeience-left"
              style={{
                transform:
                  PageProgress >= progress2 && "translate(0%,0%) scale(1)",
                filter: PageProgress >= progress4 && "blur(0.4vw)",
              }}
            />
            <img
              src={AudienceLeft}
              alt=""
              className="s2-audeience-right"
              style={{
                transform:
                  PageProgress >= progress2 && "translate(0%,0%) scale(1)",
                filter:
                  PageProgress >= progress3 &&
                  PageProgress < progress4 &&
                  "blur(0.4vw)",
              }}
            />

            <div
              className="s2-overlay"
              style={{
                bottom: PageProgress >= progress2 && "15vw",
                left: PageProgress >= progress2 && "50%",
              }}
            >
              <img src={GreenOverlay} alt="" />
            </div>
          </div>
          {/* ----------------------------- Card Section ------------------------------ */}
          <div className="s2-card-wrapper">
            <div
              className="cardOne"
              style={{
                transform:
                  PageProgress >= progress3 &&
                  PageProgress < progress4 &&
                  "translateX(0%)",
              }}
            >
              <BenefitCard data={dataOne} />
            </div>
            <div
              className="cardTwo"
              style={{
                transform: PageProgress >= progress4 && "translateX(0%)",
              }}
            >
              <BenefitCard data={dataTwo} />
            </div>
          </div>

          {/* ------------------------- Bottom Text ---------------------------- */}

          <div className="s2-bottom-text-wrapper">
            <div
              className="s2-bt1"
              style={{
                transform: PageProgress >= progress3 && "translateY(0%)",
                opacity: PageProgress >= progress4 && "0",
              }}
            >
              Connect With <span>Precision</span>
            </div>
            <div
              className="s2-shadow-div"
              style={{
                transform:
                  PageProgress >= progress3 && PageProgress < progress4
                    ? "translate(0%,0%)"
                    : PageProgress >= progress4 && "translate(60.7vw,0%)",
              }}
            >
              <div className="shadow-inner" />
            </div>
            <div
              className="s2-bt2"
              style={{
                transform: PageProgress >= progress4 && "translateY(0%)",
              }}
            >
              Amplify Your <span>Influence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
