import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
    }
    state = { 

     }
    render() { 
        return ( 
            <React.Fragment>
                <li className={this.props.isActive ? 'list-inline-item list-item text-center' : 'border border-danger list-inline-item list-item text-center'} >
                    <div className="card" style={{width:"20rem"}}>
                      <img src={this.props.img} className="card-img-top" alt={this.props.name} />
                      <div className="card-body">
                        <h5 className="card-title">{this.props.name}|Price:{this.props.price}</h5>
                        <p className="card-text">
                            <button className='btn btn-primary' onClick={this.props.decreseItem}>-</button>
                            <span className='text-secondary'>{this.props.number}</span>
                            <button className='btn btn-primary' onClick={this.props.addItem}>+</button>
                        </p>
                        <a onClick={this.props.addToCart} className={this.props.isActive? "btn btn-success": "btn btn-danger"}>{this.props.isActive ? "Add to Cart" : "Remove from Cart"}</a>
                      </div>
                    </div>
                </li>
            </React.Fragment>
            
         );
    }
}
 
export default Item;