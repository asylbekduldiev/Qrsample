import './App.css'
import img from "./assets/QR Image.svg"

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200 font-outfit">
      <div className="bg-white max-w-[360px] max-h-[288] rounded-[17px] shadow-lg p-4 mx-4 text-center">
        <img
          src={img}
          alt="QR Code"
          className="w-full rounded-[12px]"
        />
        <div className="pt-4 pb-10 w-full">
          <h1 className="text-slate-900 block font-outfit text-[22px] font-bold leading-[26.4px] tracking-[1px] w-full pb-4">
            Improve your front-end <br />skills by building projects
          </h1>
          <p className="text-slate-500 text-base">
            Scan the QR code to visit Frontend Mentor and take your coding skills to  <br /> the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App