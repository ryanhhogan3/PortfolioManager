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
        <p>-$73,508.65</p>
      </div>
      <div class="column">
      <h4>Past Months Dividends</h4>
        <p>+$10,952.65</p>
      </div>
      <div class="column">
      <h3>1 Year Beta</h3>
        <p>0.88</p>
      </div>
    </div>
  );
}

export default InfoRow;
