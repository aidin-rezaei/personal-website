
import { useEffect, useRef } from "react"
import './style.css'

const Button = ({ className, style, link, click, children, disabled, btnclass, borderclass }:any) => {
    const effect:any = useRef(null);
    const btn:any = useRef(null);

    const onclicked = (e:any) => {
        // if (link !== undefined)
        //     router.push(`${link}`)
        if (click !== undefined) click(e)
    }
    useEffect(() => {
        let body = document.body
        body.addEventListener('mousemove', () => {
            let bodyRect = document.body.getBoundingClientRect(),
                base = btn.current.getBoundingClientRect(),
                top = bodyRect.top - base.top,
                left = bodyRect.left - base.left,
                e:any = window.event,
                top2 = (e.clientY + window.scrollY) + top,
                left2 = (e.clientX + window.scrollX) + left
            effect.current.style.setProperty('top', `${top2}px`)
            effect.current.style.setProperty('left', `${left2}px`)
        })
    }, [])
    return (
        <div ref={btn} className={`btn ${btnclass}`} style={style} onClick={onclicked}>
            <div className={`border ${borderclass}`}>
                <div ref={effect} className=" effect">
                </div>
            </div>
            <div className={`content ${className ? className : ''}`} style={style}>
                {children}
            </div>
        </div>
    );
}

export default Button;