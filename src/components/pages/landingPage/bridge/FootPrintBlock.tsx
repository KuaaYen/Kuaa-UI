import FootPrints from "./FootPrints";

interface FootPrintBlockProps {
    footPrintData: {
        right: string;
        top: string;
        rotate: string;
        stepLength: number;
        color: string;
    }[];
    blockHeight?: number;
}

const FootPrintBlock = ({footPrintData, blockHeight=300}: FootPrintBlockProps) => {

    const createFootPrints = () => {
        return footPrintData.map((data, index) => {
            return (
                <div
                    key={index+'_footPrint'}
                    style={{
                        position: 'absolute',
                        right: data.right,
                        top: data.top,
                        transform: `rotate(${data.rotate})`,
                    }}
                >
                    <FootPrints stepLength={data.stepLength} color={data.color} />
                </div>
            )
        })
    }

    return (
        <section 
            className="foot-print-block-container"
            style={{
                height: `${blockHeight}px`,
            }}
        >
            {createFootPrints()}
        </section>
    )
}

export default FootPrintBlock;