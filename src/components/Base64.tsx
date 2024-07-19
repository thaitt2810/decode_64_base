'use client'
import { useEffect, useState } from "react"
import ICopy from "./Copy";

function Base64() {
    const [value, setValue] = useState<string>("");
    const [value2, setValue2] = useState<string>("");
    console.log("HI")
    useEffect(() => {
        const btns = document.querySelectorAll('.code-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                btns.forEach(item => {
                    item.classList.remove('bg-pink-500')
                })
                btn.classList.add('bg-pink-500')
            })
        })

    }, [])

    useEffect(() => {
        const btns = document.querySelectorAll('.code-btn');
        btns.forEach(btn => {
            if (btn.classList.contains('bg-pink-500')) {
                let encodedString = encodeURIComponent(value);
                setValue2(encodedString);
            } else {
                let decodedString = decodeURIComponent(value);
                setValue2(decodedString);
            }
        })
    }, [value])

    const handleDecode = () => {
        let decodedString = decodeURIComponent(value);
        setValue2(decodedString);
    }

    const handleEncode = () => {
        let encodedString = encodeURIComponent(value);
        setValue2(encodedString);
    }

    const handleCopyDecode = () => {
        navigator.clipboard.writeText(value);
    }

    const handleCopyEncode = () => {
        navigator.clipboard.writeText(value2);
    }


    return (
        <div className="my-7">
            <div className="text-white flex justify-center mb-4 font-bold">
                <button className="code-btn py-2 px-3 bg-[#444a68] rounded-l-md bg-pink-500" onClick={handleDecode} >DECODE</button>
                <button className="code-btn py-2 px-3 bg-[#444a68] rounded-r-md" onClick={handleEncode}>ENCODE</button>
            </div>
            <div className="flex space-x-4 justify-center">
                <div className="relative">
                    <textarea className="w-[400px] h-[300px] bg-[#444a68]  text-white rounded-md p-2 placeholder-white"
                        placeholder="Type or paste here"
                        onChange={(e) => setValue(e.target.value)}
                    >

                    </textarea>
                    <ICopy className="absolute bottom-[20px] right-[20px] text-white" onClick={handleCopyDecode} />
                </div>
                <div className="relative">
                    <textarea className="w-[400px] h-[300px] bg-[#444a68]  p-2 rounded-md text-white "
                        placeholder="Result"
                        disabled
                        value={value2 ? value2 : "Result"}
                    >
                    </textarea>
                    <ICopy className="absolute bottom-[20px] right-[20px] text-white" onClick={handleCopyEncode} />
                </div>
            </div>
        </div>
    )
}

export default Base64
