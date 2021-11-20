import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const store = configureStore()

console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})
console.log(store)
ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>, document.getElementById('root'))