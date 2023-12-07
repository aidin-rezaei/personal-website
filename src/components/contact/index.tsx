// import React, { useState } from "react";
// import Button from "../Button";
// import { Tilt } from 'react-tilt'

import Button from "../Button";

// import Tilt from 'react-vanilla-tilt';
const Contact = () => {
    // const defaultOptions: any = {
    //     reverse: false,  // reverse the tilt direction
    //     max: 35,     // max tilt rotation (degrees)
    //     perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    //     scale: 1.05,    // 2 = 200%, 1.5 = 150%, etc..
    //     speed: 1000,   // Speed of the enter/exit transition
    //     transition: true,   // Set a transition on enter/exit.
    //     axis: null,   // What axis should be disabled. Can be X or Y.
    //     reset: true,    // If the tilt effect has to be reset on exit.
    //     easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    // }
    return (
        <div>
            <Button btnclass='h-[100%] w-[100%]w-full py-' borderclass='rounded-2xl' className=' bg-[rgba(255,255,255,0.64)] dark:bg-[rgba(0,0,0,0.64)] flex justify-center items-center'>
                <div className="max-w-[700px] w-full grid grid-cols-2">
                    <div className="w-full flex justify-start items-center">
                        <div>
                            <img
                                className="rounded-full"
                                src="/aidin.jpg"
                                width={80}
                                height={0}
                                alt="Aidin Rezaei"
                            />
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="w-full">e</div>

                </div>
            </Button>
            {/* <div className="w-full h-[200px] bg-[rgba(255,255,255,0.64)] dark:bg-[rgba(0,0,0,0.64)] flex justify-center items-center">

            </div> */}
        </div>

    );
}

export default Contact;