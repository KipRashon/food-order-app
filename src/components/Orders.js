import React, { Component } from 'react';
import  {Consumer} from '../Context';

export class orders extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      names:[],
      isLoaded:false,
      order_id:null
    }
  }

    render() {
      
        return (
            <div className="container-fluid">
                
            <h3>Foods Ordered</h3>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                      <th>Created At</th>
                      <th>Payment Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
        
                  <tbody>
                  <Consumer>
                                {(value)=>{
                                   return (value.orders)
                                }}
                    </Consumer>
                  </tbody>
                </table>
              </div>
              
          </div>
        )
    }
}

const styles = {
  button:{
      margin:15,
      borderRadius:50,
      backgroundColor:'red',
      color:'white',
      width:150
  }
}

export default orders
