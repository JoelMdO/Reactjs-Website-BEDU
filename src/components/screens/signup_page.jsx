import BackgroundSignup from '../../assets/backgroundsignup.svg'
import LogoImage from '../widgets/general/image_logo';
import SignupTextField from '../widgets/signup/signup_textfield';



const SignUpPage = () => {
    return (
        <>
            <LogoImage position={'right'} />
            <SignupTextField />
            <img className='main-page-background-signup' src={BackgroundSignup} alt='background' />
        </>
    )
}

export default SignUpPage;