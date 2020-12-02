import React from "react";

function Operator({ sign, id }) {
    return (
        <button className="operator" id={id}>
            {sign}
        </button>
    );
}

export default Operator;
