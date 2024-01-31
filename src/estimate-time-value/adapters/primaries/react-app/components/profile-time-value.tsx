import { useSelector } from "react-redux";
import { estimatedProfileTimeValueVM } from "../view-models-generator/estimated-profile-time-value";
import React from "react";

export const ProfileTimeValue = () => {
  const estimatedTimeValue = useSelector(estimatedProfileTimeValueVM);

  return (
    <article>
      <header>Your profile value</header>
      <main>{estimatedTimeValue}$</main>
    </article>
  );
};
