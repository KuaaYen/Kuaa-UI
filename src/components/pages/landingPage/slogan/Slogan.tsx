import CardPasteReady from './CardPasteReady';
import CardInteractive from './CardInteractive';
import useMediaTypeContext from '../../../../context/useMediaTypeContext';

const Slogan = () => {

    const mediaType = useMediaTypeContext();;
    // console.log(mediaType);

    return (
        <article 
            className='landing-page-slogan-block'
            style={{
                height: mediaType === 'pc' ? '700px' : '1000px'
            }}
        >
            <div 
                className='landing-page-slogan-block-content-wrapper'
                style={{
                    flexDirection: mediaType === 'pc' ? 'row' : 'column',
                    gap: mediaType === 'pc' ? '0px' : '100px',
                    transform: mediaType === 'pc' ? 'translateY(0)' : 'translateY(70px)'
                }}
            >
                <CardInteractive mediaType={mediaType} draggable={mediaType === 'pc' ? true : false}/>
                <div className='landing-page-slogan-and-text'>
                    &
                </div>
                <CardPasteReady mediaType={mediaType} draggable={mediaType === 'pc' ? true : false}/>
            </div>
        </article>  
    )
}

export default Slogan;