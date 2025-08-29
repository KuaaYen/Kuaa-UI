import CopyIcon from "./CopyIcon";

const CopyButton = ({data}: {data: string}) => {

    return (
        <button className="documents-page-component-copy-btn">
            <CopyIcon data={data} />
        </button>
    )
}

export default CopyButton;