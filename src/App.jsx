import './App.css'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

        <div className='text-right container mx-auto mt-5 md:mt-10 mb-5 md:mb-10'>
          <button className='text-purple-500 bg-purple-100 font-bold text-lg px-6 py-2 rounded-l-lg border-r-2 border-purple-500 cursor-pointer'>All</button>

          <button className='text-purple-500 bg-purple-100 font-bold text-lg px-6 py-2 border-r-2 border-purple-500 cursor-pointer'>Pending</button>

          <button className='text-purple-500 bg-purple-100 font-bold text-lg px-6 py-2 border-r-2 border-purple-500 cursor-pointer'>Submited</button>

          <button className='text-purple-500 bg-purple-100 font-bold text-lg px-6 py-2 rounded-r-lg cursor-pointer'>Reviewed</button>
        </div>

      <Footer></Footer>
    </>
  )
}

export default App
