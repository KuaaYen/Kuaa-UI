import { useNavigate } from "react-router-dom";
import StarIcon from "./icons/starIcon";

const Footer = () => {

    const navigate = useNavigate();
    // const location = useLocation();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        if(path === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        navigate(path);
        
    }

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <section className="footer-info">
                    <p className="footer-info-copyright">© 2025 KuaaUI</p>
                    <p className="footer-info-license">License under MIT + Commons Clause</p>
                    <div className="footer-info-made-by">
                        Created by : 
                        <StarIcon spinDirection="clockwise" />
                        <a 
                            className="footer-info-made-by-name"
                            href="https://kuaayen.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Ian Chen</a>
                        <StarIcon spinDirection="counter-clockwise" />
                    </div>
                </section>
                <section className="footer-links">
                    <a className="footer-links-item" onClick={(e) => handleLinkClick(e, '/')}>Home</a>
                    <a className="footer-links-item" onClick={(e) => handleLinkClick(e, '/documents')}>Documents</a>
                    <a className="footer-links-item" onClick={(e) => handleLinkClick(e, '/arts')}>Arts</a>
                    <a className="footer-links-item" href="https://github.com/KuaaYen/Kuaa-UI" target="_blank" rel="noopener noreferrer">Github</a>
                </section>
            </div>
        </footer>
    )
}

export default Footer;