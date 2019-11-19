import React, { Component } from 'react'

export class CartItem extends Component {

    render() {
        const {quantity,price,accompaniment_id,product_name,description,product_attribute_accompaniment, product_attribute_size,product_attribute_price} = this.props.product;
        console.log(this.props.product);
        return (
            <div className="card-body">
            <h5 className="card-title pricing-card-title">{product_name}</h5>
            <ul className="list-unstyled mt-3 mb-4">
              <li><strong className="align-self-start">Product Name: </strong> {product_name}</li>
              <li><strong className="align-self-start">Product Price: </strong> {price}</li>
              <li><strong className="align-self-start">Quantity: </strong> {quantity}</li>
              <li><strong className="align-self-start">Description: </strong> {description}</li>
              <li><strong className="align-self-start">Product Accompaniment: </strong> {product_attribute_accompaniment}</li>
              <li><strong className="align-self-start">Product Attribute Size: </strong> {product_attribute_size}</li>
              <li><strong className="align-self-start">Product Attribute Price: </strong> {product_attribute_price}</li>
            </ul>
            
          </div>
        )
    }
}

export default CartItem
