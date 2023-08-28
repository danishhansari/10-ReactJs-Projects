import Laptop  from '../assets/laptop.jpg'
function Analytics() {
  return (
    <div className="bg-white mt-[20vh] py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='w-[500px]' src={Laptop} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='uppercase text-2xl font-bold text-[#00df9a]'>data analytics dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis est porro unde. Quis explicabo voluptatem fugiat minima ullam, neque eius, labore esse harum sit reiciendis ad eaque, aspernatur hic iure</p>
                <button className='text-[#00df9a] bg-black w-[200px] rounded-md mx-auto md:mx-0 py-3 font-medium mt-8'>Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Analytics