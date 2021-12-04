// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`


const Box = ({className = '', style, size, ...otherPorps}) => {
  const sizeClass = size ? `box--${size}` : ''
  return <div className={`box ${sizeClass}`} style={{fontStyle: 'italic', ...style}} {...otherPorps}/>
}
function App() {
  return (
    <div>
      <Box  size='small' style={{backgroundColor: 'lightblue'}}>  small lightblue box </Box>
      <Box  size='medium' style={{backgroundColor: 'pink'}}>  medium lightblue box </Box>
      <Box  size='large' style={{backgroundColor: 'orange'}}>  karge lightblue box </Box>
    </div>
  )
}

export default App
