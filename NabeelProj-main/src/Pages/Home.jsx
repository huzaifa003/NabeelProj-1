import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Logo from '../assets/mainLogo.png'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import { TbGridDots } from 'react-icons/tb'
import HomeBody from './Home.Body'
import { Routes, Route } from 'react-router-dom'
import Channel from './Channel'
import Reseller from './Reseller'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import Setup from './Setup'
import Tutorial from './Tutorial'
import MenuIcon from '@mui/icons-material/Menu';

const Home = ({ darkMode, setDarkMode }) => {
    const [toggleSidebar, setToggleSidebar] = useState(false)
    const [Scrolled, setScrolled] = useState(false)

    const changeNavBg = () => {
        if (window.scrollY > 0) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }
    window.addEventListener('scroll', changeNavBg);
    return (
        <div className='flex items-center w-full justify-center with-colors-transition'>
            {/* Pc version navbar */}
            <div>
                <div className='lg:block w-[100vw] z-20 sticky top-0 hidden'>
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
                {/* Mobile version Navbar expandable */}
                <div className={`z-20 lg:hidden mx-auto  with-colors-transition flex justify-between items-center px-4 py-4 w-full fixed top-0 ${Scrolled ? 'bg-blue-lightmd' : ''}  ${Scrolled ? 'dark:bg-blue-darkmd' : ''}`}>
                    <img className='max-w-[100px] max-h-[100px]' src={Logo} alt="Logo" />
                    <div className='rounded-full flex items-center justify-center w-8 h-8 bg-white '>
                        {/* <div className='p-4'>
                          {
                            darkMode?<FiMenu  onClick={() => setToggleSidebar(!toggleSidebar)} fontSize={20}  color='blue-darkmd' />
                          : <FiMenu  onClick={() => setToggleSidebar(!toggleSidebar)} fontSize={20}  color='blue-darkmd' />}  
                        </div> */}
                        <div className="p-4">
                        
                            <MenuIcon style={{color:"black"}}  onClick={() => setToggleSidebar(!toggleSidebar)}></MenuIcon>
                        </div>

                    </div>
                </div>
                {/* Mobile version sidebar*/}
                {
                    toggleSidebar && (
                        <div className='z-50 h-[100%] animate-slide-in lg:hidden fixed gap-4 dark:bg-blue-darkmd bg-blue-lightmd right-0 transition-all duration-300 ease-in-out top-0 w-4/5 f-full text-gray-50 overflow-hidden shadow-md with-colors-transition '>
                            <div className='my-4 relative flex flex-col justify-between items-center gap-4 w-full h-full  sidebar'>
                                <div className='absolute right-0 -top-2 bottom-0 text-end p-4'>

                                    <AiOutlineClose onClick={() => setToggleSidebar(!toggleSidebar)} color='white' fontSize={25} />
                                </div>
                                <Link to='/'><img className='h-[6rem] ' src={Logo} alt=""/></Link>

                                <div className='flex py-4 border-b border-gray-50  gap-8 flex-col justify-start items-start font-extrabold font-2xl w-4/5 '>
                                    <Link to='/'><h1 >HOME</h1></Link>
                                    <Link to='/channel'><h1 >CHANNELS</h1></Link>
                                    <Link to='/setup'><h1 >SETUP</h1></Link>
                                    <Link to='/reseller'><h1 >RESELLERS</h1></Link>

                                </div>
                                <div className='my-4 flex flex-col items-start w-4/5 justify-center gap-6'>

                                    <button type='button' onClick={() => setDarkMode(!darkMode)}>
                                        {
                                            darkMode ?
                                                <div className=' with-colors-transition flex justify-center items-center gap-2'>
                                                    <img src={sun} alt="" />
                                                    <h1>Light Mode</h1>
                                                </div>
                                                :
                                                <div className=' with-colors-transition flex justify-center items-center gap-2'>
                                                    <img src={moon} alt="" />
                                                    <h1>Dark Mode</h1>
                                                </div>
                                        }
                                    </button>
                                </div>
                                <div className={` with-colors-transition dark:bg-[#070F24] p-4 mb-8 bg-[#122250] w-full flex flex-col items-center justify-center gap-5`}>
                                    <button type='button' className='bg-white rounded-sm shadow-sm w-full px-4 py-2 text-blue-darkmd '>
                                        LOG IN
                                    </button>
                                    <button type='button' className='bg-green-200 text-white w-full rounded-sm shadow-sm px-4 py-2'>
                                        ORDER NOW
                                    </button>
                                </div>
                            </div >

                        </div >
                    )
                }
                <Routes>
                    <Route path='/' element={<HomeBody darkMode={darkMode} setDarkMode={setDarkMode} />} exact />
                    <Route path='/channel' element={<Channel darkMode={darkMode} setDarkMode = {setDarkMode} />}  />
                    <Route path='/reseller' element={<Reseller darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path='/setup' element={<Setup darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path='/tutorial' element={<Tutorial />} />
                </Routes>

                <div className='w-full dark:bg-blue-darkmd text-white  bg-blue-lightmd p-4 mt-12'>
                    <Footer />
                </div>
            </div>

        </div >
    )
}

export default Home