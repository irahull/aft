import React, { useEffect, useState } from "react";
import "./home-page.scss";
import { Stickyroll } from "@stickyroll/react";
import Sponsor from "../../components/Sponsor/Sponsor";
import Benefit from "../../components/Benifit/Benefit";
import AiComp from "../../components/AiComp/AiComp";

export default function HomePage({ HandlePathname }) {
  const [pageProgress, setPageProgress] = useState(0);

  const progress = [
    0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7,
    0.75, 0.8, 0.85,0.9,0.95
  ];

  let progress1 = progress[5];

  useEffect(() => {
    HandlePathname();
    // eslint-disable-next-line
  }, []);

  console.log(pageProgress);
  return (
    <div className="home-page-main-container">
      <Stickyroll pages={1} factor={15} onProgress={(p) => setPageProgress(p)}>
        <p
          style={{
            position: "absolute",
            top: "0",
            color: "red",
            zIndex: "10",
          }}
        >
          {pageProgress}
        </p>
        <div className="homepage">
          <Benefit PageProgress={pageProgress} Progress={progress} />

          {pageProgress > progress1 && (
            <Sponsor PageProgress={pageProgress} Progress={progress} />
          )}

          {/* <AiComp PageProgress={pageProgress} progress={progress} /> */}
        </div>
      </Stickyroll>
    </div>
  );
}
