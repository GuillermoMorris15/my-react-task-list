import './listaTareas.css';
import Tarea from '../Tarea/tarea';

function listaTareas () {
    return(
        <div className='listaTareas'>
            <center>
            <form>
              <input className='inputTarea' type='text' placeholder="Add your new todo"/>
              <button className='buttonTarea' type='submit'> + </button>
            </form>
            <br/>
            <div className='tareas'>
            
                <Tarea tarea="ir a comprar ropa nueva"/>
                <Tarea tarea="sacar a pasear a la mascota"/>
                
                <Tarea tarea="hacer trabajos en el dia"/>
                <Tarea tarea="jugar video juegos en la tarde"/>

            </div>
            </center>
        </div>
    )
    
}
export default listaTareas 