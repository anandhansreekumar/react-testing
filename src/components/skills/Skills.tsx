import React, { useState } from "react";

import { Props } from "./skills.types";

const Skills: React.FC<Props> = ({ skills }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </>
  );
};

export default Skills;
