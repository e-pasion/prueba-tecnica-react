
function Navbar() {
  return (
    <div className="w-full md:h-20 py-5 md:p-0 bg-[#038aff] text-white flex flex-col md:flex-row items-center justify-between md:px-28 space-y-3 md:space-y-0">
        <h1 className="text-2xl md:text-4xl"> DEMO Streaming </h1>
        <div>
            <button className="px-6">Log in</button>
            <button className="bg-black px-2 py-1 text-center">Start your free trial</button>
        </div>


    </div>
  )
}

export default Navbar