
const List = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center gap-5 text-center px-10 py-6 rounded-xl shadow-2xl absolute top-44">
        <div><p className="text-[0.6rem] uppercase font-bold tracking-wider text-DarkGray">Ip Address</p> <h2 className="font-bold">192.212.174.11</h2></div>
        <div><p className="text-[0.6rem] uppercase font-bold tracking-wider text-DarkGray">Location</p> <h2 className="font-bold">Frankfurt, 52146</h2></div>
        <div><p className="text-[0.6rem] uppercase font-bold tracking-wider text-DarkGray">Timezone</p> <h2 className="font-bold">UTC - 05:00</h2></div>
        <div><p className="text-[0.6rem] uppercase font-extrabold tracking-wider text-DarkGray">Isp</p> <h2 className="font-bold">SpaceX Starlink</h2></div>
    </div>
  )
}

export default List