import React from "react";

function InfoRow() {
  return (
    <div class="Info-row">
      <div class="column">
        <h3>Cash</h3>
        <p>$75,214.67</p>
      </div>
      <div class="column">
      <h3>Weekly Change</h3>
        <p>-$9,183.50</p>
      </div>
      <div class="column">
      <h4>Year-To-Date Dividends</h4>
        <p>+$39,470.88
        </p>
      </div>
      <div class="column">
      <h3>1 Year Beta</h3>
        <p>0.88</p>
      </div>
    </div>
  );
}

export default InfoRow;
