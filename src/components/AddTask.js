import React from 'react'

class AddTask extends React.Component {


    render() {

      return (
          <form className="form-inline">
           <div className="form-group mx-sm-2 mb-2">
          <input type="text"  className="form-control"  placeholder="ENTRE TASK"/>
           </div>
           <button type="submit" className="btn btn-primary mb-2">Confirm</button>
          </form>
      )
    }
   
}
export default AddTask;
