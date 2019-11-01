import React, { Component } from 'react'

export class orders extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      names:[],
      isLoaded:false
    }
  }

  componentDidMount()
  {
    fetch('https://www.getpostman.com/collections/8cd41b2c738ac158c06f')
    .then(results=>{
      return results.json();
    })
    .then(data=>{
      let name = data.results.map((nm) =>{
        return (
          <div key={nm.results}>
            <p>nm.name</p>
          </div>
        );
      })
    })
  }
    render() {
        return (
            <div className="container-fluid">
                 <div class="justify-col-md-4 float-right">
              <button class='btn ' style ={styles.button} onClick={this.props.logout}>Logout</button>
          
              </div>
            <h3>Foods Ordered</h3>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Picture</th>
                      <th>@</th>
                      <th>Quantity</th>
                      <th>Cost</th>
                      <th>Action</th>
                    </tr>
                  </thead>
        
                  <tbody>
                    <tr>
                        <td>1</td>
                        <td>Food 1</td>
                        <td><img src=""  alt="image here"/></td>
                        <td>100</td>
                        <td>3</td>
                        <td>300</td>
                        <td><button className="btn btn-info " onClick ={this.props.nextStep}>Dispatch Now</button></td>
                    </tr>
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
