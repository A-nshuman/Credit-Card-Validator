import React from 'react'
import Image from 'next/image'
import "../styles/globals.css"
import { Chakra_Petch } from "next/font/google";
import { formatNumber } from '@/utils/numberFormatter';

const chakra =  Chakra_Petch({ subsets: ["latin"], weight: ['300'] });

const Card = (cardNum: string) => {

  return (
    <div className="flex justify-center flex-col rounded-xl bg-accent w-[500px] aspect-video text-3xl min-w-[300px] relative">
      
      <div className="w-full bg-secondary h-20 top-10 grid place-items-end">
        <Image src="/logo.png" alt="logo" width="75" height="75" />
      </div>
    
      <div className="flex text-black p-3 uppercase">Anshuman Bhardwaj</div>

      <div className={`${chakra.className} flex bg-secondary w-full h-fit px-3`}>{formatNumber(cardNum)}</div>

      <div className="flex flex-row items-center text-sm gap-0 text-secondary">
        <p className='text-[10px] leading-3'>VALID<br/>THRU</p>
        <p>&infin;/&infin;</p>
      </div>
    
    </div>
  )
}

export default Card