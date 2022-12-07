import { OrderedList } from "@chakra-ui/react"
import Menu from "./menu/Menu"
// import {
//     ListItem,
//     OrderedList
//   } from '@chakra-ui/react'

function SobreNosotros () {

    return(
        <div>
           <Menu/>
            <h2>Sobre Nosotros</h2>
            <strong>Descripcion</strong>
            <p>listas de tareas es una forma facil y divertida de escribir y realixar todas tus tareas.</p>
            <strong>Funciones</strong>
            <OrderedList>
            <ol>
                <li>Guarda edita muestra y elimina tareas.</li>
                <li>las tareas pueden cambiar y variar segun tu gusto.</li>
                <li>puedes saber la cantidad de tareas que tienes pendiente.</li>
                <li>Es muy facil de usar.</li>
            </ol>
            </OrderedList>


        </div>
        
    )
}

export default SobreNosotros