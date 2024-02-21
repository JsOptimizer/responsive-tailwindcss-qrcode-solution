import React from 'react'
import qrCode from '../assets/images/image-qr-code.png'
const CardImg = () => {
  return (
    <div>
        <img src={qrCode} alt='qr-code' className='rounded-lg' />
    </div>
  )
}

export default CardImg