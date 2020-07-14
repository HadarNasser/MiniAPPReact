import React  from 'react';
import AddTask  from './AddTask';
class Todo extends React.Component{

    state = {
               Tasks:[]
          }

    
    componentDidMount(){
        this.setState({
            Tasks:[{id:1, task:'Task 1'},{id:2, task:'Task 2'},{id:3, task:'Task 3'}
    ]})
    
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
               
           return (
            <div key={id}>
          <li className="list-group-item" key={task.id}>{task.task} <button type="button" class="close" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                                          </button></li> 
            </div>
           )
           })
          }    
          </ul>
           </div>
               <div className="boreder4">  
           <AddTask/>
           </div>
         </div>
     
    )

    }



}

export default Todo;