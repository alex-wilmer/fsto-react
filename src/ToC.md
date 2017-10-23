# Organizing React Apps
### The Five Stages of React

1. The Mental Model Continuum *slides 2 - 13* **4 min**

2. Angular -> React *slides 14 - 54* **9 min**

3. Stage 1: Sharing State *slides 55 - 61* **2 min**
 - moving data up the tree vs events

4. Stage 2: Intermediate components *slides 62 - 72* **2 min**
 - from App to leaves
 - pass props along
 - default props
 - don't own props

5. Stage 3: React-Fu (know your abstractions) *slides 73 - 84* **15 min**
- https://codesandbox.io/s/p57orlkz4q
- Term "Component" Overloaded
- Valid Element Ingredients
- Valid Renderables
- children (checking type, passing props)
- child as function (component injection)
- HOC (composing components, recompose, improved readability, ergonomics)
- caf / hoc hooks

7. Stage 4: Give the user control (like yourself) *slides 73 - 84* **4 min**
 - shouldn't need to touch code to tweak stuff
 - make mounting / passing props a runtime feature
 - feature flags for everything!

 5. Stage 5: React needs friends *slides 73*
  - 'just a view library' (but it can be a one man army)
  - routing (react-router)
  - Bloated App component
  - state managers (flux, redux, mobx, freactal)
    - basic, ducks, fractals
    - middleware
  - api (graphql)
  - 3rd party protection with interfaces (funnels, owning code)
  - growing complexity of mental model / multiple state sources
  - difficulty nodes around

8. Idea: abstract files and folders / improved editor experience
 - organization in real life vs organization of ideas

9. Bonus Stage: Styling -- They're all good, just something and you'll be good
 - npm charts
 - I've used quite a few of them in production, talk to me later about it
 - try glamorous first. It mixes, glamor, styled-components and jsx-style into one library and because I like them all, more choices in one is a useful to experiment without needing to install multiple libraries
