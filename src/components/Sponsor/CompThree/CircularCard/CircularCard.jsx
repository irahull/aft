import React from "react";
import "./circularcard.scss";
import HandShake from "../../../../assets/agri-tech/shaking-hand.png";

const CircularCard = ({ valSeven }) => {
  const cardImages = [
    {
      id: 1,
      media: HandShake,
    },
    {
      id: 2,
      media: HandShake,
    },
    {
      id: 3,
      media: HandShake,
    },
    {
      id: 4,
      media: HandShake,
    },
    {
      id: 5,
      media: HandShake,
    },
    {
      id: 6,
      media: HandShake,
    },
    {
      id: 7,
      media: HandShake,
    },
    {
      id: 8,
      media: HandShake,
    },
    {
      id: 9,
      media: HandShake,
    },
    {
      id: 10,
      media: HandShake,
    },
    {
      id: 11,
      media: HandShake,
    },
    {
      id: 13,
      media: HandShake,
    },
    {
      id: 14,
      media: HandShake,
    },
  ];

  return (
    <div
      className="circular-card"
      style={{
        bottom: valSeven && "10%",
        opacity: valSeven && "1",
      }}
    >
      {/* <div className="card-div">
      {cardImages.map((item,i) => {
        return (
            <div className="box" style={{ "--i": i }}>
              <img src={item.media} alt="" />
            </div>
        );
      })}
      </div> */}
      <div className="card-div">
        <div className="box" style={{ "--i": 1 }}>
          <img src={HandShake} alt="" />
        </div>
        <div className="box" style={{ "--i": 2 }}>
          <img src={HandShake} alt="" />
        </div>
        <div className="box" style={{ "--i": 3 }}>
          <img src={HandShake} alt="" />
        </div>
        <div className="box" style={{ "--i": 4 }}>
          <img src={HandShake} alt="" />
        </div>
        <div className="box" style={{ "--i": 5 }}>
          <img src={HandShake} alt="" />
        </div>
        <div className="box" style={{ "--i": 6 }}>
          <img src={HandShake} alt="" />
        </div>
        <div className="box" style={{ "--i": 7 }}>
          <img src={HandShake} alt="" />
        </div>
        <div className="box" style={{ "--i": 8 }}>
          <img src={HandShake} alt="" />
        </div>
        <div className="box" style={{ "--i": 9 }}>
          <img src={HandShake} alt="" />
        </div>
        <div className="box" style={{ "--i": 10 }}>
          <img src={HandShake} alt="" />
        </div>
        <div className="box" style={{ "--i": 11 }}>
          <img src={HandShake} alt="" />
        </div>
        <div className="box" style={{ "--i": 12 }}>
          <img src={HandShake} alt="" />
        </div>
        <div className="box" style={{ "--i": 13 }}>
          <img src={HandShake} alt="" />
        </div>
        <div className="box" style={{ "--i": 14 }}>
          <img src={HandShake} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CircularCard;
