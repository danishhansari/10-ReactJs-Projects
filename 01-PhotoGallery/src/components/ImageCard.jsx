const ImageCard = ({image}) => {
    const tags = image.tags.split(',')
    return ( 
      <div className="container mx-auto">
      <div className="w-full md:max-w-sm rounded overflow-hidden shadow-lg my-2 md:my-0">
      <img src={image.webformatURL} className="w-full" alt="Random image" />
      <div className="pl-2 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user} 
        </div>
        <ul className="pl-2">
          <li><strong>Views: </strong>{image.views}</li>
          <li><strong>Downloads: </strong>{image.downloads}</li>
          <li><strong>Likes: </strong>{image.likes}</li>
        </ul>
      </div>
      <div className="py-4">
        {tags.map((tag,index) => 
         <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold-text-gray-700 mx-2 my-1">#{tag}</span>
        )}
      </div>
    </div>
  
  </div>
     );
}
export default ImageCard;