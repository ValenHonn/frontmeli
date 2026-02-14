import Navbar from './Navbar.jsx'
import './Header.css'

function Header() {
    return(
    <>
        <header className="header">
            <div className="logo">
                <img className="imagen-logo" src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.9.0/mercadolibre/logo_large_plus@2x.webp"></img>
            </div>
            <div className="search-bar">Search Bar</div>
            <div className="envio-gratis">Envio Gratis</div>
            <div className="enviar">
                <img className="logo-ubi" src="/logoubi.svg"/>

                <div className="texto">
                    <p>Enviar a</p>
                    <p>Chaco 3500</p>
                </div>
            </div>
            <div className="navbar">NavBar</div>
            <div className="otras-nav">otras nav</div>
        </header>
    </>
    )
}

export default Header


