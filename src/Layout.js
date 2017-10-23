import React from 'react'
import { render } from 'react-dom'

let Layout = props => (
  <div>
    <h1>ShmuckNovel</h1>
    {props.children}
  </div>
)

let ProfilePage = () => 'login to view stuff'

let App = () => (
  <Layout>
    <ProfilePage />
  </Layout>
)

let rootNode = document.getElementById('root')

render(<App />, rootNode)
