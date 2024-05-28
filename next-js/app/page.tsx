"use client"

import React, { useRef, useState } from "react"
import Card from "@/components/Card"
import { format } from "path";
import Image from 'next/image'
import { Chakra_Petch } from "next/font/google";

const chakra = Chakra_Petch({ subsets: ["latin"], weight: ['300'] });

export default function Home() {

  const [cardNum, setCardNum] = useState('XXXXXXXXXXXXXXXX');
  const [color, setColor] = useState("secondary")
  const [result, setResult] = useState('Result displayed here');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNum(e.target.value)
  }

  const handleClick = () => {

    const cardArray = cardNum.toString().split('');

    const oddDigits = cardArray.reverse().filter((_, index) => index % 2 === 0);
    const evenDigits = [];

    for (let i = 0; i < cardArray.length; i++) {
      if (i % 2 !== 0) {
        evenDigits.push(cardArray[i]);
      };
    };

    evenDigits.reverse();

    const doubleEven: any[] = [];

    evenDigits.forEach((digit) => {
      const doubled = Number(digit) * 2;
      if (doubled > 9) {
        const splitDouble = doubled.toString().split('');
        splitDouble.forEach((num) => {
          doubleEven.push(Number(num));
        })
      } else {
        doubleEven.push(Number(digit) * 2);
      }
    })

    const adder = (array: any[]) => {
      let sum = 0;
      array.forEach((num) => {
        sum += Number(num);
      });
      return sum;
    };

    let evenSum = adder(doubleEven);
    let oddSum = adder(oddDigits);

    const totalSum = evenSum + oddSum;

    totalSum % 10 === 0 ? setResult("Card is Valid") : setResult("Card is not Valid");
  }

  let newString: string[] = [];
  for (let i = 0; i < 16; i++) {
    if (i % 4 === 0 && i !== 0) {
      newString.push(' - ');
      newString.push(cardNum[i]);
    } else {
      newString.push(cardNum[i]);
    }
  }

  return (
    <>
      <h1 className="text-4xl text-primary font-bold underline underline-offset-8">Credit Card Validator</h1>

      <div className="flex gap-3">

        <input
          value={cardNum}
          onChange={handleChange}
          type="number"
          placeholder="Credit card number"
          className="text-lg p-2 rounded-md w-full focus:outline-0 border-[1px] text-primary focus:border-primary"
        />

        <button
          className="btn bg-transparent border-primary text-lg p-2 rounded-md hover:bg-primary hover:text-background hover:border-primary"
          onClick={handleClick}
        >
          Validate
        </button>

      </div>

      <div className="flex justify-center flex-col rounded-xl bg-accent w-[500px] aspect-video text-3xl min-w-[300px] relative">

        <div className="w-full bg-secondary h-20 top-10 grid place-items-end">
          <Image src="/logo.png" alt="logo" width="75" height="75" />
        </div>

        <div className="flex text-black p-3 uppercase">Anshuman Bhardwaj</div>

        <div className={`${chakra.className} bg-secondary w-full h-[36px] px-3 overflow-hidden`}>{newString}</div>

        <div className="flex flex-row items-center text-sm gap-0 text-secondary">
          <p className='text-[10px] leading-3'>VALID<br />THRU</p>
          <p>&infin;/&infin;</p>
        </div>

      </div>

      <div className={`text-xl bg-${color} flex items-center justify-center w-64 h-10 p-2 rounded-lg border-gray-600 border-[1px]`}>{result}</div>
    </>
  );
}
