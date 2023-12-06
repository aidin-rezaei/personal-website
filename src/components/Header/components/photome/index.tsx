import { useEffect, useState } from "react"

const Photome = ({ children }:any) => {
    const [classl, setclassl] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            const event = window.scrollY
            if (event >= 100) {
                setclassl(true)
            }
            else {

                setclassl(false)
            }
        })

    }, [])
    return (
        <div className={`transition-all duration-500 ${classl?"opacity-0":"opacity-100"}`} data-aos="fade-up" data-aos-mirror="true">
            {children}
        </div>
    );
}

export default Photome;