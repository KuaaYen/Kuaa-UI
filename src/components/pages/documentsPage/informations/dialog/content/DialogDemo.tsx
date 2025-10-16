interface DialogDemoProps {
    children?: React.ReactNode,
    width?: number,
    height?: number,
    borderRadius?: number,
    strokeWidth?: number,
    arrowSize?: number,
    arrowPosition?: number,
    arrowDirection?: 'right' | 'left',
    strokeColor?: string,
    fillColor?: string,
    textColor?: string,
    textWrap?: 'nowrap' | 'wrap' | 'balance' | 'pretty' | 'stable',
}

const DialogDemo = ({
    children = 'Dialog',
    width = 400, 
    height = 150, 
    borderRadius = 32,
    strokeWidth = 6,
    arrowSize = 35,
    arrowPosition = 0.8,
    arrowDirection = 'right',
    strokeColor = '#000000',
    fillColor = '#ffffff',
    textColor = '#000000',
    textWrap = 'nowrap',
}: DialogDemoProps) => {
 
    const fixedBorderRadius = borderRadius - strokeWidth/2;
    const minWidth = Math.max(width, strokeWidth + fixedBorderRadius*2 + arrowSize*1.6);
    const minHeight = Math.max(height, strokeWidth + fixedBorderRadius*2 + arrowSize*1.6);
    const padding = strokeWidth/2;
    // css的border是由content的邊緣開始向外延伸，svg的stroke是由線條的中心開始向外延伸，所以需要減去strokeWidth/2兩者才會重合
    const horizontalLLength = Math.max(arrowSize*1.6, width - strokeWidth - fixedBorderRadius*2);
    const verticalLLength = Math.max(arrowSize, height - strokeWidth - fixedBorderRadius*2 - arrowSize*0.6);

    const createDialogBox = () => {
        const arrowTrailLength = horizontalLLength - arrowSize;

        // 起點
        const M = `M ${padding} ${fixedBorderRadius + padding}`;
        // 左上圓弧
        const A1 = `a ${fixedBorderRadius} ${fixedBorderRadius} 0 0 1 ${fixedBorderRadius} ${-fixedBorderRadius}`;
        // 水平線到右上圓弧起點
        const L1 = `l ${horizontalLLength} 0`;
        // 右上圓弧
        const A2 = `a ${fixedBorderRadius} ${fixedBorderRadius} 0 0 1 ${fixedBorderRadius} ${fixedBorderRadius}`;
        // 垂直線到右下圓弧起點
        const L2 = `l 0 ${verticalLLength}`;
        // 右下圓弧
        const A3 = `a ${fixedBorderRadius} ${fixedBorderRadius} 0 0 1 ${-fixedBorderRadius} ${fixedBorderRadius}`;
        // 水平線到箭頭起始位置
        const L3 = `l -${arrowTrailLength * (1-arrowPosition)} 0`;
        // 箭頭起始位置往右下到箭頭尖端
        const L4 = arrowDirection === 'right' ? `l ${arrowSize*0.5} ${arrowSize*0.6}` : `l ${-arrowSize*1.5} ${arrowSize*0.6}`;
        // 箭頭尖端往左上到箭頭終點位置
        const L5 = arrowDirection === 'right' ? `l ${-arrowSize*1.5} ${-arrowSize*0.6}` : `l ${arrowSize*0.5} ${-arrowSize*0.6}`;
        //箭頭終點位置水平往左到左下圓弧起點
        const L6 = `l -${arrowTrailLength * arrowPosition} 0`;
        // 左下圓弧
        const A4 = `a ${fixedBorderRadius} ${fixedBorderRadius} 0 0 1 ${-fixedBorderRadius} ${-fixedBorderRadius}`;
        // 垂直線回到起始點
        const L7 = `l 0 ${-verticalLLength}`;

        return (
            <path 
                d={`${M} ${A1} ${L1} ${A2} ${L2} ${A3} ${L3} ${L4} ${L5} ${L6} ${A4} ${L7} z`}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                fill={fillColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        )
    }

    return (
        <div className="dialog-demo" style={{ width: minWidth, height: minHeight }}>
            <svg viewBox={`0 0 ${minWidth} ${minHeight}`} xmlns="http://www.w3.org/2000/svg" className="dialog-demo-svg">
                {createDialogBox()}
            </svg>
            <div 
                className="dialog-demo-content"
                style={{
                    borderRadius: borderRadius,
                    border: `solid ${strokeWidth}px transparent`,
                    width: minWidth,
                    height: verticalLLength + fixedBorderRadius*2 + strokeWidth,
                    color: textColor,
                    textWrap: textWrap,
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default DialogDemo;