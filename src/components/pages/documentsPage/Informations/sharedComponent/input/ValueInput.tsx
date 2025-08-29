import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface ValueInputProps<T> {
    demoProps: T,
    propName: keyof T,
    onChange: (props: T) => void,
    inputType: 'string' | 'number' | 'boolean' | 'switch',
    options?: string[],
    step?: number,
    min?: number,
    max?: number,
}


const ValueInput = <T,>({ 
    demoProps, 
    propName, 
    onChange, 
    inputType, 
    options,
    step,
    min,
    max
}: ValueInputProps<T>) => {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);


    const handleChange = ({e, propType = 'string'}: {e: React.ChangeEvent<HTMLInputElement>, propType?: 'string' | 'number'}) => {
        let newValue;
        if(propType === 'number') {
            newValue = Number(e.target.value);
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
        }
    }

    return (
        <div className="value-input-container">
            {CreateInput()}
        </div>
    )
}

export default ValueInput;