import React from 'react'

import { NetflixLogo } from '../../assets'

import './Header.styles.scss'

const Header = () => {

  console.log(NetflixLogo)
  return (
    <div className='headerContainer'>
      <img className='headerContainer__image' src={NetflixLogo} alt='Netflix logo'/>
    </div>
  )
}

export { Header }