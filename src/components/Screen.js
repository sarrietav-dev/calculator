import React from "react";
import { useSelector } from "react-redux";

function Screen() {
    const currentContent = useSelector((state) => state.currentContent);

    let styleWarning = {
        display: "none",
    };

    let styleNumber = {
        display: "block",
    };

    // FIXME: Make span.warning to appear and disappear.
    function showWarning() {
        styleWarning = { display: "block" };
        styleNumber = { display: "none" };
        setTimeout(() => {}, 1000);
        styleWarning = { display: "none" };
        styleNumber = { display: "block" };
    }

    return (
        <div className="display-wrapper">
            <div className="formula"></div>
            <div id="display">
                {currentContent.isInLimit && showWarning()}
                <span style={styleWarning} className="warning">
                    Digit limit met
                </span>
                <span style={styleNumber}>{currentContent.content}</span>
            </div>
        </div>
    );
}

export default Screen;
