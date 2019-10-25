import React, { Component } from 'react'

 class dispatch extends Component {
    confirmDispatch=()=>{
        alert("Dispatch Made Succesfully");
    }
    render() {
        return (
            <div className="container">
            <h3>Dispatch the Food</h3>
            <div className="row">
                <div className="form-group col-md-6">
                    <input type="text" placeholder="Dispatched By" className="form-control"/>
                  </div>
                  <div className="form-group col-md-6">
                      <input type="text" placeholder="Name of Shipping Company" className="form-control"/>
                  </div>
                  <div className="form-group col-md-4">
                      <input type="text" placeholder="Food Dispatched" className="form-control"/>
                  </div>
                  <div className="form-group col-md-4">
                      <input type="text" placeholder="Quantity" className="form-control"/>
                  </div>
                  <div className="form-group col-md-4">
                        <input type="text" placeholder="Total Price" className="form-control"/>
                  </div>
                  
                  <div className="form-group col-md-12">
                  <button type="button" className="btn btn-success m-2 col-md-4" onClick ={this.confirmDispatch}>Dispatch</button>
                  <button type="button" className="btn btn-warning m-2 col-md-4" onClick ={this.props.prevStep}>Back</button>
                  </div>
            </div>
        </div>
        )
    }
}

export default dispatch
