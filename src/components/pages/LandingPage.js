import React, { useEffect, useState } from 'react'
import ImageSlider from '../micro/ImageSlider'
import axios from 'axios'

export default function LandingPage() {
  const [images, set_images] =useState([])
  const [title, set_title] = useState("")
  const [slogen, set_slogen] = useState("")

  const fetch_data = () => {
    axios({
      method: "get",
      url: "http://localhost:3001/landing-page"
    }).then(res => {
      set_images(res.data.images)
      set_title(res.data.title)
      set_slogen(res.data.slogen)
    })
  }


  useEffect(fetch_data, [])

  return (
    <div>
        <ImageSlider images={images} title={title} slogen={slogen}/>   
    </div>
  )
}
