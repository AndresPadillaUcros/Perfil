import Image from 'next/image'
import React from 'react'



const ImageComponent = ({label,src,alt,width,height,style,className,divClassName}) => {
  return (
    <label className='d-flex flex-column align-items-center'>
        <span className='picture-label '>{label}</span>
        <div className={divClassName}>
          <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              style={style}
              className={className}
          />
        </div>
            

    </label>
  )
}

export default ImageComponent