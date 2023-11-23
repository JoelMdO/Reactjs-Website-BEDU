import ImageBackgroundMainPage from '../widgets/general/background_image';
import Title from '../widgets/general/title';
import LogoImage from '../widgets/general/image_logo';
import Tower from '../widgets/permits_screen/tower';
import Logout from '../widgets/permits_screen/logout';

const PermitsPage = () => {

    return (
        <>
            <Title position="right" />
            <LogoImage position="right" />
            <Tower type="Mexico" />
            <Tower type="France" />
            <Tower type="India" />
            <Tower type="China" />
            <Tower type="Morocco" />
            <Tower type="Argentina" />
            <Tower type="Canada" />
            <Tower type="Russia" />
            <Logout />
            <ImageBackgroundMainPage />
        </>
    )
}

export default PermitsPage;