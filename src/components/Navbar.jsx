import { useState } from 'react'
import open from '../assets/open.svg'
import close from '../assets/close.svg'


const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const Navlist = [
    { id: "#Home", navname: "Home" },
    { id: "#History", navname: "History" },
    { id: "#Place", navname: "Place" },
    { id: "#Developer", navname: "Developer" },
  ]

  return (
    <>
      <section id=''>
        <div className='md:p-5 w-full md:bg-primary'>
          <img
            src={menu ? close : open}
            alt=""
            className='fixed top-4 left-4 z-20 md:hidden w-8 bg-secondary p-[5px] rounded-full' 
            onClick={() => setMenu(!menu)}
            />
          <ul className={`p-20 md:p-0 h-screen md:h-auto md:flex fixed md:left-5  md:top-0 flex-col md:bg-primary bg-secondary  md:flex-row ${menu ? "left-0" : "-left-96"} duration-500 rounded-tr-2xlm rounded-br-2xl ease-in-out `}>
            {Navlist.map((nav,index) => (
              <li className='md:mr-10 md:mb-0 mb-10 md:mt-0 mt-10  text-center text-xl font-NotoSans font-semibold text-text-color' key={index}><a href={nav.id}>{nav.navname}</a></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Navbar