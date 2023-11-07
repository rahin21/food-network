import {TbSmartHome} from 'react-icons/tb'
import {RiApps2Line} from 'react-icons/ri'
import {PiPaperPlaneTiltBold} from 'react-icons/pi'
import {LuPlaySquare} from 'react-icons/lu'
import {IoApps} from 'react-icons/io5'
import Button from './ui/button'
const SideBar = () => {
  return (
    <div className='hidden md:flex flex-col justify-center bg-card w-[4.4rem] h-[93vh]'>
      <div className="flex flex-col items-center gap-[2.5rem]">
        <Button cl='text-[#101011c5] bg-[#1010101A]'><TbSmartHome/></Button> 
        <Button cl='text-[#101011c5] bg-[#1010101A]'><RiApps2Line/></Button> 
        <Button cl='text-[#101011c5] bg-[#1010101A]'><PiPaperPlaneTiltBold/></Button> 
        <Button cl='text-[#101011c5] bg-[#1010101A]'><LuPlaySquare/></Button> 
        <Button cl='text-[#101011c5] bg-[#1010101A]'><IoApps/></Button> 
      </div>
    </div>
  )
}

export default SideBar