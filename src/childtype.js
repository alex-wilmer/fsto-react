import React from 'react'
import { render } from 'react-dom'

let Layout = props => (
  <div>
    <h1>ShmuckNovel</h1>
    {React.Children.map(props.children, child => {
      return child.type.displayName === 'Profile' ? (
        <div>
          <h1>It's the profile page!</h1>
          {child}
        </div>
      ) : (
        'ah something else'
      )
    })}
  </div>
)

let ProfilePage = () => 'login to view stuff'
ProfilePage.displayName = 'Profile'

let App = () => (
  <Layout>
    <ProfilePage />
    <div>I want to be displayed too :(</div>
  </Layout>
)

let rootNode = document.getElementById('root')

render(<App />, rootNode)
