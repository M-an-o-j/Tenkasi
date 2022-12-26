import React from 'react'
import temple from '../assets/Kasi_Viswanathar_Temple-removebg-preview.png'
import '../index.css'
import location from '../assets/location.svg'
import birds from '../assets/birds (2).png'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <>
      <section className='' id='Home'>
        <div data-aos="fade-in" className='flex md:flex-row flex-col justify-between p-5 pt-16 md:p-20'>

          <div className=' text-text-color'>
            <div className='md:py-24'>

              <h1 className='font-Lobster text-7xl md:text-[200px]'>Tenkasi</h1>
              <p className='text-lg md:mt-0 mt-3 md:text-3xl font-NotoSans font-semibold text-text-color'>"The place where mother of nature lives"</p>
              <div className='bg-secondary rounded-xl md:w-40 w-32 flex p-3 mt-5 md:mt-10 px-'>

                <img src={location} alt="" className='w-10 md:w-10 pr-2' /> <a href='https://www.google.com/maps/place/Tenkasi,+Tamil+Nadu/@8.9640587,77.3144784,14z/data=!3m1!4b1!4m5!3m4!1s0x3b0429c15ac547f7:0x9a707276cd8ae327!8m2!3d8.9564008!4d77.3152492' className='text-lg md:text-2xl font-NotoSans font-semibold'>where?</a>
              </div>
            </div>
          </div>
          <div className=' img-border md:p-18 py-10 mt-10 relative md:w-[800px] w-80 h-80 md:h-[600px]   shadow-2xl md:mt-0'>
            <img src={temple} alt="" className='w-72 md:w-[500px] drop-shadow-{20px} absolute md:bottom-8 bottom-5 left-8 md:left-28  rounded-b-full z-10 object-contain' />
            <motion.img 
            initial={
              {x:80,y:30,scale:-1}
            }
            animate={{x:0, y:-10,scale:1.2}}
            src={birds} 
            alt="" 
            className='absolute z-0 md:w-40 w-40 md:top-1 top-0 duration-1000 md:left-40 left-10'/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero