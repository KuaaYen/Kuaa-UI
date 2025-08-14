import { memo } from "react";
import ArrowStroke from "./ArrowStroke";
// import ArrowPointer from "./ArrowPointer";

const ArrowUp = ({mediaType = 'pc'}: {mediaType?: 'pc' | 'mobile' | 'tablet'}) => {
    if(mediaType === 'mobile') return null;


    return (
        <div className={mediaType === 'tablet' ? 'landing-page-arrow-up-tablet' : 'landing-page-arrow-up'}>
            <ArrowStroke />
            {/* <ArrowPointer /> */}
        </div>
    );
};

export default memo(ArrowUp);