import React from 'react'

import { BlueProfile, RedProfile, YellowProfile, KidsProfile, GreenProfile } from '../../assets'

import './ProfilesHome.styles.scss'

const ProfilesHome = () => {

  return (
    <div className='profilesHome'>
      <h1 className='profilesHome__title'>
        Quem está assistindo?
      </h1>
      <div className='profilesHome__profilesWrapper'>
        <div className='profilesHome__nameAndPic'>
          <img src={GreenProfile} alt='Profile' className='profilesHome__profile' />
          <span>Username</span>
        </div>
        <div className='profilesHome__nameAndPic'>
          <img src={RedProfile} alt='Profile' className='profilesHome__profile' />
          <span>Username</span>
        </div>
        <div className='profilesHome__nameAndPic'>
          <img src={YellowProfile} alt='Profile' className='profilesHome__profile' />
          <span>Username</span>
        </div>
        <div className='profilesHome__nameAndPic'>
          <img src={BlueProfile} alt='Profile' className='profilesHome__profile' />
          <span>Username</span>
        </div>
        <div className='profilesHome__nameAndPic'>
          <img src={KidsProfile} alt='Profile' className='profilesHome__profile' />
          <span>Kids</span>
        </div>
      </div>
      <div className='profilesHome__buttonWrapper'>
        <button className='profilesHome__button'>GERENCIAR PERFIS</button>
      </div>
    </div>
  )
}

export { ProfilesHome }
