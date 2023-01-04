import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion'

export default function ImageSlider({images, title, slogen}) {
  const [image_index, set_image_index] = useState(0)
  let _index = 0

  // start interval
  useEffect(() => {
    const interval = setInterval(() => {
      _index ++
      if(_index >= images.length){
        _index = 0
      }
      set_image_index(_index)
    }, 10000)
    return () => clearInterval(interval)
  }, [images])


  return (
    <div className="image-slider-container">
        {
          images.map((image_path, index) => <img className={`${index === image_index? "visible":""}`} key={index} src={image_path}/>)
        }

        <motion.h1 initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}}>{title}</motion.h1>
        <motion.h2 initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}}>{slogen}</motion.h2>
    </div>
  )
}
