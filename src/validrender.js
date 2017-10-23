import React from 'react'
import { render } from 'react-dom'

let StringApp = 'div'

let WeirdStringApp = 'foolala'

let FunctionApp = () => 'Function ftw'

let ClassApp = class extends React.Component {
  render() {
    return 'class is brass'
  }
}

let rootNode = document.getElementById('root')

// render(React.createElement(StringApp, {}, 'String is king'), rootNode)
// render(React.createElement(WeirdStringApp, {}, '¯\\_(ツ)_/¯'), rootNode)
// render(React.createElement(FunctionApp), rootNode)
// render(React.createElement(ClassApp), rootNode)
