import React, { Component } from 'react'
import  {Consumer} from '../Context';
import CartItem from './CartItem';
export class CartDetails extends Component {
    
    render() {
        
        return (
            <Consumer>
            {(value)=>{
                if(value.selectedOrder ==null)
                {
                    return (
                        <h3 className="jumbotron">You did not select any order</h3>
                    )
                }
                else{

                
                const {cart,name,country_code,mobile,email,total,dispatch_status,created_at,
                delivery_address,delivery_drop_off_coordinate,delivery_contact_phone_number,delivery_locality,delivery_charge,delivery_country,
                payment_details_type,payment_details_reference,payment_details_processor_reference,payment_details_amount,payment_details_status,payment_details_phone_number,

                } = value.selectedOrder;
                return (
            <div className="container">
            <div className="row mb-3 text-center mt-3">
              <div className="card mb-4 box-shadow ml-2 col-md-5">
                <div className="className=">
                  <h4 className="my-0 font-weight-normal">Basic Details</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                   <li><strong className="align-self-start">Name:</strong> {name}</li>
                    <li><strong className="align-self-start">Phone Number:</strong> {"+"+country_code+mobile}</li>
                    <li><strong className="align-self-start">Email:</strong> {email}</li>
                    <li><strong className="align-self-start">Total Amount:</strong> Ksh.{total}</li>
                    <li><strong className="align-self-start">Dispatch Status:</strong> {dispatch_status==1?"Not Dispatched":"Dispatched"}</li>
                    <li><strong className="align-self-start">Ordered At:</strong>{created_at}</li>
                  </ul>
                </div>
              </div>
              <div className="card mb-4 box-shadow ml-2 col-md-5">
                <div className="className=">
                  <h4 className="my-0 font-weight-normal">Delivery Details</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li><strong className="align-self-start"> Address:</strong> {delivery_address}</li>
                    <li><strong className="align-self-start"> Drop Off Cordinate:</strong> {delivery_drop_off_coordinate}</li>
                    <li><strong className="align-self-start"> Contact Phone Number:</strong> {delivery_contact_phone_number}</li>
                    <li><strong className="align-self-start"> Locality:</strong> {delivery_locality}</li>
                    <li><strong className="align-self-start"> Charge:</strong> {delivery_charge}</li>
                    <li><strong className="align-self-start"> Country:</strong> {delivery_country}</li>
                  </ul>
                </div>
              </div>
              <div className="card mb-4 box-shadow ml-2 col-md-5">
                <div className="className=">
                  <h4 className="my-0 font-weight-normal">Payment Details</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                <li><strong className="align-self-start">Payment Mode:</strong> {payment_details_type}</li>
                    <li><strong className="align-self-start">Payment  Reference:</strong> {payment_details_reference}</li>
                    <li><strong className="align-self-start">Payment  Processor Reference:</strong> {payment_details_processor_reference}</li>
                    <li><strong className="align-self-start">Payment Amount:</strong> {payment_details_amount}</li>
                    <li><strong className="align-self-start">Payment Status:</strong> {payment_details_status}</li>
                    <li><strong className="align-self-start">Payment Phone Number:</strong> {payment_details_phone_number}</li>

                  </ul>
                </div>
              </div>

              <div className="card mb-4 box-shadow ml-2 col-md-5">
                <div className="className=">
                  <h4 className="my-0 font-weight-normal">Cart</h4>
                </div>
                <Consumer>
                {(value)=>{
                    return value.selectedOrder.cart.map(
                        product=>{
                            return <CartItem product={product}/>
                        }
                    )
                }}
                </Consumer>
              </div>
            </div>
      
          </div>
              )
                }
            }}
                
          </Consumer>
        )
    }
}

export default CartDetails
