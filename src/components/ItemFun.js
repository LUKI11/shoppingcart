function ItemFun(props) {
    return ( 
        <>    
            <li className={props.isActive ? 'list-inline-item list-item text-center' : 'border border-danger list-inline-item list-item text-center'} >
                <div className="card" style={{width:"20rem"}}>
                  <img src={props.img} className="card-img-top" alt={props.name} />
                  <div className="card-body">
                    <h5 className="card-title">{props.name}|Price:{props.price}</h5>
                    <p className="card-text">
                        <button className='btn btn-primary' onClick={props.decreseItem(props.id)}>-</button>
                        <span className='text-secondary'>{props.number}</span>
                        <button className='btn btn-primary' onClick={props.addItem(props.id)}>+</button>
                    </p>
                    <a onClick={props.addToCart(props.id)} className={props.isActive? "btn btn-success": "btn btn-danger"}>{props.isActive ? "Add to Cart" : "Remove from Cart"}</a>
                  </div>
                </div>
            </li>       
        </>
     );
}

export default ItemFun;