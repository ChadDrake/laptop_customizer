import React from "react";
import Total from "./Total";

export default function Summary(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = props.selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {props.currency.format(selectedOption.cost)}
        </div>
      </div>
    );
  });

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <div className="summary__total">
        <Total selected={props.selected} currency={props.currency} />
      </div>
    </section>
  );
}
