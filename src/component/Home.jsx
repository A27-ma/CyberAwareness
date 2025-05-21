import React from 'react'
import Navbar from './Navbar'
import Detail from './Details/Detail'
import SplitText from "./SplitText";
import Chatgptcode from './Chatgptcode';

const Home = () => {
  return (
    <>
      <Navbar />
      <Detail />
      <Chatgptcode />
    </>
  )
}

export default Home