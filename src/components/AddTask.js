import React,{useState} from 'react'

const AddTask=({addNewTasks})=>{

  const [AddTaskss,setAddTask]=useState('')

  const changeSub=(e)=>{
    e.preventDefault()//une seule fois
    if(AddTaskss!=="") {
      addNewTasks(AddTaskss)
    }else{
      alert('entre caratere')
    }     
    setAddTask('')
      
  } 
      return (

        <form onSubmit={changeSub}>

        <div className="input-group mb-3">
        <input type="text" className="form-control ml-2"  placeholder="ENTRE ITEM" value={AddTaskss} onChange={(e)=>setAddTask(e.target.value)}/>
        <div className="input-group-append ml-2">
          <button className="btn btn-outline-secondary mr-2" type="submit">Submit</button>
        </div>
        </div>

        </form>
           


      )
    }

export default AddTask;
