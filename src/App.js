import './App.css';
import {Task} from './Task'
import { useState,useRef } from 'react';
function App() {
  const [value, setValue] = useState("");
  const [list,setlist]=useState([])
  const [task,settask]=useState('')
  const inputRef = useRef();
  const handlechange=(event)=>{
    settask(event.target.value);
    setValue(event.target.value);
  }
  const addtask=()=>{
    inputRef.current.focus()
    const addlist={
      id:list.length===0?1:list[list.length-1].id+1,
      newtask:task,
      bool:false
    }
    setlist([...list,addlist])
    setValue(' ');
  }
  const deletetask=(id)=>{
    const newlist=list.filter((taskname)=>{
      return taskname.id!==id;
    }
    )
    setlist(newlist)
  }
  const green=(id)=>{
    setlist(
    list.map((li)=>
        {
          if (li.id===id)
          {
            return {...li,bool:true};
          }
          else{
            return li;
          }
        }
      )
    )
  }
  return (
    <div >
      
      <div className='addingtask'>
      <h1 style={{fontSize:"50px"}}>To-Do List</h1>
        <input type='text'  style={{
          width: "500px",
          fontSize: "38px",
        }} 
        ref={inputRef}
        value={value} placeholder="task" onChange={handlechange} ></input>
        <button  style={{
          width: "200px",
          fontSize: "38px",
        }} 
        onClick={addtask}>Add Task</button>
      </div>
      <div className='todo-list'>
      <div className='todo-item'>
      
        <div className='showtask'>
          {list.map((task)=>{
            return (<Task newtask={task.newtask} id={task.id} bool={task.bool} deletetask={deletetask} green={green}/>)
          })
          }
        </div>
      
      </div>
      </div>
    </div>
    
    
    
  );
}

export default App;
