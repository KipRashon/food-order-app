import React, { Component } from 'react'

export class foods extends Component {
    render() {
        return (
            <div className="container-fluid">
              <div class="justify-col-md-4 float-right">
              <button class='btn ' style ={styles.button} onClick={this.props.login}>Admin Login</button>
          
              </div>
                  <h3>Available Food</h3>
              <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Picture</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
          
                    <tbody>
                      <tr>
                          <td>1</td>
                          <td>Food 1</td>
                          <td><img src=""  alt="image here"/></td>
                          <td>100</td>
                          <td><button className="btn btn-info "  onClick ={this.props.nextStep}>Order Now</button></td>
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
      backgroundColor:'blue',
      color:'white',
      width:150
  }
}


export default foods
