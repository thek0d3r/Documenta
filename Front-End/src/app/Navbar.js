

export default function Navbar() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between m-0 p-0">
      <div className="flex align-center w-[65%] h-[50px] bg-neutral-300 rounded-xl border-2 border-t-0 mt-[20px]">
        <div id="profile-button" className="flex align-center rounded-full bg-neutral-100 w-[90px] h-[90px] ">
          <div id="profile-picture"></div>
          {/* <ul className="flex justify-center align-center flex-col p-0 rounded-xl bg-white w-20 text-gray-600 p-[5px]">
            <li>Setări</li>
            <li>Delogare</li>
          </ul> */}
        </div>
      </div>
    </main>
  )
}
