import React from "react";
import store from "./store";
import slugify from "slugify";

const options = store.FEATURES[feature].map((item) => {
  const itemHash = slugify(JSON.stringify(item));
  return (
    <div key={itemHash} className="feature__item">
      <input
        type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(feature)}
        checked={item.name === this.state.selected[feature].name}
        onChange={(e) => this.updateFeature(feature, item)}
      />
      <label htmlFor={itemHash} className="feature__label">
        {item.name} ({store.USCurrencyFormat.format(item.cost)})
      </label>
    </div>
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
