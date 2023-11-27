import React, { useState } from "react";
import "./Package.scss";

import ButtonBox from "../../assets/PackageImgs/ButtonBox.png";
import Lappy from "../../assets/PackageImgs/Lappy.png";
import SponsorshipPackagesLogo from "../../assets/PackageImgs/SponsorshipPackagesLogo.png";
import SponsorshipPackagesText from "../../assets/PackageImgs/SponsorshipPackagesTxt.png";
import SponsorBgImg from "../../assets/PackageImgs/SponsorBgImg.png";
import preEventImg from "../../assets/PackageImgs/preEventImg.png";
import duringEventImg from "../../assets/PackageImgs/duringEventImg.png";
import postEventImg from "../../assets/PackageImgs/postEventImg.png";
import speakingImg from "../../assets/PackageImgs/speakingImg.png";
import networkingImg from "../../assets/PackageImgs/networkingImg.png";
import ViewPackagesText from "../../assets/PackageImgs/ViewPackagesText.png"

const NewSponsorPage = ({PageProgress,Progress}) => {
  const [clickBtn, setClickBtn] = useState(false);
  const progress17=Progress[17];
  console.log(progress17,"Prpogress15");

  return (
    <div
      className="new-main-container"
      style={{opacity:PageProgress >=progress17  && 1,zIndex:PageProgress >=progress17 && 9}}
    >
      <div className="fixed-container1">
        <img src={SponsorBgImg} alt="background" className="sponsor-bg" />
        <img src={Lappy} alt="lappy" className="lappy-sponsor" />
        <img
          src={SponsorshipPackagesLogo}
          alt="logo"
          className="logo-sponsor"
        />
        <img
          src={SponsorshipPackagesText}
          alt="text"
          className="sponsor-text"
        />
        <div className="button-box-container" onClick={() => {
            setClickBtn(true);
          }}>
        <img
          src={ButtonBox}
          alt="button box"
          className="button-box"
          
        />
        <img src={ViewPackagesText} alt="view text" className="view-packages-text" />
        </div>
      </div>

      <div className="scroll-main" style={{ top: clickBtn && "10%" }}>
        
        <div className="scroll-container2" id="test" >
          <p
            className="cross"
            onClick={() => {
              setClickBtn(false);
              document.getElementById("test").scrollTo(0,0);
            }}
            style={{ opacity: clickBtn && 1 }}
          >
            &#x292C;
          </p>
       
          <img src={preEventImg} alt="preEvent" className="pre-event-img" />
          <img
            src={duringEventImg}
            alt="duringEvent"
            className="during-event-img"
          />
          <img src={postEventImg} alt="postEvent" className="post-event-img" />
          <img src={speakingImg} alt="speaking Img" className="speaking-Img" />
          <img
            src={networkingImg}
            alt="networking Img"
            className="networking-Img"
          />
        </div>
  
      </div>
    </div>
  );
};

export default NewSponsorPage;
