import React from 'react'
import instagram from '../../../../assets/instagram.png'
import facebook from '../../../../assets/facebook.png'
import twitter from '../../../../assets/twitter.png'

export const SocialMedia = () => {
  return(
    <div className='social-media'>
      <img className='facebook' src={ facebook } alt="facebook" />
      <img className='instagram' src={ instagram } alt="instagram"/> 
      <img className='twitter' src={ twitter } alt="twitter" />
    </div>
  )
}