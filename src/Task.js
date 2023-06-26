import './App.css';
 export const Task=(props)=>{
    return(
      <div className='todo-item'>
        <h4 style={{color:props.bool?"green":"black"}}>{props.newtask}  <button onClick={()=>props.deletetask(props.id)}>X</button>  <button onClick={()=>props.green(props.id)}>Done</button></h4>
        
      </div>
    )
  }