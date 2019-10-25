import React, { Component } from 'react'

 class Login extends Component {
    render() {
        return (
            <div className="container" align="center">
          <h3 className="text-center">Admin Login</h3>
          <div className="col-md-offset-4">
              <div className="form-group col-md-7">
                  <input type="text" className="form-control" placeholder="Enter Username"/>
                </div>
                
                <div className="form-group col-md-7">
                    <input type="password" className="form-control" placeholder="Enter Password"/>
                  </div>
                  <div className="form-group col-md-12">
                  <button type="button" className="btn btn-success m-2 col-md-4" onClick ={this.props.nextStep}>Login</button>
                  <button type="button" className="btn btn-warning m-2 col-md-4" onClick ={this.props.logout}>Back</button>
                  </div>
          </div>
        </div>
        )
    }
}

export default Login
