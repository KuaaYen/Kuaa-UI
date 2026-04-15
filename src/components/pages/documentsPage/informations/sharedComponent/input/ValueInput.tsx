import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface ValueInputProps<T> {
    demoProps: T,
    propName: keyof T,
    onChange: (props: T) => void,
    inputType: 'string' | 'number' | 'boolean' | 'switch' | 'color' | 'slider',
    options?: string[],
    step?: number,
    min?: number,
    max?: number,
    maxLength?: number,
}


const ValueInput = <T,>({ 
    demoProps, 
    propName, 
    onChange, 
    inputType, 
    options,
    step,
    min,
    max,
    maxLength
}: ValueInputProps<T>) => {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);


    const handleChange = ({e, propType = 'string'}: {e: React.ChangeEvent<HTMLInputElement>, propType?: 'string' | 'number' | 'color'}) => {
        let newValue;
        if(propType === 'number') {
            newValue = Number(e.target.value);
            if(max !== undefined && newValue > max) {
                newValue = max;
            }
            if(min !== undefined && newValue < min) {
                newValue = min;
            }
        } else {
            newValue = e.target.value;
        }
        const newProps = {...demoProps, [propName]: newValue};
        onChange(newProps);
    }

    const CreateInput = () => {
        
        const handleSwitchOptions = () => {
            const optionLength = options?.length;
            if (optionLength) {
                const newIndex = selectedOptionIndex + 1 >= optionLength ? 0 : selectedOptionIndex + 1;
                setSelectedOptionIndex(newIndex);
                const newProps = {...demoProps, [propName]: options[newIndex]};
                onChange(newProps);
            }
        }

        const handleSwitchBoolean = () => {
            const newProps = {...demoProps, [propName]: !demoProps[propName]};
            onChange(newProps);
        }

        switch (inputType) {
            case 'string':
                return <input 
                    className="value-input-string" 
                    type="string" 
                    placeholder="Enter value" 
                    value={String(demoProps[propName])} 
                    onChange={(e) => handleChange({e, propType: 'string'})} 
                    {...(maxLength !== undefined && { maxLength })}
                />
            case 'number':
                return <input 
                    className="value-input-number" 
                    type="number" 
                    {...(step !== undefined && { step })}
                    {...(min !== undefined && { min })}
                    {...(max !== undefined && { max })}
                    placeholder="num" 
                    value={Number(demoProps[propName])} 
                    onChange={(e) => handleChange({e, propType: 'number'})} 
                />
            case 'boolean':
                return (
                    <div className="value-input-switch-container">
                        <AnimatePresence mode="wait">
                            {demoProps[propName] === true ? (
                                <motion.div 
                                    key={"boolean-true"}
                                    className="value-input-switch-option"
                                    onClick={handleSwitchBoolean}
                                    initial={{ opacity: 0, y: '1em' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: '-1em' }}
                                    transition={{ duration: 0.15 }}
                                >
                                    true
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key={"boolean-false"}
                                    className="value-input-switch-option"
                                    onClick={handleSwitchBoolean}
                                    initial={{ opacity: 0, y: '1em' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: '-1em' }}
                                    transition={{ duration: 0.15 }}
                                >
                                    false
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            case 'switch':
                return (
                    <div className="value-input-switch-container">
                        <AnimatePresence mode="wait">
                            {options?.map((option, index) => (
                                selectedOptionIndex === index ? (
                                    <motion.div 
                                        key={index} 
                                        className="value-input-switch-option"
                                        onClick={handleSwitchOptions}
                                        initial={{ opacity: 0, y: '1em' }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: '-1em' }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        {option}
                                    </motion.div>
                                ) : (
                                    null
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                )
            case 'color':
                return (
                    <div className="value-input-color-container">
                        <input 
                            className="value-input-color" 
                            type="color" 
                            value={String(demoProps[propName])} 
                            onChange={(e) => handleChange({e, propType: 'color'})} 
                        />
                    </div>
                )
            case 'slider':
                return (
                    <div className="value-input-slider-container">
                        <input 
                            className="value-input-slider" 
                            type="range" 
                            value={Number(demoProps[propName])} 
                            onChange={(e) => handleChange({e, propType: 'number'})}
                            {...(step !== undefined && { step })}
                            {...(min !== undefined && { min })}
                            {...(max !== undefined && { max })}
                        />
                        <input 
                            className="value-input-slider-value"
                            type="number"
                            value={Number(demoProps[propName])}
                            onChange={(e) => handleChange({e, propType: 'number'})}
                            {...(step !== undefined && { step })}
                            {...(min !== undefined && { min })}
                            {...(max !== undefined && { max })}
                        >
                        </input>
                    </div>
                )
        }
    }

    return (
        <div 
            className="value-input-container"
            style={{
                backgroundColor: inputType === 'color' || inputType === 'slider' ? 'transparent' : 'rgb(59, 59, 59)',
                // minWidth: inputType === 'number' ? '0' : '5rem',
            }}
        >
            {CreateInput()}
        </div>
    )
}

export default ValueInput;