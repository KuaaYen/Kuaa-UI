// import useMediaTypeContext from "../../../../../../../context/useMediaTypeContext";

interface LinkButtonsProps {
    links: {
        text: string;
        title: string;
        link: string;
    }[];
}

const LinkButtons = ({links}: LinkButtonsProps) => {

    // const mediaType = useMediaTypeContext();
    return (
        <div className='documents-page-link-buttons-container'>
            {links.map((link, index) => (
                <a 
                    key={link.text + '_' + index}
                    href={link.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='documents-page-link-button'
                    title={link.title}
                >
                    {link.text}
                </a>
            ))}
        </div>
    )
}

export default LinkButtons;