// import { motion } from 'motion/react';
import CardPasteReady from './CardPasteReady';
// import CardFree from './CardFree';
import CardInteractive from './CardInteractive';
// import Helicpoter from './Helicpoter';

const Slogan = () => {

    return (
        <article className='landing-page-slogan-block'>
            <div className='landing-page-slogan-block-content-wrapper'>
                <CardInteractive />
                <div className='landing-page-slogan-and-text'>
                    &
                </div>
                <CardPasteReady />
            </div>
        </article>  
    )
}

export default Slogan;