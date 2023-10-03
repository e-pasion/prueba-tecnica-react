import Header from "../components/Header"
import CategoryCard from "../components/CategoryCard"
import { NavLink } from "react-router-dom"
function Inicio() {
  return (
    <div>
        <Header message={"Popular titles"}/>
        <div className="mx-10 mt-10 md:mx-28 flex space-x-4">
            <NavLink to={"/series"}>
            <CategoryCard  message={"SERIES"}/>
            <p>Popular Series</p>
            </NavLink>
            <NavLink to={"/peliculas"}>
            <CategoryCard message={"MOVIES"}/>
        <p>Popular Movies</p>
            </NavLink>

        </div>


    </div>
  )
}

export default Inicio