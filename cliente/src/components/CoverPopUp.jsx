/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
function CoverPopUp({object}) {


  return (
    <div className="absolute bg-black bg-opacity-40 top-0 left-0 w-full h-screen z-50 flex justify-center items-center">
        <div className="bg-white w-72 p-5">
            <h1 className="text-lg">title: {object.title}</h1>
            <h1 className="text-lg">description: {object.description}</h1>
            <h1 className="text-lg">release year: {object.releaseYear}</h1>
            <img className='w-full ' src={object?.images?.["Poster Art"]?.url} alt="" />
        </div>
    </div>
  )
}

export default CoverPopUp