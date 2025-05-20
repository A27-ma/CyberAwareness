import React from 'react'
import Navbar from "./component/Navbar"
import { Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './component/Navcomponent/Login'
import Post from './component/Navcomponent/Post'
import LinkPage from './component/Navcomponent/Link'
import Ea from './component/Navcomponent/Ea'
import Home from './component/Home'

const App = () => {
  return (
    <div>
      

       <div >
        {/* Show Detail only on the homepage */}
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<Post />} />
          <Route path="/link" element={<LinkPage />} />
          <Route path="/ea" element={<Ea />} />
        </Routes>
      </div>
      
      </div>
    
    
  )
}

export default App


// import React from 'react'
// import Navbar from "./Navbar/Navbar"
// import { Routes, Route } from 'react-router-dom'
// import './index.css'
// import Login from './Navcomponent/Login'
// import Post from './Navcomponent/Post'
// import LinkPage from './Navcomponent/Link'
// import Ea from './Navcomponent/Ea'

// const App = () => {
//   return (
//     <div>
//       <Navbar />

//       {/* Add padding-top to avoid overlap */}
//       <div className="pt-20 px-4">
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/post" element={<Post />} />
//           <Route path="/link" element={<LinkPage />} />
//           <Route path="/ea" element={<Ea />} />
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App
