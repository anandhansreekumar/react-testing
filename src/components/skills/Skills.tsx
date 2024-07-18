import React from "react";

import { Props } from "./skills.types";

const Skills: React.FC<Props> = ({ skills }) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
};

export default Skills;
