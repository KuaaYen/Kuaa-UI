import CodeIcon from "./CodeIcon";

const SwitchCodeBtn = ({ switchState, setSwitchState }: { switchState: 'preview' | 'code', setSwitchState: (state: 'preview' | 'code') => void }) => {
    return (
        <button 
            className={`documents-page-component-switch-button ${switchState === 'code' ? 'active' : ''}`}
            onClick={() => setSwitchState('code')}
        >
            <CodeIcon switchState={switchState} />
            code
        </button>
    );
};

export default SwitchCodeBtn;