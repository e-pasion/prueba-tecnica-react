import movieLogo from '../assets/images/placeholder.png'
// eslint-disable-next-line react/prop-types
function CategoryCard({message}) {
  return (
    <div className="w-40 h-60 relative categoryBackground text-white">
        <h1 src={movieLogo} className='absolute top-0 left-0 h-full w-full flex justify-center items-center text-3xl' alt="" >
            {message}
        </h1>
    </div>
  )
}

export default CategoryCard