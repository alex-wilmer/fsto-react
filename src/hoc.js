import React from 'react'
import { render } from 'react-dom'

let withUserData = Component =>
  class extends React.Component {
    state = { user: 'alex' }

    render() {
      return <Component user={this.state.user} />
    }
  }

let ProfilePage = withUserData(({ user }) => <h1>hello {user}!</h1>)

let App = props => <ProfilePage user={props.user} />

let rootNode = document.getElementById('root')

render(<App />, rootNode)
