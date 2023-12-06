
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import './style.css'

const Effect = ({className}:any) => {
    const select :any= useRef(null);
    const lightModeBTN:any = useSelector((state:any) => state.counter.value)
    useEffect(function onFirstMount() {
        let bodyRect = document.body.getBoundingClientRect(),
            base = select.current.getBoundingClientRect(),
            top =  bodyRect.top - base.top,
            left =  bodyRect.left - base.left,
            circle = document.createElement('div'),
            top2 = ( Number(lightModeBTN[1]) + window.scrollY ) + top,
            left2 = (Number(lightModeBTN[2]) + window.scrollX ) + left

        circle.style.marginTop = `${top2}px`;
        circle.style.marginLeft = `${left2}px`;
        if (lightModeBTN[0] === true)
            circle.classList.add('dark')
        else if (lightModeBTN[0] === false)
            circle.classList.add('light')
        const ripple = Array(select.current.querySelectorAll('div'))[0]
        setTimeout(() => {
            ripple.forEach((element:any) => {
                if (element)
                    element.remove()
            });
        }, 1500)
        select.current.appendChild(circle)
    }, [lightModeBTN]);

    return (
        <div className={`EffectLightMode overflow-hidden w-[100%] h-[100%] absolute -z-10 ${lightModeBTN[0]?'dark':'light'}`} key={1} ref={select}>
        </div>
    );
}

export default Effect;