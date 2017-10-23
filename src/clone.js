import React from 'react'
import { render } from 'react-dom'

class GetUserData extends React.Component {
  state = { user: 'alex' }

  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        user: this.state.user,
      }),
    )
  }
}

let ProfilePage = ({ user }) => <h1>hello {user}!</h1>

let App = () => (
  <GetUserData>
    <ProfilePage />
  </GetUserData>
)

let rootNode = document.getElementById('root')

render(<App />, rootNode)
