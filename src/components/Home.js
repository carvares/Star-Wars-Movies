import { Background } from "../styles/HomeStyles"
import Logo from "../assets/logo.png"
export default function Home(){
    return(
        <Background>
            <img src={Logo}/>
            <form>
                <input placeholder="Buscar filme"/>
            </form>
        </Background>
    )
}
