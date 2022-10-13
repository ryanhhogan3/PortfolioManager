import React from "react";

function InfoRow() {
  return (
    <div class="Info-row">
      <div class="column">
        <h3>Cash</h3>
        <p>$64,982.05</p>
      </div>
      <div class="column">
      <h3>Weekly Change</h3>
        <p>+$81,567.23</p>
      </div>
      <div class="column">
      <h4>Monthly Dividends</h4>
        <p>+$7,680.97</p>
      </div>
      <div class="column">
      <h3>1 Year Beta</h3>
        <p>0.88</p>
      </div>
    </div>
  );
}

export default InfoRow;
