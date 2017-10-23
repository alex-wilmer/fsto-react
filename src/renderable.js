import React from 'react'
import { render } from 'react-dom'

let RenderString = () => '1, 2 pick up your shoe '
let RenderNumber = () => 101010
let RenderNull = () => null
let RenderBoolean = () => true

let RenderPrimitiveArray = () => [3, ', ', 4, ', ', 'out the door']

let RenderComponentArray = () => [
  <RenderString key="wat" />,
  <RenderPrimitiveArray key="srsly" />,
]

let RenderNested = () => (
  <div>
    <RenderString />
    <RenderPrimitiveArray />
  </div>
)

// aka Aux
let RenderChildren = props => props.children

let RenderKeylessArray = () => (
  <RenderChildren>
    <RenderString />
    <RenderPrimitiveArray />
  </RenderChildren>
)

let RenderUndefined = () => undefined

let theDude = { abides: true }
let RenderObject = () => theDude

let rootNode = document.getElementById('root')

render(<RenderString />, rootNode)
render(<RenderNumber />, rootNode)
render(<RenderBoolean />, rootNode)
render(<RenderPrimitiveArray />, rootNode)
render(<RenderComponentArray />, rootNode)
render(<RenderNested />, rootNode)
render(<RenderKeylessArray />, rootNode)
// Nope
render(<RenderObject />, rootNode)
render(<RenderUndefined />, rootNode)
