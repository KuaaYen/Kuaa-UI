import { ReactNode } from 'react';
import useMediaTypeContext from '../../../../../../context/useMediaTypeContext';

interface FlexibleTableProps {
    headers: string[];
    data: ReactNode[][]; 
}

const PropsTable = ({ headers, data }: FlexibleTableProps) => {
    const mediaType = useMediaTypeContext();

    return (
        // mobile模式要記得調整max-width
        <article 
            className="documents-page-component-props-table-container"
            style={{
                maxWidth: mediaType === 'pc' ? '70dvw' : '90dvw',
            }}
        >
            <table className="documents-page-component-props-table">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={`header-${index}`}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={`row-${rowIndex}`}>
                            {headers.map((_, colIndex) => (
                                <td key={`cell-${rowIndex}-${colIndex}`}>
                                    {row[colIndex]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </article>
    )
}

export default PropsTable;