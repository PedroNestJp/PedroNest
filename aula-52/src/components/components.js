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
            <li> <Link to="/listProducts" > List Produtos </Link> </li>
            <li> <Link to="/products/create" >Create Products </Link> </li>
          </ul>
        </nav>
    )
}

export {Footer, Nav}