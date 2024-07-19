'use client'
import ICopy from "@/components/Copy";
import Image from "next/image";
import { useState, useRef, useEffect } from "react"

function Base64Image() {
    const [value, setValue] = useState("");
    const handleOnChange = (e: any) => {
        setValue(e.target.value)
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(value);
    }
    return (
        <div className="flex space-x-4 my-7 justify-center mt-[80px]">
            <div className="relative">
                <textarea
                    name="" id=""
                    className="w-[400px] h-[300px] bg-[#444a68]  text-white rounded-md p-2 placeholder-white"
                    placeholder="Type or paste here" onChange={(e) => handleOnChange(e)}
                >
                </textarea>
                <ICopy className="absolute bottom-[20px] right-[20px] text-white" onClick={handleCopy} />
            </div>
            <div className="w-[400px] h-[300px] bg-[#444a68] rounded-md p-2 text-white">
                {value ? <img src={value} className="w-[400px] h-[200px]" /> : "Please paste a valid Base 64 image"}
            </div>
        </div>
    )
}

export default Base64Image

