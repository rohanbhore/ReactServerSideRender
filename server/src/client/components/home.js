import React, { Component } from 'react';
import UUID from 'uuid';
export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log("Home constructor");
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete =this.onDelete.bind(this);
    this.onEdit =this.onEdit.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.state = {
        newTask:'',
        id:'',
        toDoData:(this.props)?this.props.toDoData:[]
        // toDoData: [
        //   {
        //     "id": "1",
        //     "task": "get milk",
        //     "status": "Pending",
        //     "isDeleted": "false"
        //   },
        //   {
        //     "id": "2",
        //     "task": "meeting",
        //     "status": "Pending",
        //     "isDeleted": "false"
        //   },
        //   {
        //     "id": "3",
        //     "task": "Buy News paper",
        //     "status": "Completed",
        //     "isDeleted": "false"
        //   }
        // ]
      }
  }
  
  onChange(e){
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
    
         ...this.state.newTask,
        [name]:value
     
    })
  }

  onDelete(id){
     let data =  this.state.toDoData;
    let filterData = data.filter((element)=>{
      return element.id != id
    })
    this.setState({
      toDoData:filterData,
    })
  }

  changeStatus(id){
    let data =  this.state.toDoData;
    data.forEach((element, index) => {
      if (element.id === id) {
        if(element.status == "Pending"){
          element.status ="Completed"
        }
        else if(element.status == "Completed"){
          element.status ="Pending"
        }
      };
    });
    this.setState({
      toDoData:data,
    })
  }

  onEdit(id){
    let data =  this.state.toDoData;
    let filterData = data.filter((element)=>{
      return element.id == id
    })
    this.setState({
      newTask:filterData[0].task,
      id:id
    })
  }
  onSubmit(id){
    let data =  this.state.toDoData;
    if(id){
      data.forEach((element, index) => {
        if (element.id === id) {
         element.task = this.state.newTask
        };
      });
      this.setState({
        toDoData:data,
       newTask:'',
      })
    }
    else
    {
      let id = UUID();
      let task =this.state.newTask;
      let status = "Pending";
      let isDeleted ="false";
      let newData =[];
      newData ={
        id:id,
        task:task,
        status:status,
        isDeleted:isDeleted
      }
      data.push(newData);
      this.setState({
        toDoData:data
      })
    }

  }
  render() {
    let counter =0;
    let taskData = this.state.toDoData.map((element) => {
      return (
        <tr key={element.id}>
          <td>{element.task}</td>
          <td onClick={this.changeStatus.bind(this,element.id)}>{element.status}</td> 
          <td>
            <input name={element.id} type="button" value="Delete" onClick={this.onDelete.bind(this,element.id)}/>
            &nbsp; &nbsp;
            <input name={element.id} type="button" value="Edit" onClick={this.onEdit.bind(this,element.id)}/>
          </td>
        </tr>
      )
    })
    
    return (
      <div>
        <input type="text" name="newTask" placeholder="Enter  Your task" onChange={this.onChange} value={this.state.newTask || ''}  autoComplete="off" ></input>
       &nbsp;
        <input type="button" className = "btn btn-info" name="addTask" value="Add" onClick={this.onSubmit.bind(this,this.state.id)}></input>


        <h2>Tasks</h2>
        <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>TASK</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {taskData}
          </tbody>
        </table>
        </div>
        {this.props.name}
      </div>
    )
  }


}