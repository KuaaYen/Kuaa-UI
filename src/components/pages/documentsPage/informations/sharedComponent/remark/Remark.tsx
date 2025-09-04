import RemarkIcon from "../../../../../shared/icons/RemarkIcon";


const Remark = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="documents-page-component-demo-remark">
            <RemarkIcon />
            {children}
        </div>
    )
}

export default Remark;