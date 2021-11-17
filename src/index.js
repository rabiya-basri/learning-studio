import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './store/configureStore'


const store = configureStore()

console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})
console.log(store)
ReactDOM.render( <App /> , document.getElementById('root'))