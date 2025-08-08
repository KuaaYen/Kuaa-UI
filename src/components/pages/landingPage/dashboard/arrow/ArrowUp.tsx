import { memo } from "react";
import ArrowStroke from "./ArrowStroke";
// import ArrowPointer from "./ArrowPointer";

const ArrowUp = () => {
    return (
        <div className="landing-page-arrow-up">
            <ArrowStroke />
            {/* <ArrowPointer /> */}
        </div>
    );
};

export default memo(ArrowUp);