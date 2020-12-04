import React from "react";
import { useDispatch } from "react-redux";
import { add, clear, equals } from "../actions/actions";

function Operator({ sign, id }) {
    const dispatch = useDispatch();
    let onClickHandler;

    switch (id) {
        case "clear":
            onClickHandler = () => dispatch(clear());
            break;
        case "add":
            onClickHandler = () => dispatch(add());
            break;
        case "equals":
            onClickHandler = () => dispatch(equals());
            break;
        default:
            break;
    }

    return (
        <button className="operator" id={id} onClick={onClickHandler}>
            {sign}
        </button>
    );
}

export default Operator;
