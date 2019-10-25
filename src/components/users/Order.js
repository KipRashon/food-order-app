import React, { Component } from 'react'

export class order extends Component {
    render() {
        return (
            <div className="container">
            <h3>Fill Out Checkout</h3>
            <div className="row">
                <div className="form-group col-md-6">
                    <input type="text" placeholder="Enter Full Name" className="form-control"/>
                  </div>
                  <div className="form-group col-md-6">
                      <input type="text" placeholder="Enter Your Location" className="form-control"/>
                  </div>
                  <div className="form-group col-md-4">
                      <input type="text" placeholder="Enter Phone Number" className="form-control"/>
                  </div>
                  <div className="form-group col-md-4">
                      <input type="text" placeholder="Enter Email" className="form-control"/>
                  </div>
                  <div className="form-group col-md-4">
                        <input type="text" placeholder="Enter Id Number" className="form-control"/>
                  </div>
                  <div className="form-group col-md-12">
                  <button type="button" className="btn btn-success m-2 col-md-4" onClick ={this.props.nextStep}>Done</button>
                  <button type="button" className="btn btn-warning m-2 col-md-4" onClick ={this.props.prevStep}>Back</button>
                  </div>
            </div>
          </div>
        )
    }
}

export default order
