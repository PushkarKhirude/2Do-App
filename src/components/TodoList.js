import React,{useState} from 'react'

function Todolist(props) {

  const [status, setStatus] =  useState(false);

  function handleDoneButton(){
    setStatus(s => s ? false : true);
  }

  if(status){
    return (
      <li className="list-item done">
          {props.item}
          <span className='icons'>
          <i className="fa-solid fa-trash-can icon-delete" 
          onClick={e=>{
              props.deleteItem(props.index)
          }}></i>
          <button onClick={handleDoneButton}>Undo</button>
          </span>
      </li>
    )
  }
  else{
    return (
      <li className="list-item">
          {props.item}
          <span className='icons'>
          <i className="fa-solid fa-trash-can icon-delete" 
          onClick={e=>{
              props.deleteItem(props.index)
          }}></i>
          <button onClick={handleDoneButton}>Done</button>
          </span>
      </li>
    )
  }

  
}

export default Todolist