import React ,{useState,useEffect}  from 'react';
import {v1 as uuid}  from 'uuid';
import AddTask  from './AddTask';


const Todo =() =>{


  const [tasks, setTasks]=useState([])

  useEffect(() => {

    setTasks([...tasks,{id:1, task:'Task 1'},
    {id:2, task:'Task 2'},
    {id:3, task:'Task 3'}])
  },[])
  
   const addNewTask=(newTask)=>{

    setTasks([...tasks, {id:uuid(),
      task:newTask}])
  
    }

    const handleRemove = (id) =>{
      
      setTasks(tasks.filter(item => item.id !== id));

    }

      //Return index array
    /*  var commentIndex = tasks.findIndex(function(c) { 
          return c.id == id; 
      });*/

    const handleEdit=(id,editTask)=>{
      
      var person = prompt("Please enter your Edit",editTask);
      if(person!==""){
        setTasks(
          tasks.map(item => 
              item.id === id 
              ? {...tasks, task : person} 
              : item 
      )) 

      }else{
        alert('entre caratere')
      }         
    }

    const MyTasks = tasks.map((task,index)=>{
               
      return (
       <div key={index}>
     <li className="list-group-item todo-list-size" key={task.id}>{task.task}  

     <button type="button" class="btn btn-outline-info float-sm-right"  onClick={()=>handleEdit(task.id)}>Edit</button>

      <button type="button" class="close mr-2"  aria-label="Close"   onClick={()=>handleRemove(task.id)}>
                              <span aria-hidden="true">&times;</span>
                                     </button>   
                                     </li> 
       </div>
      )
      })

    return(
           
        <div className="todo-container">

                <div className="todo-header">
                <h5>You Have {tasks.length} TODOS</h5>
                </div>
                  <div className="list-todo-size">

                  <ul className="list-group">
                
                       {MyTasks}
                
                     </ul>
           </div>
           <div className="todo-footer">

           <AddTask addNewTasks={addNewTask}/>
           </div>
           
         </div>
     
    )

    }
export default Todo;