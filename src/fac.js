import React from 'react'
import { render } from 'react-dom'

class GetUserData extends React.Component {
  state = { user: 'alex' }

  render() {
    return this.props.children(this.state.user)
  }
}

let ProfilePage = ({ user }) => <h1>hello {user}!</h1>

let App = () => <GetUserData>{user => <ProfilePage user={user} />}</GetUserData>

let rootNode = document.getElementById('root')

render(<App />, rootNode)
