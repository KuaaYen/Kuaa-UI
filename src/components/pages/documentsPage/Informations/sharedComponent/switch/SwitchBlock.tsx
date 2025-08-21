import SwitchCodeBtn from "./SwitchCodeBtn";
import SwitchPreviewBtn from "./SwitchPreviewBtn";

const SwitchBlock = ({switchState, setSwitchState}: {switchState: 'preview' | 'code', setSwitchState: React.Dispatch<React.SetStateAction<'preview' | 'code'>>}) => {
    return (
        <div className='documents-page-component-switch'>
            <SwitchPreviewBtn switchState={switchState} setSwitchState={setSwitchState} />
            <SwitchCodeBtn switchState={switchState} setSwitchState={setSwitchState} />
        </div>
    )
}

export default SwitchBlock;