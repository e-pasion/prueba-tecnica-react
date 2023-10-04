/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
function CoverPopUp({object}) {


  return (
    <div className="flex flex-col items-center bg-white  shadow md:flex-row max-h-[calc(100vh-10rem)]">
    <img className="object-cover w-full  h-96 md:h-auto md:w-48 " src={object?.images?.["Poster Art"]?.url} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{object.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{object.description}</p>
        <div>
        <p className="text-xs font-normal text-gray-700">{object.releaseYear}</p>
        </div>
    </div>

</div>

  )
}

export default CoverPopUp