import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    
    <div translate="no">
      <Typewriter
        options={{
          strings: [
            "Software developer",
            "Professional Services Consultant",
            "Software engineering student",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
