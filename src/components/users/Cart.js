import React, { Component } from 'react'

export class cart extends Component {
    render() {
        return (
            <div className="container">
            <h3>View Cart</h3>
            <div className="card-body">
                <p className="lead">Name: Food 1</p>
                <p className="lead">Price: 100</p>
                <div className="row justify-content-center">
                  <div className="lead col-md-1">
                    Quantity
                  </div>
                  <div className="form-group col-md-1">
                    <input type="number" value="1" className="form-control"/>
                  </div>
                 
                </div>
                <div className="form-group col-md-12">
                  <button type="button" className="btn btn-success m-2 col-md-4" onClick ={this.props.nextStep}>Continue</button>
                  <button type="button" className="btn btn-warning m-2 col-md-4" onClick ={this.props.prevStep}>Back</button>
                  </div>
            </div>
          </div>
          
        )
    }
}

export default cart
