import React, { useState } from "react";
import Button from "../Button";
import { Tilt } from 'react-tilt'
// import Tilt from 'react-vanilla-tilt';
const Contact = () => {
    const defaultOptions: any = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.05,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    return (
        <div>
            <div className="w-full bg-[rgba(255,255,255,0.64)] dark:bg-[rgba(0,0,0,0.64)]">

            </div>
        </div>

    );
}

export default Contact;