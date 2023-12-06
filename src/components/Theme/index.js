
import { useSelector } from "react-redux";
import 'aos/dist/aos.css';
import Aos from 'aos'
import { useEffect } from "react";
const Theme = ({ children }) => {
    const lightModeBTN = useSelector((state) => state.counter.value)
    useEffect(() => {
        Aos.init();
      }, [])
    return (
        <div className="h-[100%]"  data-mode={lightModeBTN[0]?'dark':'light'}>
            {children}
        </div>
    );
}

export default Theme;