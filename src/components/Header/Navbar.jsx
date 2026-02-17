import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <ul className="navbar-list">
            <li>Categorias</li>
            <li>Ofertas</li>
            <li>Cupones</li>
            <li>Supermercado</li>
            <li>Moda</li>
            <li className="mercado">
              <span>GRATIS</span>
              Mercado Play
            </li>
            <li>Vender</li>
            <li>Ayuda</li>
        </ul>
    </div>
  )
}

export default Navbar
