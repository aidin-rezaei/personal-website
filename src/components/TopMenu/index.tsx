'use client'
import { useEffect, useState } from "react";
import Effect from "../Effect";
import LightModeBTN from "../LightModeBTN";

const TopMenu = () => {
    const [classl, setclassl] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            const event = window.scrollY
            if (event > 50)
                setclassl(true)
            else
                setclassl(false)

        })

    }, [])
    return (
        <div className={`topmenu fixed h-[60px] w-[100%] transition-all z-10 duration-500 bg-[rgb(200,205,206)] -top-[60px] ${classl ? "mt-[60px]" : ""}`}>
            <div className="absolute w-full h-[60px] flex items-center justify-end p-2 md:hidden">
                <div>
                    <LightModeBTN/>
                </div>
                <div>

                </div>
            </div>
            <Effect />
        </div>
    );
}

export default TopMenu;