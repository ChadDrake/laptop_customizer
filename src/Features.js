import React from "react";
import Options from "./Options";

export default function (props) {
  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      <Options
        features={props.features}
        selected={props.selected}
        updateFeature={props.updateFeature}
      />
    </section>
  );
}
