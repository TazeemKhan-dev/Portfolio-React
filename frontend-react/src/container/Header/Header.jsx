import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './header.scss'

const scaleVarient={
  whileInView:{
    scale:[0.1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}

const Header = () => {
  const tech=[images.react_2,images.sass];
  return (
    <header id='home' className='app__header app__flex'>
      <motion.div className='app__header-info'
      whileInView={{x:[-100,0],opacity:[0,1] }}
      transition={{duration:1}}
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft:20}}>
              <p className='p-text'>Hello, I am</p>
            <h1 className='header-text'>Tazeem Khan</h1>
            </div>
            
          </div>
          <div className='tag-cmp app__flex'>
               <p className='p-text'>SOFTWARE ENGINEER</p>
            </div>
        </div>
      </motion.div>
       <motion.div className='app__header-img'
      whileInView={{opacity:[0,1] }}
      transition={{duration:1 , delayChildren:0.5}}
      >
        <img src={images.profile_1} alt="profile" />
        <motion.img
        whileInView={{scale:[0,1]}}
        transition={{duration:1 ,ease:'easeInOut'}}
        src={images.circle}
        alt='circle'
        className='overlay_circle'
        />

      </motion.div>

      <motion.div
      variants={scaleVarient}
      whileInView={scaleVarient.whileInView}
      className='app__header-circle'
      >
        {tech.map((circle,index)=>(
          <div className='circle-cpm app__flex' key={`circle-${circle}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </header>
  )
}

export default Header