import React from "react";
import Total from "./Total";
import Product from "./Product";

export default function Summary(props) {
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      <Product selected={props.selected} currency={props.currency} />
      <div className="summary__total">
        <Total selected={props.selected} currency={props.currency} />
      </div>
    </section>
  );
}
