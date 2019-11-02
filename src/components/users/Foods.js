import React, { Component } from 'react'

export class foods extends Component {
  constructor()
  {
      super();
      this.state = {
          foods:[]
      };
  }

  componentDidMount(){
      fetch("https://demo.kilimanjarofood.co.ke/api/v1/dispatch/orders",
      {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }
      )
      .then(res => res.json())
      .then(json=>{
        this.setState({
          foods:json.data
        })
      })
      .catch(error =>
        alert("There was an error"+error)
         );
      ;
    
  }
 
    render() {
      var {foods} = this.state;
      console.log(foods);
        return (
            <div className="container-fluid">
              <div className="justify-col-md-4 float-right">
              <button className='btn ' style ={styles.button} onClick={this.props.login}>Admin Login</button>
          
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
                          <td>100</td>                          <td><button className="btn btn-info "  onClick ={this.props.nextStep}>Order Now</button></td>
                      </tr>
                      
                      <ul>
                        {
                          foods.map(item=>(
                            <li key={item.id}>
                              {item.name}
                            </li>
                          ))
                        }
                      </ul>
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
