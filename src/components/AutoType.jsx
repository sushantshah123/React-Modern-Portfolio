import React from 'react'
import { useTypewriter,cursor } from 'react-simple-typewriter'

const AutoType = () => {
  const [text] = useTypewriter({
    words: ['Mern Stack Developer.', 'UI Designer.', 'Wordpress Developer.', 'Trainer!'],
    loop: 0,
    cursor,
    cursorStyle:'_',
    typeSpeed:70,
    deleteSpeed:50,
    delaySpeed:1000,
  })
    
  return (
    <div>
        {text}
    </div>
  )
  }
export default AutoType