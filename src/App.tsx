// import './App.css'
// import img from "./assets/QR Image.svg"

// function App() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-slate-200 font-outfit">
//       <div className="bg-white max-w-[360px] max-h-[288] rounded-[17px] shadow-lg p-4 mx-4 text-center">
//         <img
//           src={img}
//           alt="QR Code"
//           className="w-full rounded-[12px]"
//         />
//         <div className="pt-4 pb-10 w-full">
//           <h1 className="text-slate-900 block font-outfit text-[22px] font-bold leading-[26.4px] tracking-[1px] w-full pb-4">
//             Improve your front-end <br />skills by building projects
//           </h1>
//           <p className="text-slate-500 text-base">
//             Scan the QR code to visit Frontend Mentor and take your coding skills to  <br /> the next level
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App

import './App.css'
import img from "./assets/QR Image.svg"
function App() {
  return (
    <div className="relative min-h-screen bg-slate-300 z-10">
        <div className="flex relative items-center justify-center min-h-screen">
          <div className="bg-white relative rounded-xl shadow-lg p-4 pb-10 w-80 h-[499px] text-center flex flex-col z-20">
              <img
              src={img}
              alt="QR Code"
              className="w-full mx-auto"
              />
            <h1 className="text-center text-[var(--color-slate-900, #1F314F)] font-outfit text-[22px] font-bold leading-[26.4px] tracking-[0.2px] pt-[24px]" >
              Improve your front-end
              skills by building projects
            </h1>
            <p className="h-[63px] text-center text-h1 font-outfit text-[15px] font-normal leading-[21px] tracking-[0.2px] pt-4">
              Scan the QR code to visit Frontend Mentor
              and take your coding skills
              to  <br />  the next level!
            </p>
          </div>
        </div>
    </div>
  );
}
export default App