import { RxCross2 as Cross } from "react-icons/rx";
import { IoArrowForwardOutline as Arrow } from "react-icons/io5";

import {Link} from "react-router-dom";
const MenuItems = ({setShowMenu}) => {
    
    return (
        <div className=" fixed w-[25%] sm:w-[90%] md:w-[50%] duration-500  bg-blue-500 top-[25%] sm:top-[11%] right-0 py-[2.5%] pt-[2%] h-[100vh] z-50 cursor-default">

            <Arrow className=" float-right mr-[45%] sm:mr-[16%] cursor-pointer sm:mt-[5%] text-black text-[32px] bg-blue-500 z-50" onClick={()=>setShowMenu((prev)=>!prev)}/>

            <div className=' flex flex-col gap-10 p-5 justify-center rounded-md pl-[25%] text-[18px] w-full text-white bg-blue-500 h-full'>
                <Link to={"/"} className=' font-medium cursor-pointer'>Home</Link>
                <Link to={"/event/tech"} className='font-medium  cursor-pointer'>Events</Link>
                <Link to={'#contact'} onClick={() => scrollToContact()} className=' font-medium  cursor-pointer'>Contact</Link>
            </div>
        </div>
    )
}

export default MenuItems;