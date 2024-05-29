"use client"

import React, { useState } from "react"
import Card from "@/components/Card"
import { format } from "path";
import Image from 'next/image'
import { Chakra_Petch, Yatra_One } from "next/font/google";
import ContactlessRoundedIcon from '@mui/icons-material/ContactlessRounded';

const chakra = Chakra_Petch({ subsets: ["latin"], weight: ['400'] });
const yatra = Yatra_One({ subsets: ["latin"], weight: ['400'] });

export default function Home() {

  const [cardNum, setCardNum] = useState('');
  const [color, setColor] = useState('#2b2b2b')
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
    totalSum % 10 === 0 ? setColor("#2b83e2") : setColor("#ff6666");
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

  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === undefined) {
      newString[i] = 'X';
    }
  }

  const urls = {
    bank: 'https://aashirvaad-bank.netlify.app',
    port: 'https://anshuman.me'
  }

  const openWeb = (url: string) => {
    window.open(`${url}`, '_blank')
  }

  return (
    <>
      <header className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-4xl text-primary font-bold underline underline-offset-8 max-sm:text-3xl">Credit Card Validator</h1>
        <p>Powered by <span className={`${yatra.className} text-[#ff7722] underline underline-offset-2 cursor-pointer`} onClick={() => openWeb(urls.bank)}>Aashirvaad Bank</span></p>
      </header>

      <div className="flex gap-3 max-sm:w-[90%]">

        <input
          value={cardNum}
          onChange={handleChange}
          type="text"
          placeholder="Credit card number"
          className="text-lg p-2 rounded-md w-full focus:outline-0 border-[1px] text-primary focus:border-primary"
          maxLength={16}
        />

        <button
          className="btn bg-transparent border-primary text-lg p-2 rounded-md hover:bg-primary hover:text-background hover:border-primary"
          onClick={handleClick}
        >
          Validate
        </button>

      </div>

      <div className="creditCard flex justify-end flex-col gap-0 rounded-xl w-[500px] aspect-video text-3xl min-w-[300px] relative text-primary max-sm:w-[300px]">

        <div className="w-full h-20 absolute top-0 rounded-t-xl grid place-items-end max-sm:place-items-start max-sm:top-2">
          <Image src="/logo.png" alt="logo" width="75" height="75" className="bankLogo cursor-pointer" onClick={() => openWeb(urls.bank)} />
        </div>

        <ContactlessRoundedIcon className="absolute right-2 top-[50%] -translate-y-[50%]" style={{ fontSize: '30px', opacity: '0.6' }} />

        <div className="flex p-3 uppercase text-2xl cursor-pointer max-sm:text-sm" onClick={() => openWeb(urls.port)}>Anshuman Studios</div>

        <div className={`${chakra.className} w-full h-[36px] px-3 overflow-hidden cardNumber max-sm:text-lg`}>{newString}</div>

        <div className="validity flex flex-row gap-5 p-3 text-[20px] max-sm:hidden">
          <div className="flex flex-row items-center gap-0">
            <p className='text-[10px] leading-3'>VALID<br />FROM</p>
            <p>&infin;/&infin;</p>
          </div>

          <div className="flex flex-row items-center gap-0">
            <p className='text-[10px] leading-3'>VALID<br />THRU</p>
            <p>&infin;/&infin;</p>
          </div>
        </div>

      </div>

      <div className={`text-xl flex items-center justify-center w-64 h-10 p-2 rounded-lg border-gray-600 border-[1px]`} style={{ background: color }}>{result}</div>
    </>
  );
}
