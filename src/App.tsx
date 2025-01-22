import './App.css'
import img from "./assets/QR.svg"

function App() {
  return (
    <div className="relative min-h-screen bg-slate-300 z-10">
        <div className="flex relative items-center justify-center min-h-screen">
          <div className="bg-white relative rounded-xl shadow-lg p-4 pb-10 w-80 h-[499px] text-center flex flex-col gap-4 z-20">
            <div className="bg-blue-600 rounded-lg p-16 z-5">
              <img
              src={img}
              alt="QR Code"
              className="w-40 h-40 mx-auto"
              />
              </div>
            <h1 className="text-center text-[var(--color-slate-900, #1F314F)] font-outfit text-[22px] font-bold leading-[26.4px] tracking-[0.2px]" >
              Improve your front-end
              skills by building projects
            </h1>
            <p className="h-[63px] text-center text-h1 font-outfit text-[15px] font-normal leading-[21px] tracking-[0.2px]">
              Scan the QR code to visit Frontend Mentor
              and take your coding skills
              to the next level!
            </p>
          </div>
        </div>
    </div>
  );
}

export default App
