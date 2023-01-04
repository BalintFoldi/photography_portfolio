import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {motion} from 'framer-motion'

export default function ContactPage() {
  const [email, set_email] = useState("")

  const variants = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {staggerChils: 0.05}}
  }

  const label_item = {
    hidden: {opacity:0, x: -100},
    show: {opacity: 1, x: 0, transition:{duration: 0.1}}
  }

  const input_item = {
    hidden: {opacity:0, x: 100},
    show: {opacity: 1, x: 0, transition:{duration: 0.1}}
  }

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/site-info"
    }).then(res => set_email(res.data.email))
  }, [])


  return (
    <motion.div className='contact-container' initial={{opacity:0}} animate={{opacity:1}}>
      <h1>Let's work togethet</h1>
      <h2>{email}</h2>
    
      <motion.form action="" variants={variants} initial="hidden" animate="show">
        <motion.h2 variants={label_item}>name</motion.h2>
        <motion.input type="text" name="" id="" variants={input_item}/>

        <motion.h2 variants={label_item}>email</motion.h2>
        <motion.input type="text" name="" id="" variants={input_item}/>

        <motion.h2 variants={label_item}>phone</motion.h2>
        <motion.input type="text" name="" id="" variants={input_item}/>

        <motion.h2 variants={label_item}>message</motion.h2>
        <motion.textarea type="text" name="" id="" variants={input_item}></motion.textarea>

      </motion.form>
    
      <motion.button initial={{opacity:0, x:50}} animate={{opacity:1, x:0, transition:{delay:0.3}}}>send</motion.button>

    </motion.div>
  )
}
