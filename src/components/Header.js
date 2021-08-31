import { TopBar, Logo } from '../styles/HeaderStyles'
import SWlogo from '../assets/logo.png'
export default function Header(){
    return(
        <TopBar>
            <Logo src={SWlogo} alt='logo'/>
        </TopBar>
    )
}

