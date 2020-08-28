import React from "react";
import Options from "./Options";
import slugify from "slugify";
import store from "./store";

export default function Features(props) {
  const features = Object.keys(store.FEATURES).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = store.FEATURES[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <Options
          selected={props.selected}
          itemHash={itemHash}
          item={item}
          key={item.name}
          clickUpdate={props.clickUpdate}
          feature={feature}
          featureHash={featureHash}
        />
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}
