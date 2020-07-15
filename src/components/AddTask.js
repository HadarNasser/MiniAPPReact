import React,{useState} from 'react'

const AddTask=({addNewTasks})=>{

  const [AddTaskss,setAddTask]=useState('')

  const changeSub=(e)=>{
    if(AddTaskss!=='') {
      e.preventDefault()
      addNewTasks(AddTaskss)
    }else{
      e.preventDefault()
      alert('entre caratere')
    }     
    setAddTask('')
      
  } 
      return (

       

          <form className="form-inline" onSubmit={changeSub}>
           <div className="form-group mx-sm-2 mb-2">
          <input type="text"  className="form-control" value={AddTaskss}  placeholder="ENTRE TASK" onChange={(e)=>setAddTask(e.target.value)}/>
           </div>
           <button type="submit" className="btn btn-primary mb-2">Confirm</button>
          </form>
      )
    }


export default AddTask;
