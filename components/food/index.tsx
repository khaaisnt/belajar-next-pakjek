"use client"
import Image from "next/image"
import { useState } from "react"

type props = {
    title: string
    description: string
    rating: number
    price: number
    image: string
}

const Foods = (myProps: props) => {
    const [likeCount, setLikeCount] = 
        useState<number>(myProps.rating)

    return (
        <div className="w-full bg-white shadow-md min-h-[250px] my-2 border rounded-md p-3">
            <div className="w-full h-full justify-between flex">
                {/* text section */}
                <div className="p-2 flex-col w-full">
                    <h1 className="text-xl mb-2 font-semibold">
                        {myProps.title}
                    </h1>
                    <span>
                        <span className="text-red-500">
                            &#x2764;
                        </span>
                        {likeCount} orang suka ini
                    </span>
                    <p className="text-sm text-slate-400 font-thin">
                        {myProps.description}
                    </p>
                    <h3 className="text-lg mt-2 font-semibold">
                        Rp. {myProps.price}
                    </h3>
                    <button 
                    className="text-red-300 hover:text-red-500 transition-all duration-200"
                    onClick={() => {
                        let tempLikeCOunt = likeCount
                        setLikeCount(tempLikeCOunt + 1)
                    }}
                    >
                        &#x2764;
                    </button>
                </div>
                {/* image section */}
                <div className="p-2 w-full flex items-center">
                    <Image 
                    src={myProps.image} 
                    alt="Food Image" 
                    width={300} 
                    height={300} 
                    className="rounded-lg" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Foods