import Header from "../components/Header"
import ListCover from "../components/ListCover"

function Series() {
  return (
    <div>
        <Header message={"Popular series"}/>
        <ListCover type={"series"} />
    </div>
  )
}

export default Series