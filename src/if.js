import React from 'react'
import { render } from 'react-dom'
import { compose, branch, renderComponent } from 'recompose'

let withUserData = Component =>
  class extends React.Component {
    state = { user: null }

    render() {
      return <Component user={this.state.user} />
    }
  }

let ErrorMessage = () => <h1>Something went wrong</h1>

let ifError = branch(props => !props.user, renderComponent(ErrorMessage))

let ProfilePage = compose(withUserData, ifError)(props => (
  <h1>hello {props.user}!</h1>
))

let App = props => <ProfilePage user={props.user} />

let rootNode = document.getElementById('root')

render(<App />, rootNode)
