import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [ menuOpen, setMenuOpen ] = useState( false );
    return (
        <div className=''>
            {/*  */}

            <div>

                <nav className="flex items-center justify-between px-6 py-4 w-full z-50 absolute  ">
                    <div>
                        <h1 className="text-2xl  text-white  font-bold cursor-pointer" style={{ textShadow: '2px 2px 4px black' }}>

                            <Link to="/">SecureSphere</Link>
                        </h1>
                    </div>


                    <button
                        className="lg:hidden text-3xl"
                        onClick={() => setMenuOpen( !menuOpen )}
                    >
                        ☰
                    </button>


                    <ul
                        className={`flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 transition-all duration-300 ease-in-out absolute lg:static  top-[70px] left-0 w-full lg:w-auto px-6 py-4 lg:py-0 lg:px-0 shadow-lg lg:shadow-none ${menuOpen ? 'block' : 'hidden lg:flex'
                            }`} style={{ textShadow: '2px 2px 4px white     ' }}
                    >
                        <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white">
                            <Link to="/post">POST</Link>
                        </li>
                        <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white">
                            <Link to="/link">LINK DETUCTION</Link>
                        </li>
                        <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white">
                            <Link to="/ea">EA</Link>
                        </li>
                        <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white">
                            <Link to="/login">LOGIN</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* nav ends  */}

            {/*  */}
     



            {/*  */}
        </div>
    )
}

export default Navbar



// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 z-50">
//       <ul className="flex gap-6">
//         <li><Link to="/post">Post</Link></li>
//         <li><Link to="/link">Link</Link></li>
//         <li><Link to="/ea">EA</Link></li>
//         <li><Link to="/login">Login</Link></li>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar
