
import ImageBackgroundMainPage from '../widgets/general/background_image';
import Title from '../widgets/general/title';
import LogoImage from '../widgets/general/image_logo';
import HomeScreenComponent from '../widgets/home_screen/home_screen';
import Login from '../widgets/home_screen/login';
import '../styles/home_screen/info_icon.css';

const Home = () => {

    return (
        <>
            <Title position={'left'} />
            <LogoImage position={'left'} />
            <HomeScreenComponent />
            <ImageBackgroundMainPage page={'main'} />
            <Login />
        </>
    )
}

export default Home;