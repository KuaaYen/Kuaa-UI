import FootPrints from "./FootPrints";

const FootPrintBlock = () => {

    // 之後當screen size context設定完成後，要根據畫面減少腳印的數量，否則當外框自適應的時候腳印會擠在一起
    const footPrintDataArray = [
        {right: '18%', top: '-15%', rotate: '-125deg', stepLength: 70, color: '#585b71'},
        {right: '30%', top: '15%', rotate: '-125deg', stepLength: 80, color: '#52556c'},
        {right: '45%', top: '38%', rotate: '-113deg', stepLength: 90, color: '#4b4e66'},
        {right: '62%', top: '55%', rotate: '-100deg', stepLength: 95, color: '#444761'},
        {right: '78%', top: '80%', rotate: '-125deg', stepLength: 90, color: '#3D405B'},
    ];

    const createFootPrints = () => {
        return footPrintDataArray.map((data, index) => {
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
        <div className="foot-print-block-container">
            {createFootPrints()}
        </div>
    )
}

export default FootPrintBlock;