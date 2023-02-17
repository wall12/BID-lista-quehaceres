import React from 'react'

const Tareas = (props) => {

  return (
    <>
            <p> {props.status === true?
            <s>{props.name}</s> 
        :
        props.name}
                <input type= "checkbox"  checked={props.status} onChange= {(e)=>props.handleStatus(e.target.checked,props.index)}/>
                <button className='deleteButton' onClick={(e)=> props.handleDelete(props.index)}>Delete</button>
            </p>
    </>
  )
}

export default Tareas