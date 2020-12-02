import React from "react";
import Number from "./Number";

function NumPad() {
    return (
        <div className="numpad">
            <Number num={0}/>
            <Number num={1}/>
            <Number num={2}/>
            <Number num={3}/>
            <Number num={4}/>
            <Number num={5}/>
            <Number num={6}/>
            <Number num={7}/>
            <Number num={8}/>
            <Number num={9}/>
        </div>
    )
}

export default NumPad;
