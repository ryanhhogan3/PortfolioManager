import React from "react";

function Stock({stock}) {
    return(
        <tr>
            <td>{stock.longName}</td>
            <td>{stock.symbol}</td>
            <td>{stock.currentPrice}</td>
            <td>{stock.beta}</td>
        </tr>
    );
}

export default Stock