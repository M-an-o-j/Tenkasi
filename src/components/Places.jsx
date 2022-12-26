import React from 'react'
import {courtallam,kasivis,oldcour,thirumalaikovil} from '../assets/index'


const Placeses = () => {
  return (
    <>
      <section id='Place'>
        <div className=' mx-5 md:mx-10 py-10'>
          <h1 className='text-center font-bold text-text-color text-5xl mb-10'>Places</h1>

          <div data-aos="fade-left" className='bg-secondary p-5 md:p-10  flex md:flex-row flex-col justify-between rounded-xl'>
            <div>
              <img src={courtallam} alt="main falls" className='w-[1000px] rounded-xl' />
            </div>
            <div className='pl-3'>
              <h3 className='text-2xl font-NotoSans text-text-color font-bold md:mt-0 mt-5'>Courtallam</h3>
              <p className='text-sm md:text-xl mt-5 font-semibold text-text-color
               md:leading-7 md:indent-8'>Courtallam is a panchayat town situated in Tenkasi District at a mean elevation of 160m (520 ft) on the Western Ghats in the Tamil Nadu, India. Courtallam Falls is on Chittar River is a major tourist attraction due to the consistent availability of water in falls.Courtallam, which is pronounced as ‘Kuttraalam’, had a population of 2,368. It is often referred to as “Spa of South” & “Poor man’s paradise”. The best time to visit is mid- June to September and October-January. Kuttralam is also mentioned in many classical tamil literary works.</p>
            </div>

          </div>
          <div data-aos="fade-right" className='bg-secondary p-5 md:p-10  flex md:flex-row-reverse flex-col justify-between rounded-xl mt-10'>
            <div>
              <img src={kasivis} alt="" className='w-[800px] object-cover h-[200px] rounded-xl'/>
            </div>
            <div className='pl-5' >
              <h3 className='text-xl font-NotoSans text-text-color font-bold md:mt-0 mt-5'>Kasiviswanathar Temple</h3>
              <p className='text-sm md:text-xl mt-5 font-semibold text-text-color
               md:leading-7 md:indent-8'>Kasi Viswanathar Temple in Tenkasi, a city in Tenkasi district in the South Indian state of Tamil Nadu, is dedicated to the Hindu god Shiva. Constructed in the Tamilnadu style of architecture, the temple is believed to have been built by Pandyan ruler Parakrama Pandyan during the 13th century, with later additions from Madurai Nayaks. Shiva is worshipped as Kasi Viswanathar and his consort Parvathi as Ulagamman.</p>
            </div>

          </div>
          <div data-aos="fade-left" className='bg-secondary p-5 md:p-10  flex md:flex-row flex-col justify-between rounded-xl mt-10'>
            <div>
              <img src={thirumalaikovil} alt="main falls" className='w-[1000px] rounded-xl' />
            </div>
            <div className='pl-5'>
              <h3 className='text-2xl font-NotoSans text-text-color font-bold md:mt-0 mt-5'>Thirumalai Kovil</h3>
              <p className='text-sm md:text-xl mt-5 font-semibold text-text-color
               md:leading-7 md:indent-8'>The main deity Murugan is shown standing with four hands. Thirumalai Murugan or Thirumalai Kumaraswamy are two names for the local deity. Lord Muruga paid the Sage Agasthiar a visit to this place. This temple has two enclosures and two entrances. Towards the east is the sanctuary. The temple contains a mukha-mandapa and a maha-mandapa in front of the shrine.</p>
            </div>

          </div>
          <div data-aos="fade-right" className='bg-secondary p-5 md:p-10  flex md:flex-row-reverse flex-col justify-between rounded-xl mt-10'>
            <div>
              <img src={oldcour} alt="main falls" className='w-[1000px] rounded-xl' />
            </div>
            <div className='pl-5'>
              <h3 className='text-2xl font-NotoSans text-text-color font-bold md:mt-0 mt-5'>Old Courtallam</h3>
              <p className='text-sm md:text-xl mt-5 font-semibold text-text-color
               md:leading-7 md:indent-8'>Pazhaya Courtallaruvi, also called Old Courtallam or Shivamathungai Falls, is located 8 kilometers from Main Falls, 8 kilometers from Courtallam bus stand, and 11 kilometers from Tenkasi. This waterfall is created when water pours between two rocks and falls into a valley. Steps carved into the rocks at the base of the 200-foot fall allow the cascading water to slow down and become bather-safe. Here, bathing is both safe and well-liked.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Placeses