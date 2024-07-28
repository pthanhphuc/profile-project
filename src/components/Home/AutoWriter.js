
import React from "react";
import Typewriter from "typewriter-effect";

export default function AutoWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Developer',
          'Freelancer',
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}