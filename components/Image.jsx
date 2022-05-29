import Image from 'next/image'
import React from 'react'



const ImageComponent = ({label,src,alt,width,height,style}) => {
  return (
    <label>
        <span className='d-flex flex-column align-items-center picture-label '>{label}</span>
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={style}
            className='imagenes'
        />
            

    </label>
  )
}

export default ImageComponent