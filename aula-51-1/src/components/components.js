import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <footer>
          <h3>  por Pedro Nest </h3>
        </footer>
    )
}

const Nav = () => {

    return(
        <nav>
          <ul>
            <li> <Link to="/" > Home </Link> </li>
            <li> <Link to="/produtos" > Produtos </Link> </li>
            <li> <Link to="/sobre" > Sobre </Link> </li>
          </ul>
        </nav>
    )
}

export {Footer, Nav}