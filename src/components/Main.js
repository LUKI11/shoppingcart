
import axios from 'axios'
import fruits from  '../data/data.json'
import lodash from 'lodash'
import React, { useEffect, useRef, useState } from 'react';
import ItemFun from './ItemFun';

function Main(props) {
    const [fruit, setFruit] = useState(fruits);
    const [total, setTotal] = useState(0);

    let isUpdate = useRef(false);

    // live server fetch data
    // useEffect(() => {
    //     fetch('../data/data.json').then((res) => {
    //         return res.json;
    //     }).then((res) => {
    //         setFruit(res.data)
    //     })
    // },[])

    
    useEffect(() => { 
        console.log(isUpdate.current)
        if (isUpdate.current) {
            computeAll();
        }
    },[fruit])

    let decreseItem = (id) => {
        return () => {
            let fruitClone = lodash.cloneDeep(fruit);
            let item = fruitClone.find(val => val.id === id);
            if (item.number > 1) {
                item.number--;
            }
            setFruit(fruitClone);
        }
    }

    let addItem = (id) => {
        return () => {
            let fruitClone = lodash.cloneDeep(fruit);
            let item = fruitClone.find(val => val.id === id);
            item.number++;
            setFruit(fruitClone);
        }
    }

    let addToCart = (id) => {
        return () => {
            let fruitClone = lodash.cloneDeep(fruit);
            let item = fruitClone.find(val => val.id === id);
            item.isActive = !item.isActive;
            setFruit(fruitClone);
            isUpdate.current = true
        }
    }

    let computeAll = () => {
        let selectedFruits = fruit.filter(item => item.isActive === false);
        // let all = 0
        // selectedFruits.forEach(item => {
        //     all+=(item.price*item.number)
        // })
        let all = selectedFruits.reduce((sum,item) => sum+item.price*item.number,0)
        setTotal(all)
    }

    return ( 
        <div className='container-fluid'>
            <div className='row'>
              <div className='col-10 mx-auto'>
                <ul className="list-inline">
                    {fruit.map( val => <ItemFun key={val.id} {...val} decreseItem={decreseItem} addItem={addItem} addToCart={addToCart} />)}     
                </ul>
              </div>
            </div>
            <h3 className='text-center'>Total Price:{total}</h3>       
        </div>
     );
}

export default Main;