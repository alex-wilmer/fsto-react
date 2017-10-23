import React from 'react'
import { render } from 'react-dom'

let getUser = () =>
  Promise.resolve({ name: 'alex', favoriteColor: 'olivedrab' })

let Layout = props => (
  <div>
    <h1>App-tastic</h1>
    {props.children}
  </div>
)

let ProfilePage = class extends React.Component {
  state = { user: null }
  componentDidMount() {
    getUser().then(user => this.setState({ user }))
  }
  render() {
    return (
      <div>
        {this.state.user && (
          <h1 style={{ color: this.state.user.favoriteColor }}>
            {this.state.user.name}
          </h1>
        )}
      </div>
    )
  }
}

let App = () => (
  <Layout>
    <ProfilePage />
  </Layout>
)

let rootNode = document.getElementById('root')

render(<App />, rootNode)
