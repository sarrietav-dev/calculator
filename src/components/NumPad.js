import React from "react";
import Number from "./Number";
import Operator from "./Operator";

function NumPad() {
    return (
        <div className="numpad">
            <Operator sign="AC" />
            <Operator sign="AC" />
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
            <Operator sign="=" />
            <Number num={0} />
            <Number num={0} />
            <Operator sign="." />
            <Operator sign="=" />
        </div>
    );
}

export default NumPad;
