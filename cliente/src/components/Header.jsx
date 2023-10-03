// eslint-disable-next-line react/prop-types
function Header({message}) {
  return (
    <div className="bg-[#414141] flex items-center px-28 py-3 text-white">
        <h3 className="text-2xl">{message}</h3>
    </div>
  )
}

export default Header