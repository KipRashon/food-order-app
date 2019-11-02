import React, {Component} from 'react';
import Foods from './components/users/Foods';
import Cart from './components/users/Cart';
import Order, { order } from './components/users/Order';
import Success from './components/users/Success';
import Orders from './components/admin/Orders';
import Dispatch from './components/admin/Dispatch';
import Login from './components/admin/Login';

export class UserForm extends Component
{
    

        state = {
            admin:false,
            step:1,
            name: '',
            location: '',
            phoneNumber: '',
            email: '',
            idNumber: '',
            
        }
       
    

  

    // proceed to next step 
    nextStep = () =>{
        const { step } = this.state;
        this.setState(
            {
                step:step+1
            }
        );
    }

    //go back to prev step
    prevStep = () =>{
        const { step } = this.state;
        this.setState(
            {
                step:step-1
            }
        );
    }

    //loggin out 
    logout=()=>{
        const{step}=this.state;
        const{admin}=this.state;
        this.setState(
            {
                step:1,
                admin:false
            }
        );
    }

    //handle fields change 
    handleChange = input => e =>{
        this.setState({[input]:e.target.value})
    }
    //switch admin 
    switchAdmin =()=>{
        const{admin} = this.state;
        this.setState(
            {
                admin:!admin
            }
        );
    }
    render()
    {
        const {step} = this.state;
        const {admin}=this.state;
        const {name,location,phoneNumber,email,idNumber}= this.state;
        const values = {name,location,phoneNumber,email,idNumber}
        if(admin)
        {
            switch(step)
        {
            case 1:
                return (
                    <Login 
                    nextStep = {this.nextStep}
                    logout={this.logout} 
                    handleChange = {this.handleChange}
                    values ={values}
                    />
                );
            case 2:
                return (
                    <Orders
                    prevStep = {this.prevStep}
                    logout={this.logout} 
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values ={values}
                    />
                );
            case 3:
                return (
                    <Dispatch
                    prevStep = {this.prevStep} 
                    nextStep = {this.nextStep}
                    values ={values}
                    />
                );
           
        }
        }
        else{
        switch(step)
        {
            case 1:
                return (
                    <Foods 
                    nextStep = {this.nextStep}
                    login ={this.switchAdmin}
                    handleChange = {this.handleChange}
                    values ={values}
                    />
                );
            case 2:
                return (
                    <Cart
                    prevStep = {this.prevStep} 
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values ={values}
                    />
                );
            case 3:
                return (
                    <Order
                    prevStep = {this.prevStep} 
                    nextStep = {this.nextStep}
                    values ={values}
                    />
                );
            case 4:
                return (
                    <Success
                    prevStep = {this.prevStep} 
                    nextStep = {this.nextStep}
                    values ={values}
                    />
                );
        }
        }
    }
}
export default UserForm