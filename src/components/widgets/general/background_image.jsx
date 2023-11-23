import backgroundmain from '../../../assets/backgroundmain.svg'
import backgroundpermits from '../../../assets/backgroundpermits.svg'
import '../../styles/general/background_image.css'

const ImageBackgroundMainPage = ({ page }) => {
    const imagePage = `${page === "main" ? backgroundmain : backgroundpermits}`;
    return (
        <img className='main-page-background' src={imagePage} alt='background' />
    );
}

export default ImageBackgroundMainPage;