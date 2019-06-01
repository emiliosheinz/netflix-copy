import React from 'react'

import './ProfilesHome.styles.scss'

const ProfilesHome = () => {

  return (
    <div className='profilesHome'>
      <h1 className='profilesHome__title'>
        Quem está assistindo?
      </h1>
      <div className='profilesHome__profilesWrapper'>
        <div className='profilesHome__profile'></div>
        <div className='profilesHome__profile'></div>
        <div className='profilesHome__profile'></div>
        <div className='profilesHome__profile'></div>
        <div className='profilesHome__profile'></div>
      </div>
      <div className='profilesHome__buttonWrapper'>
        <button className='profilesHome__button'>GERENCIAR PERFIS</button>
      </div>
    </div>
  )
}

export { ProfilesHome }
