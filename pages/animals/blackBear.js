import React from 'react';
import Image from "next/image";
import Link from "next/link";

const blackBear = "/blackBear.jpg";


export default function BlackBears() {
    return (
        <div>
            <Link href="/">
                <button className="border-1 border-gray-600 bg-green-500 w-30 mt-10 ml-10">Back</button>
            </Link>

            <div className="flex space-x-100 border-2 border-white m-10">
                <text className="text-7xl text-blue-500 m-50">Black Bears</text>
                <Image 
                    src={blackBear} 
                    alt="Black Bear image"
                    height={500}
                    width={500}>
                </Image>
            </div>

            <div className="flex mx-40">
                <div className="flex flex-col w-200 h-100 border-2 border-white m-10">
                    <text className="text-3xl text-blue-500">More About Black Bears</text>
                    <text className="text-blue-300">Put some info about Black Bears here</text>
                </div>

                <div className="flex flex-col w-200 h-100 border-2 border-white m-10">
                    <text className="text-3xl text-blue-500">Find Black Bears at the Calgary Zoo</text>
                    <text className="text-blue-300">Put a map or something showing where the Black Bear exhibit is located</text>
                </div>
            </div>
            
        </div>
        
        
    )
}
