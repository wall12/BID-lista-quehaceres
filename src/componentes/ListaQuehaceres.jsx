import React, { useEffect } from 'react'
import { useState } from 'react'
import Tareas from './Tareas';

const ListaQuehaceres = () => {
    const [tareas, setTareas] = useState([]);
    const [nuevatarea, setNuevatarea] = useState("");

    const handlenuevatarea= (e) =>{
        e.preventDefault();
        let auxi= [...tareas];
        auxi.push({ name: nuevatarea, status: false})
            setTareas([...auxi]);
            console.log("Tareas:", auxi);
            setNuevatarea("");  

    }

    const handleStatusChange= (value, idx)=>{
        let aux= [...tareas];
        aux[idx].status=value
        setTareas([...aux]);
    }

    const handleDeletetareas= (idx)=>{
        let aux = [...tareas];
        let filtered = aux.filter((value,index,array)=> index !==idx)
        setTareas([...filtered]);
    }



    useEffect(() => {
    console.log("TAREAS", tareas);
    }, [tareas])

    return (
        <div>
    <form onSubmit={handlenuevatarea}>
        <input type="text" value={nuevatarea} onChange= {(e)=> setNuevatarea(e.target.value)}/>
        <button className='addButton'>Add</button>
    </form>

    <ul>
        {tareas.map((item,idx,list)=>{
            return(
                <Tareas key={"tarea" + item + idx} {...item} handleStatus={handleStatusChange} index= {idx} handleDelete= {handleDeletetareas} />
            )
        })}
    </ul>


    </div>
  )
}

export default ListaQuehaceres