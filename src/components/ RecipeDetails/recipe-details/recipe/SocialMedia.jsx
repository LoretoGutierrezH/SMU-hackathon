import React from 'react'
import instagram from '../../../../assets/instagram.png'
import facebook from '../../../../assets/facebook.png'
import twitter from '../../../../assets/twitter.png'

export const SocialMedia = () => {
  return(
    <div className='social-media'>
      <img src={ facebook } alt="facebook" width="30px" height="30px"/>
      <img src={ instagram } alt="instagram" width="30px" height="30px"/> 
      <img src={ twitter } alt="facebook" width="30px" height="30px"/>
    </div>
  )
}