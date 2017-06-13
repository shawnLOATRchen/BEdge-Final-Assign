import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"

// import { BrowserRouter as Router, Route} from 'react-router-dom';

import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import RouterComponent from './components/router';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

// stylesheet
import '../dist/sass/index.sass'


class App extends Component{

  render(){
    return(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <RouterComponent/>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
