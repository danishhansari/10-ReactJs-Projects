import Typed from 'react-typed'
function Hero() {
  return (
    <div className="text-white">
        <div className="max-w-[800px] mt-[96px] w-full h-[60vh] mx-auto text-center flex flex-col items-center
         justify-center">
            <p className="uppercase text-[#00df9a font-bold p-2">growing with data analytics</p>
            <p className="md:text-7xl sm:text-5xl text-4xl font-bold md:py-6">Grow with data.</p>
            <div className='flex gap-2'>
                <p className="md:text-5xl sm:text-4xl text-xl font-bold">Fast, Flexible financing</p>
                <Typed strings={['BTC', 'BTB', 'SASS']} className='text-[#00df9a] font-bold text-xl md:text-5xl sm:text-4xl' typeSpeed={120} backSpeed={140} loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 mt-2'>Monitor your data analytics to increase revenue for BTB, BTC AND SASS platforms.</p>
            <button className="bg-[#00df9a] text-black text-2xl py-2 px-4 rounded hover:bg-[#3fe2af] font-medium mt-3">Get started</button>
        </div>
    </div>
  )
}

export default Hero