import React from "react";

import Fail from "./Fail";
import Succeed from "./Succeed";
import Bonus from "./Bonus";
import Bonus2 from "./Bonus2";
import Bonus3 from "./Bonus3";

const RandomSqr = ({ num }) => {
  if (num === 1) {
    return <Fail />;
  } else if (num === 2) {
    return <Succeed />;
  } else if (num === 3) {
    return <Bonus />;
  } else if (num === 4) {
    return <Bonus2 />;
  } else if (num === 5) {
    return <Bonus3 />;
  } else {
    return (
      <div
        style={{
          fontFamily: "fontContents",
          justifyContent: "center",
          textAlign: "center",
          margin: "auto auto 100px auto",
        }}
      >
        생일 추카해 대럼지!!!
      </div>
    );
  }
};
export default RandomSqr;
