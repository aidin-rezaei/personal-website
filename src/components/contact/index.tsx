// import React, { useState } from "react";
import Button from "../Button";
import { Tilt } from 'react-tilt'

// import Tilt from 'react-vanilla-tilt';
const Contact = () => {
    // const defaultOptions: any = {
    //     reverse: false,  // reverse the tilt direction
    //     max: 100,     // max tilt rotation (degrees)
    //     perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    //     scale: 1.05,    // 2 = 200%, 1.5 = 150%, etc..
    //     speed: 1000,   // Speed of the enter/exit transition
    //     transition: true,   // Set a transition on enter/exit.
    //     axis: null,   // What axis should be disabled. Can be X or Y.
    //     reset: true,    // If the tilt effect has to be reset on exit.
    //     easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    // }
    console.profile()
    return (
        <div className=" w-full flex justify-center items-center flex-col">
            <div className="w-full relative flex justify-center items-center">
                <div className="absolute max-w-[700px] w-full h-full">
                    <div className="absolute top-[40%] left-[10%] before:shadow-[0_0_70px_50px_rgba(158,0,255,0.9)]"></div>
                    <div className="absolute top-[70%] left-[20%] before:shadow-[0_0_100px_80px_rgba(0,209,255,0.64)]"></div>
                    <div className="absolute top-[70%] left-[70%] before:shadow-[0_0_70px_50px_rgba(173,255,0,0.26)]"></div>
                    <div className="absolute top-[20%] left-[90%] before:shadow-[0_0_100px_80px_rgba(255,0,92,0.26)]"></div>
                </div>
                <Button btnclass='h-[100%] w-[100%] w-full' className=' bg-[rgba(255,255,255,0.64)] dark:bg-[rgba(0,0,0,0.64)] flex justify-center items-center py-2 font-sans uppercase'>
                    <div className="max-w-[700px] w-full grid grid-cols-2">
                        <div className="w-full flex justify-start items-center">
                            <div className="p-2">
                                <img
                                    className="rounded-full"
                                    src="/aidin.jpg"
                                    width={80}
                                    height={0}
                                    alt="Aidin Rezaei"
                                />
                            </div>
                            <div>
                                <h1 className="font-bold">Aidin Rezaei</h1>
                                <p className="text-xs text-[#919191]">
                                    aydinrezaeefdr@gmail.com
                                </p>
                                <p className="text-xs text-[#919191]">
                                    +989038007960
                                </p>
                            </div>
                        </div>
                        <div className="w-full  flex justify-end items-center gap-2">
                            <div className="hover:scale-105">
                                <div className='w-[50px] h-[50px] rounded-lg bg-[rgba(235,235,235,0.80)] dark:bg-[rgba(98,98,98,0.80)] hover:bg-opacity-80 dark:hover:bg-opacity-70 px-[10px] flex items-center justify-start flex-col gap-3 p-2 text-xs'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="46" viewBox="0 0 47 46" fill="none">
                                        <path d="M23.7402 32.2052C28.8628 32.2052 33.0157 28.0523 33.0157 22.9296C33.0157 17.8069 28.8628 13.6541 23.7402 13.6541C18.6174 13.6541 14.4646 17.8069 14.4646 22.9296C14.4646 28.0523 18.6174 32.2052 23.7402 32.2052Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.87012 32.2052V13.654C2.87012 7.2506 8.06115 2.05957 14.4646 2.05957H33.0157C39.4191 2.05957 44.6102 7.2506 44.6102 13.654V32.2052C44.6102 38.6086 39.4191 43.7997 33.0157 43.7997H14.4646C8.06115 43.7997 2.87012 38.6086 2.87012 32.2052Z" stroke="currentColor" stroke-width="4" />
                                        <path d="M36.4941 10.1986L36.5173 10.1729" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="hover:scale-105">
                                <div className='w-[50px] h-[50px] rounded-lg bg-[rgba(235,235,235,0.80)] dark:bg-[rgba(98,98,98,0.80)] hover:bg-opacity-80 dark:hover:bg-opacity-70 px-[10px] flex items-center justify-start flex-col gap-3 p-2 text-xs'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="48" viewBox="0 0 47 48" fill="none">
                                        <path d="M32.344 45.7619V39.6187C32.4243 38.5981 32.2864 37.5719 31.9395 36.6087C31.5925 35.6454 31.0445 34.767 30.3319 34.0319C37.0532 33.2827 44.1168 30.7355 44.1168 19.0483C44.1162 16.0598 42.9668 13.1859 40.9061 11.0214C41.8817 8.40676 41.8128 5.51672 40.7134 2.95164C40.7134 2.95164 38.1876 2.20246 32.344 6.1196C27.438 4.78995 22.2665 4.78995 17.3604 6.1196C11.5168 2.20246 8.99099 2.95164 8.99099 2.95164C7.89155 5.51672 7.82256 8.40676 8.79834 11.0214C6.7223 13.2019 5.57156 16.1018 5.58757 19.1125C5.58757 30.7141 12.6512 33.2613 19.3725 34.0961C18.6682 34.8239 18.1251 35.6917 17.7784 36.6431C17.4318 37.5946 17.2893 38.6086 17.3604 39.6187V45.7619" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.3603 41.4809C10.9388 43.564 5.58748 41.4809 2.37671 35.0593" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="hover:scale-105">
                                <div className='w-[50px] h-[50px] rounded-lg bg-[rgba(235,235,235,0.80)] dark:bg-[rgba(98,98,98,0.80)] hover:bg-opacity-80 dark:hover:bg-opacity-70 px-[10px] flex items-center justify-start flex-col gap-3 p-2 text-xs'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                        <path d="M44.6234 14.3235V32.8746C44.6234 39.278 39.4323 44.4691 33.0289 44.4691H14.4778C8.07433 44.4691 2.8833 39.278 2.8833 32.8746V14.3235C2.8833 7.92003 8.07433 2.729 14.4778 2.729H33.0289C39.4323 2.729 44.6234 7.92003 44.6234 14.3235Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.1592 35.1934V27.0773V18.9612" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.4343 35.1934V27.657M21.4343 27.657V18.9612M21.4343 27.657C21.4343 18.9612 35.3477 18.9612 35.3477 27.657V35.1934" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.1592 12.0275L12.1824 12.0017" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="hover:scale-105">
                                <div className='w-[50px] h-[50px] rounded-lg bg-[rgba(235,235,235,0.80)] dark:bg-[rgba(98,98,98,0.80)] hover:bg-opacity-80 dark:hover:bg-opacity-70 px-[10px] flex items-center justify-start flex-col gap-3 p-2 text-xs'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="31" viewBox="0 0 58 46" fill="none">
                                        <path d="M55.7475 2.05957L2.87671 22.9296L22.3554 25.7123M55.7475 2.05957L48.7908 43.7997L22.3554 25.7123M55.7475 2.05957L22.3554 25.7123M22.3554 25.7123V41.017L31.3958 31.8979" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </Button>
                {/* <div className="w-full h-[200px] bg-[rgba(255,255,255,0.64)] dark:bg-[rgba(0,0,0,0.64)] flex justify-center items-center">

</div> */}
            </div>
            <div className="relative z-10 pt-16 max-w-[700px] w-full grid grid-cols-2 grid-rows-6 gap-5">
                <div className=' w-full'>
                    <input className="text-sm p-2 w-full rounded-lg" type="text" name="" id="" placeholder="Full Name" />
                </div>
                <div className=' w-ful'>
                    <input className="text-sm p-2 w-full rounded-lg" type="text" name="" id="" placeholder="Enter E-mail" />
                </div>
                <div className='col-span-2 w-ful'>
                    <input className="text-sm p-2 w-full rounded-lg" type="text" name="" id="" placeholder="subject" />
                </div>
                <div className='col-span-2 row-span-4 w-full'>
                    <textarea className="text-sm p-2 w-full h-full resize-none rounded-lg" name="" id="" placeholder="message"></textarea>
                </div>
            </div>
        </div>

    );
}

export default Contact;