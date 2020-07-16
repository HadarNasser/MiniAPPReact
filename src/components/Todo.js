import React  from 'react';
import {v1 as uuid}  from 'uuid';
import AddTask  from './AddTask';
class Todo extends React.Component{
 
  constructor(props) {
    super(props)
  
    this.addNewTask = this.addNewTask.bind(this);
  }
      
 // miniscule
    state = {
               Tasks:[]
          }

    
    componentDidMount(){
        this.setState({
            Tasks:[{id:1, task:'Task 1'},{id:2, task:'Task 2'},{id:3, task:'Task 3'}
    ]})
    
    }

    addNewTask=(newTask)=>{
         //miniscule
      var Tasks = this.state.Tasks
      Tasks.push({id:uuid(),task:newTask})
        this.setState({Tasks: Tasks})
      }

      handleRemove=(id)=>{
           // index not id
        console.log(id)
        var Tasks = this.state.Tasks
        if (id !== -1) {
          Tasks.splice(id, 1);
          this.setState({Tasks: Tasks});
        }
         

      }

    render(){
    return(
           
        <div className="boreder0">

                <div className="boreder1">
                <h5>You Have {this.state.Tasks.length} TODOS</h5>
                </div>
                  <div className="boreder2">

                  <ul className="list-group">
              {
           this.state.Tasks.map((task,id)=>{
                             // index not id
           return (
            <div key={id}>
          <li className="list-group-item" key={task.id}>{task.task} <button type="button" class="close" onClick={()=>this.handleRemove(id)} aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                                          </button></li> 
            </div>
           )
           })
          }    
          </ul>
           </div>
               <div className="boreder4">  
           <AddTask addNewTasks={this.addNewTask}/>
           </div>
         </div>
     
    )

    }



}

export default Todo;
