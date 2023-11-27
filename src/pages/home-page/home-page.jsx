import React, { useEffect, useState } from "react";
import "./home-page.scss";
import { Stickyroll } from "@stickyroll/react";
import Sponsor from "../../components/Sponsor/Sponsor";
import Benefit from "../../components/Benifit/Benefit";
import AiComp from "../../components/AiComp/AiComp";
import OptimizeTime from "../../components/OptimizeTime/OptimizeTime";
import Package from "../../components/PackagePage/Package";

export default function HomePage({ HandlePathname }) {
  const [pageProgress, setPageProgress] = useState(0);

  const progress = [
    0.04, 0.08, 0.12,0.16, 0.2, 0.24,0.28, 0.32, 0.36, 0.4, 0.44,0.48, 0.52, 0.56, 0.6, 0.64,0.68, 0.72,
    0.76, 0.8, 0.84,0.88,0.92,0.96
  ];

  let progress1 = progress[5];

  useEffect(() => {
    HandlePathname();
    // eslint-disable-next-line
  }, []);

  console.log(pageProgress);
  return (
    <div className="home-page-main-container">
      <Stickyroll pages={1} factor={20} onProgress={(p) => setPageProgress(p)}>
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
         { pageProgress >= progress[13] && <OptimizeTime PageProgress={pageProgress} Progress={progress}/> }
         <Package PageProgress={pageProgress} Progress={progress} />
        </div>
      </Stickyroll>
    </div>
  );
}
