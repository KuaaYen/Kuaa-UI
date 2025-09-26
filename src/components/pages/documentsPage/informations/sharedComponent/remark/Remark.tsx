import RemarkIcon from "../../../../../shared/icons/RemarkIcon";


const Remark = ({children, iconColor}: {children: React.ReactNode, iconColor?: string}) => {
    return (
        <div className="documents-page-component-demo-remark">
            <RemarkIcon iconColor={iconColor} />
            <span>
                {children}
            </span>
        </div>
    )
}

export default Remark;