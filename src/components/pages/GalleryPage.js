import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios'
import Masonry from 'react-masonry-css'
import { motion } from 'framer-motion'

export default function GalleryPage() {
    const {category} = useParams()
    const [images, set_images] = useState([])
    const [current_image, set_current_image] = useState(0)

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3001/photos"
        }).then(res => set_images(res.data))
    }, [])

    useEffect(() => {
        if(current_image){
            document.body.style.overflowY = "hidden"
        }else{
            document.body.style.overflowY = "auto"
        }
    }, [current_image])

  return (
    <div className='gallery-container'>
            {
                current_image&& 
                <div className="image-viewer" onClick={e => set_current_image(null)}>
                    <motion.img src={current_image} initial={{opacity:0, scale: 0.8}} animate={{opacity:1, scale:1}}/>
                </div>
            }

            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                    images.filter(image_data => image_data.category === category)
                    .map((data, index) => 
                        <motion.img
                        key={data.id} 
                        src={data.image} 
                        onClick={e => set_current_image(data.image)}
                        initial={{opacity:0}}
                        animate={{opacity:1, transition:{delay: index*0.1}}}
                        />
                    )
                }
          </Masonry>
                 
    </div>
  )
}
