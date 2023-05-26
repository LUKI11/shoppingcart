import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios'
import fruits from  './data/data.json'
import Item from './components/Item';
import lodash from 'lodash'

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.decreseItem = this.decreseItem.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.computeAll = this.computeAll.bind(this);
  }
  state = { 
    fruits: fruits,
    total: 0
  }
  componentDidMount = () => {
  // axios fetch data and setState
  //   axios.get(`url`)
  //   .then((response) => {
  //     console.log(response.data)
  //   })
  //   .catch((err) => console.log(err))
  console.log(this.state.fruits)
  }

  componentDidUpdate = () => {
    this.computeAll()
  }

  addItem = (id) => {
    return () => {
      let fruitsClone = lodash.cloneDeep(this.state.fruits);
      let fruit = fruitsClone.find(val => val.id == id);
      fruit.number++;
      this.setState({
        fruits:fruitsClone,
      })
    }
  }

  decreseItem = (id) => {
    return () => {
      let fruitsClone = lodash.cloneDeep(this.state.fruits);
      let fruit = fruitsClone.find(val => val.id == id);

      if (fruit.number > 1) {
        fruit.number--;
      }
      this.setState({
        fruits:fruitsClone
      })
    }
  }

  addToCart = (id)=> {
    return () => {
      let fruitsClone = lodash.cloneDeep(this.state.fruits);
      let fruit = fruitsClone.find(val => val.id == id);
      fruit.isActive = !fruit.isActive; 
      console.log(fruit.isActive)    
      this.setState({
        fruits:fruitsClone
      })
    }
  }

  computeAll = () => {
    let selectedFruits = this.state.fruits.filter(item => item.isActive === false)
    let all = selectedFruits.reduce((a,b) => a+b.number*b.price,0)
    this.setState({
      total:all
    })
  }
  render() { 
    return ( 
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <ul className="list-inline">
              {this.state.fruits.map(val => <Item key={val.id} {...val} addItem={this.addItem(val.id)} decreseItem={this.decreseItem(val.id)} addToCart={this.addToCart(val.id)} /> )}             
            </ul>
          </div>
        </div>
        <h3 className='text-center'>Total Price:{this.state.total}</h3>
        
      </div>
     );
  }
}
 
export default App;
