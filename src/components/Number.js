import React from "react";

function Number({ num, id }) {
    return (
        <button className="number" id={id}>
            {num}
        </button>
    );
}

export default Number;
