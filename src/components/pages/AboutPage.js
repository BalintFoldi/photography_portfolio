import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {motion} from 'framer-motion'


export default function AboutPage() {
  const [image, set_image] = useState("")
  const [text, set_text] = useState("")

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/about"
    }).then(res => {set_image(res.data.image); set_text(res.data.text)})
  }, [])

  return (
    <div className='about-container'>
      <motion.img src={image} alt="" initial={{opacity: 0, x:-100}} animate={{opacity: 1, x: 0}}/>

      <motion.div className='text-container' initial={{opacity: 0, x:100}} animate={{opacity: 1, x: 0}}>
        <p>{text}</p>
      </motion.div>
    </div>
  )
}
