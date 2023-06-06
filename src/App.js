import logo from './logo.svg';
import './App.css';
import React from 'react'
import MainClass from './components/MainClass';
import Main from './components/Main';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  state = { 
    
  }
  render() { 
    return ( 
      <React.Fragment>
        {/* <MainClass /> */}
        <Main />
      </React.Fragment>
     );
  }
}
 
export default App;
