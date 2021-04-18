import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './Home';
import SignUp from './signup';
import Dashboard from './Dashboard';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from "@chakra-ui/react"

import {Switch, BrowserRouter, Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <ChakraProvider>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
        </BrowserRouter>
      </ChakraProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <Home />
//   // </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
