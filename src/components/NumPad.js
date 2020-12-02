import React from "react";
import Number from "./Number";
import Operator from "./Operator";

function NumPad() {
    return (
        <div className="numpad">
            <Operator sign="AC" id="AC" />
            <Operator sign="/" />
            <Operator sign="X" />
            <Number num={7} />
            <Number num={8} />
            <Number num={9} />
            <Operator sign="-" />
            <Number num={4} />
            <Number num={5} />
            <Number num={6} />
            <Operator sign="+" />
            <Number num={1} />
            <Number num={2} />
            <Number num={3} />
            <Operator sign="=" id="equals" />
            <Number num={0} id="cero" />
            <Operator sign="." id="dot" />
        </div>
    );
}

export default NumPad;
