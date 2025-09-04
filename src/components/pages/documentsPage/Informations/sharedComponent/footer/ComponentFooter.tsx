import BulletPointsIcon from "./BulletPointsIcon";

const ComponentFooter = () => {
    return (
        <div 
            className="documents-page-component-footer"
        >
            <div className="footer-decoration-line"></div>
            <div className="footer-text-container">
                <BulletPointsIcon />
                See full project on &nbsp;
                <a 
                    href='https://github.com/KuaaYen/Kuaa-UI'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="highlight-link-btn"
                    // title={link.title}
                >
                    Github
                </a>
            </div>
            <div className="footer-text-container">
                <BulletPointsIcon />
                Created by &nbsp;
                <a 
                    href='https://github.com/KuaaYen/Kuaa-UI'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="highlight-link-btn"
                    // title={link.title}
                >
                    Ian Chen
                </a>
            </div>
        </div>
    )
}

export default ComponentFooter;