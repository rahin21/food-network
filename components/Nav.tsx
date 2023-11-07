import React from 'react'
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import Button from './ui/button'
import {HiSun} from "react-icons/hi"
const Nav = () => {
  return (
    <div className='bg-card h-[3.75rem] flex justify-between items-center'>
        <Image src={'/foodNetwork.png'} alt='Food Network Logo' width={100} height={100}/>
        <Input type='text'/>
        <div className='flex'>
            <Button cl=''><HiSun/></Button>
        </div>
    </div>
  )
}

export default Nav