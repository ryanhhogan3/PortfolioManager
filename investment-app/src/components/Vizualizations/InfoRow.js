import React from "react";

function InfoRow() {
  return (
    <div class="Info-row">
      <div class="column">
        <h3>Cash</h3>
        <p>$61,383.48</p>
      </div>
      <div class="column">
      <h3>Weekly Change</h3>
        <p>-$80,495</p>
      </div>
      <div class="column">
      <h4>YTD Dividends</h4>
        <p>+$43,962
        </p>
      </div>
      <div class="column">
      <h3>1 Year Beta</h3>
        <p>0.89</p>
      </div>
    </div>
  );
}

export default InfoRow;
