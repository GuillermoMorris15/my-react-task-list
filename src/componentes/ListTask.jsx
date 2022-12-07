import Titulo from "./Header/header"
import ListaTareas from "./ListaTareas/listaTareas"
import Footer from "./footer/Footer"
import Menu from "./menu/Menu"


function ListTask() {
    return(
        <div>
            <Menu/>
            <br />
            <Titulo/>
            <ListaTareas/>
            <Footer/>
           
        </div>
    )
}
export default ListTask