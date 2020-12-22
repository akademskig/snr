
import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

if (document.getElementById('react_root')){
    ReactDOM.render(<App/> , document.getElementById('react_root'))
}