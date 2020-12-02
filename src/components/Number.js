import React from "react";
import { useDispatch } from "react-redux";
import { appendNumber } from "../actions/actions";

function Number({ num, id }) {
    const dispatch = useDispatch();

    return (
        <button className="number" id={id} onClick={() => dispatch(appendNumber(num))}>
            {num}
        </button>
    );
}

export default Number;
