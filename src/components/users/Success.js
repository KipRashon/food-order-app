import React, { Component } from 'react'

export class Success extends Component {
    render() {
        return (
            <div class="container">
               <h2 class="jumbotron"> Order made Succesfully</h2>
               <p class="lead">Delivery will be made immediately</p>
               <br/><br/>
               <div className="form-group col-md-12">
                  {/* <button type="button" className="btn btn-success m-2 col-md-4" onClick ={this.props.nextStep}>Next</button> */}
                  <button type="button" className="btn btn-warning m-2 col-md-4" onClick ={this.props.prevStep}>Back</button>
                  </div>
            </div>
        )
    }
}

export default Success
