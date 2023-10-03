import Header from "../components/Header"
import ListCover from "../components/ListCover";

 function Peliculas() {
    


  return (
    <div>
        <Header message={"Popular movies"}/>
        <ListCover type={"movie"} />
    </div>
  )
}

export default Peliculas