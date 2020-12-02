import React from "react";
import Number from "./Number";
import Operator from "./Operator";

function NumPad() {
    return (
        <div className="numpad">
            <Operator sign="AC" id="clear" />
            <Operator sign="/" id="divide" />
            <Operator sign="X" id="multiply" />
            <Number num={7} id="seven" />
            <Number num={8} id="eight" />
            <Number num={9} id="nine" />
            <Operator sign="-" id="subtract" />
            <Number num={4} id="four" />
            <Number num={5} id="five" />
            <Number num={6} id="six" />
            <Operator sign="+" id="add" />
            <Number num={1} id="one" />
            <Number num={2} id="two" />
            <Number num={3} id="three" />
            <Operator sign="=" id="equals" />
            <Number num={0} id="zero" />
            <Operator sign="." id="decimal" />
        </div>
    );
}

export default NumPad;
