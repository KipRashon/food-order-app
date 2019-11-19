import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



const productContext = React.createContext();
    //Provider and the consumer

class Context extends Component {

    
    state ={
        originalOrders:null,
        orders:null,
        selectedOrder:null,
        

    }

    switchToCart = (id)=>{
        
        const {originalOrders:{orders}}= this.state;
        const selected = orders.find( item => item.id == id );
        this.setState({selectedOrder:selected});
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
            const {data:tempOrders} =res;
           this.setState(()=>{
                return {originalOrders:tempOrders}
           });
           this.displayRows();
        })
    }
    
    displayRows = ()=>{
        let {orders}= this.state.originalOrders;
        let names = orders.map((item)=>{
            return(
            
            <tr key={item.id} onClick={()=>this.switchToCart(item.id)}>
                <td>{item.name}</td>
                <td>{"+"+item.country_code+item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.created_at}</td>
                <td>{item.payment_details_status}</td>
                <td>
                    <Link to='/cartdetails'>
                    <button className="btn btn-success" onClick={()=>this.switchToCart(item.id)}>View</button>
                    </Link>
                </td>
              
            </tr>
            )
        });
        
        
        this.setState({orders:names});

    }

    render() {
       
       
        return (
            <productContext.Provider value ={{
                ...this.state,

            }}>
                
                {this.props.children}
            </productContext.Provider>
        )
    }
}

const Consumer = productContext.Consumer;


export {Context,Consumer};
