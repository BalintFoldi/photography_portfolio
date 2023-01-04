import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import { motion } from 'framer-motion'

function CategoriCard({image, title, to}){
  return <Link to={`/photos${to}`} className="category-card-container">
    <img src={image} alt="" />
    <h1>{title}</h1>
  </Link>
}


export default function PhotosPage() {
  const [images, set_images] = useState([])
  const [nature, set_nature] = useState("")
  const [urban, set_urban] = useState("")
  const [portrait, set_portrait] = useState("")
  const [wedding, set_wedding] = useState("")

  const variants = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition:{staggerChildren: 0.2}}
  }

  const item = {
    hidden: {opacity: 0, y:100},
    show: {opacity: 1, y:0, transition:{duration: 0.3}}
  }

  const get_random_item = (items) => {
    return items[Math.floor(Math.random()*items.length)]
  }

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/photos"
    }).then(res => set_images(res.data))
  }, [])

  useEffect(() => {
    if(images.length > 0){
      //set_wedding(images.filter(image_data => image_data.category === "wedding")[0].image)
      set_wedding( get_random_item(images.filter(image_data => image_data.category === "wedding")).image)
      set_urban(images.filter(image_data => image_data.category === "urban")[0].image)
      set_nature(images.filter(image_data => image_data.category === "nature")[0].image)
      set_portrait(images.filter(image_data => image_data.category === "portrait")[0].image)

      console.log(
        images.filter(image_data => image_data.category === "wedding")
      )

    }


  }, [images])

  return (
    <motion.div
      variants={variants} 
      initial="hidden" 
      animate="show"
    >
      <motion.div variants={item}><CategoriCard image={wedding} title="wedding" to="/wedding"/></motion.div>
      <motion.div variants={item}><CategoriCard image={nature} title="nature" to="/nature"/></motion.div>
      <motion.div variants={item}><CategoriCard image={urban} title="urban" to="/urban"/></motion.div>
      <motion.div variants={item}><CategoriCard image={portrait} title="portrait" to="/portrait"/></motion.div>    
    </motion.div>
  )
}
