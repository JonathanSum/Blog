import React from "react";

import IFrame from "./IFrame";

const Exercices = ({ ex }: { ex: string }) => {
  return <IFrame link={ex} />;
};

export default Exercices;
