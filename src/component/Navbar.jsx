import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from "../component/ui/Button";

const Navbar = () => {

    // const [ menuOpen, setMenuOpen ] = useState( false );
    return (
        <div >
            <div className=''>

            </div>
            {/*  */}


            {/* Header */}
            <header className="bg-[#2D1C97] text-white p-4 shadow-lg flex justify-between items-center px-40">
                <div className='flex gap-4'>
<img className='h-10  rounded-md  ' src="https://media.istockphoto.com/id/1383553886/vector/abstract-banner-cyber-security-in-3d-style-communication-technology-database-system.jpg?s=612x612&w=0&k=20&c=H_EGuMLGF8qTCp_aqYHIyYgUUz-V66gSGffmHV8elOw=" alt="" />
                <h1 className="text-2xl font-bold">SecureSphere</h1>
                </div>
                <nav className="flex gap-6 items-center">
                    <a href="./Navcomponent/Post.jsx" target='_blank' className="hover:underline">Post</a>
                    <a href="./Navcomponent/Link.jsx" className="hover:underline">Link Detector</a>
                    <a href="./Navcomponent/Eamail.jsx" className="hover:underline">Email Analyser</a>
                    <a href="./Navcomponent/Login.jsx" className="hover:underline">LOGIN</a>
                    <Button className="bg-yellow-400 text-black px-4 py-2 rounded">Login</Button>
                </nav>
            </header>


            <section className="flex flex-col  text-left bg-gradient-to-br from-[#331EA7] to-[#8357C6] text-white py-20 px-40">
                <h2 className="text-4xl font-extrabold max-w-2xl leading-tight">Your Digital Shield - Against Online Frauds!</h2>
                <p className="mt-4 max-w-xl text-lg">Secure Sphere keeps you updated on the latest frauds, helps you spot scams, check emails, and stay safe online.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <Button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded">Explore</Button>
                    <Button className="bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-2 rounded">Get Started</Button>
                </div>
            </section>



            {/* <div>

                <nav className=" bg-blue-900 shadow-sm flex items-center justify-between px-6 py-4 w-full z-50 absolute  ">
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
                            <Link to="/ea">EMAIL</Link>
                        </li>
                        <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white">
                            <Link to="/login">LOGIN</Link>
                        </li>
                    </ul>
                </nav>
            </div> */}
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
