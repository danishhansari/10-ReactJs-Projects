import { useState,useEffect } from 'react'
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
function App() {
  const [images,setImage ] = useState([])
  const [loading , setLoading] = useState(true)
  const [term , setTerm] = useState('');
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=36248526-3f3d9bb06bca5ec5d3827f9a8&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImage(data.hits)
      setLoading(false)
    })
    .catch(err => console.log(err));
  },[term])
  return (
    <div className="container mx-auto w-full px-4 md:w-4/6">
    <h1>Search anything</h1>
    <ImageSearch searchText={(text) => setTerm(text)} />
     {loading ? <h2 className='text-6xl text-center mx-auto mt-32'>Loading...</h2> :  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
          ))}
      </div>}
    </div>
  )
}

export default App
