import { FiPhone as Phone } from "react-icons/fi";
import { ImHeart as Love } from "react-icons/im";
import { AiOutlineCopyright as CopyRight } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Footer = () => {

  return (
    <div>
      <div  id="contact">
        <div className=" flex flex-col items-center gap-10 py-10 bg-black text-[#f6efee]">
          <h1 className=" text-[50px] font-bold bg-gradient-to-r from-blue-500 via-green-500 to-green-500 bg-clip-text text-transparent">Contact us</h1>
          <div className=" flex gap-20 md:flex-col md:text-center">

            <div>
              <h1 className=" font-bold text-[20px]">Overall Coordinator</h1>
              <p className=" pt-2 text-gray-400">Dr. G. Selvavinayagam</p>
              <p className=" text-gray-400">Prof & HOD/PG Studies</p>
              <Link to={"tel:+919865222182"} className=" flex items-center md:justify-center gap-2 text-gray-400"><Phone/>+91 9865222182</Link>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className=" font-bold text-[20px]">Faculty Coordinators</h1>
              <div>
                <h1 className=" font-bold">CSE/IT/AIDS</h1>
                <p className=" text-gray-400">Mrs. Saranya A - AP/CSE</p>
                <Link to={"tel:+919786655443"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9786655443</Link>
              </div>
              <div>
                <h1 className=" font-bold">ECE/EEE</h1>
                <p className=" text-gray-400">Mr. V Balasubramanian - AP/ECE</p>
                <Link to={"tel:+919994102992"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9994102992</Link>
              </div>
              <div>
                <h1 className=" font-bold">MECH</h1>
                <p className=" text-gray-400">Mr. C Rajasekar - AP/MECH</p>
                <Link to={"tel:+919488725369"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9488725369</Link>
              </div>
              <div>
                <h1 className=" font-bold">S&H</h1>
                <p className=" text-gray-400">Ms. Jamunarani R - AP/S&H</p>
                <Link to={"tel:+919894500664"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9894500664</Link>
              </div>
              <div>
                <h1 className=" font-bold">MBA</h1>
                <p className=" text-gray-400">Ms. Nancy B - AP/MBA</p>
                <Link to={"tel:+919994823251"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9994823251</Link>
              </div>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className=" font-bold text-[20px]">Student Coordinators</h1>
              <div>
                <h1 className=" font-bold">CSE/IT/AIDS</h1>
                <p className=" text-gray-400">Manoj Kumar A</p>
                <Link to={"tel:+919597028220"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9597028220</Link>
              </div>
              <div>
                <h1 className=" font-bold">ECE/EEE</h1>
                <p className=" text-gray-400">Harinesh</p>
                <Link to={"tel:+919787330422"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9787330422</Link>
              </div>
              <div>
                <h1 className=" font-bold">MECH</h1>
                <p className=" text-gray-400">Manoj Kumar M</p>
                <Link to={"tel:+918807810100"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 8807810100</Link>
              </div>
              <div>
                <h1 className=" font-bold">S&H</h1>
                <p className=" text-gray-400">Abishek</p>
                <Link to={"tel:+919159306622"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9159306622</Link>
              </div>
              <div>
                <h1 className=" font-bold">MBA</h1>
                <p className=" text-gray-400">Paramesh</p>
                <Link to={"tel:+918870760115"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 8870760115</Link>
              </div>
            </div>
          </div>
        </div>
          <div className=" flex flex-col items-center justify-center p-4 gap-3 bg-black border-t-2 border-t-gray-400">
            <h1 className=" flex items-center gap-2 text-gray-400">Made with <Love className=" text-[#ff9200]"/> by <Link to={"https://coderscave.in"} className=" text-[#ff9200]">CodersCave</Link> For IIE</h1>
            <p className="  flex items-center gap-2 text-gray-400"><CopyRight/> Copyright <Link to={"http://infoengg.com"} className=" bg-gradient-to-r from-blue-500 via-green-500 to-green-500 bg-clip-text text-transparent">Info Engg.</Link>  All Rights Reserved</p>
          </div>
      </div>
    </div>
  )
}

export default Footer