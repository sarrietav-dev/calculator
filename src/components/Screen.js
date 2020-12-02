import React from "react";
import { useSelector } from "react-redux";

function Screen() {
    const currentContent = useSelector((state) => state.currentContent);
    const formula = useSelector((state) => state.formula);

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
            <div className="formula">{formula.current}</div>
            <div id="display">{currentContent.content}</div>
        </div>
    );
}

export default Screen;
