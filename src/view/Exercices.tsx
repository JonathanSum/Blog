import React from "react";

import Notebook from "./Notebook";

const Exercices = ({ ex }: { ex: string }) => {
  return <Notebook link={ex} />;
};

export default Exercices;
