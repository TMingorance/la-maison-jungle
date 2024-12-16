import "../styles/Banner.css"
import logo from "../assets/logo.png"

function Banner(){
    return <div className="lmj-banner">
                <img src={logo} alt="La Maison Jungle" className="lmj-logo" />
                <h1 className="lmj-title">La Maison Jungle</h1>
            </div>
}

export default Banner