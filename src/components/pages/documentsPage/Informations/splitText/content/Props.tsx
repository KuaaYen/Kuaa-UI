import { ReactNode } from "react";
import PropsTable from "../../sharedComponent/table/PropsTable";

interface tableProps {
    headers: string[];
    data: ReactNode[][]; 
}
const Props = ({headers, data}: tableProps) => {

    return (
        <section className="documents-page-component-section">
            <div className='documents-page-component-section-title'>
                Props
            </div>
            <PropsTable headers={headers} data={data} />
        </section>
    )
}

export default Props;