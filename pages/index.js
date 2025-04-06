import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import React, { View, Text, Button } from 'react';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="">
      <div className="flex flex-row w-full h-30 mb-10 bg-blue-500">
        <h1 className="text-7xl ml-175 mt-7 text-orange-600">Calgary Zoo DB</h1>
      </div>
      
      <main className="flex flex-col w-full items-center">
        

        <div className="flex flex-row flex-wrap h-250 w-450 border-2">
          <div className="flex w-75 h-75 bg-neutral-900 justify-center items-center m-18">
            <Link href="/animals/alpacas">
              <div className="flex flex-col gap-10 w-75 h-75 items-center justify-center">
                <text className="text-4xl text-yellow-500 mt-5">Alpacas</text>
                <Image
                  src="/alpaca.jpg"
                  alt="Alpaca Image"
                  height={300}
                  width={300}>
                </Image>
              </div>
            </Link>
          </div>

          <div className="flex w-75 h-75 bg-neutral-900 justify-center items-center mt-18 mx-18">
            <Link href="/animals/bighornSheep">
              <div className="flex flex-col gap-10 w-75 h-75 items-center justify-center">
                <text className="text-4xl text-yellow-500 mt-5">Bighorn Sheep</text>
                <Image
                  src="/bighornSheep.jpg"
                  alt="Bighorn Sheep Image"
                  height={210}
                  width={210}>
                </Image>
              </div>
            </Link>
          </div>

          <div className="flex w-75 h-75 bg-neutral-900 justify-center items-center m-18">
            <Link href="/animals/africanLions">
              <div className="flex flex-col gap-10 w-75 h-75 items-center justify-center">
                <text className="text-4xl text-yellow-500 mt-5">African Lions</text>
                <Image
                  src="/africanLion.jpg"
                  alt="African Lion Image"
                  height={300}
                  width={300}>
                </Image>
              </div>
            </Link>
          </div>

          <div className="flex w-75 h-75 bg-neutral-900 justify-center items-center m-18">
            <Link href="/animals/blackBear">
              <div className="flex flex-col gap-10 w-75 h-75 items-center justify-center">
                <text className="text-4xl text-yellow-500 mt-5">Black Bears</text>
                <Image
                  src="/blackBear.jpg"
                  alt="Black Bear Image"
                  height={300}
                  width={300}>
                </Image>
              </div>
            </Link>
          </div>

          <div className="flex w-75 h-75 bg-neutral-900 justify-center items-center m-18">
            <Link href="/animals/giraffe">
              <div className="flex flex-col gap-10 w-75 h-75 items-center justify-center">
                <text className="text-4xl text-yellow-500 mt-5">Giraffes</text>
                <Image
                  src="/giraffe.jpg"
                  alt="Giraffe Image"
                  height={300}
                  width={300}>
                </Image>
              </div>
            </Link>
          </div>

          <div className="flex w-75 h-75 bg-neutral-900 justify-center items-center m-18">
            <Link href="/animals/moose">
              <div className="flex flex-col gap-10 w-75 h-75 items-center justify-center">
                <text className="text-4xl text-yellow-500 mt-5">Moose</text>
                <Image
                  src="/moose.jpg"
                  alt="Moose Image"
                  height={300}
                  width={300}>
                </Image>
              </div>
            </Link>
          </div>

        </div>
        
        
      </main>
    </div>
  );
}
