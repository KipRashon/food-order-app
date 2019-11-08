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

  componentDidMount(){
    fetch("https://cors-anywhere.herokuapp.com/https://demo.kilimanjarofood.co.ke/api/v1/dispatch/orders",
    {
      headers: {
       
          "origin": "*",
          "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
          "preflightContinue": false,
          "optionsSuccessStatus": 204
      
      }
    }
    )
    .then(data =>{
        return data.json();
    })
    .then(res =>{
        let names = res.data.orders.map((item)=>{
            return(
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.delivery_address}</td>
                <td>{item.cart[0].product_name}</td>
                <td>{item.cart[0].description}</td>
                <td>{item.cart[0].quantity}</td>
            </tr>
            )
        })
        this.setState({names:names});
        
    })
} 
    render() {
      const {names }= this.state;
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
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                      <th>Delivery Address</th>
                      <th>Product Name</th>
                      <th>Description</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
        
                  <tbody>
                   
                    {names}
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
