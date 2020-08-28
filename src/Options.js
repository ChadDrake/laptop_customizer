import React from "react";
import store from "./store";
import slugify from "slugify";

export default function Options(props) {
  return (
    <div>
      <div key={props.itemHash} className="feature__item">
        <input
          type="radio"
          id={props.itemHash}
          className="feature__option"
          name={slugify(props.feature)}
          //checked={props.item.name === this.state.selected[props.feature].name}
          onChange={(e) => props.clickUpdate(props.feature, props.item)}
        />
        <label htmlFor={props.itemHash} className="feature__label">
          {props.item.name} ({store.USCurrencyFormat.format(props.item.cost)})
        </label>
      </div>
      <fieldset className="feature" key={props.featureHash}>
        <legend className="feature__name"></legend>
        {props.options}
      </fieldset>
    </div>
  );
}