'use client'
import Link from 'next/link';
import '../app/globals.css'
import { useEffect, useState } from 'react';


const Tab = () => {
    // const [active, setActive] = useState("bg-white text-black py-1 px-2 rounded-sm cursor-pointer");
    useEffect(() => {
        const tabs = document.querySelectorAll('.tab-item');
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                tabs.forEach(item => {
                    item.classList.remove('active')
                })
                tab.classList.add('active')
            })
        })
    }, [])
    return (
        <div className="text-white flex my-5 space-x-4 text-lg justify-center ">
            <div className='tab-item py-1 px-2 cursor-pointer active'>
                <Link href={"/"}>Base 64</Link>
            </div>
            <div className='tab-item py-1 px-2 cursor-pointer'>
                <Link href={"/base64-image"}>Base 64 Image</Link>
            </div>
            <div className='tab-item py-1 px-2 cursor-pointer'>
                <Link href={"/json-formatter"}>JSON formatter</Link>
            </div>
            <div className='tab-item py-1 px-2 cursor-pointer'>
                <Link href={"/md5-converter"}>Md5 converter</Link>
            </div>
        </div>
    )
}

export default Tab