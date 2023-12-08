/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";

const Logo = ({ children }: any) => {
    const [classl, setclassl] = useState(true)
    useEffect(() => {
        function disableScroll() {
            // اگر صفحه به پایین اسکرول شده باشد، اسکرول را به بالا ببرید.
            var scrollTop: any = window.pageYOffset || document.documentElement.scrollTop;
            var scrollLeft: any = window.pageXOffset || document.documentElement.scrollLeft;
            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
        }

        // فعال کردن اسکرول
        function enableScroll() {
            window.onscroll = function () { };
        }

        // مثال: غیرفعال کردن اسکرول به مدت 3 ثانیه

        const event: any = window.scrollY
        if (event >= 100) {
            setclassl(true)
        }
        else {

            setclassl(false)
        }
        if (event >= 100 && event <= (screen.height - 100)) {
            window.scrollTo(0, (screen.height + 50));
            disableScroll();
            setTimeout(function () {
                enableScroll();
            }, 1000);
            // window.scroll({
            //     behavior: "smooth",
            //     left: 0,
            //     top: (screen.height + 100),
            // });
        }
        else if (event >= (screen.height - 200) && event <= screen.height) {
            // console.log('0 ' + event);
            window.scrollTo(0, 0);
            disableScroll();
            setTimeout(function () {
                enableScroll();
            }, 1000);
            // window.scroll({
            //     behavior: "smooth",
            //     left: 0,
            //     top: 0,
            // });
        }
        window.addEventListener('scroll', (e) => {
            e.preventDefault();

            const event = window.scrollY
            if (event >= 100) {
                setclassl(true)
            }
            else {

                setclassl(false)
            }
            if (event >= 100 && event <= (screen.height - 100)) {
                window.scrollTo(0, (screen.height + 50));
                disableScroll();
                setTimeout(function () {
                    enableScroll();
                }, 1000);
                // window.scroll({
                //     behavior: "smooth",
                //     left: 0,
                //     top: (screen.height + 100),
                // });
            }
            else if (event >= (screen.height - 200) && event <= screen.height) {
                // console.log('0 ' + event);
                window.scrollTo(0, 0);
                disableScroll();
                setTimeout(function () {
                    enableScroll();
                }, 1000);
                // window.scroll({
                //     behavior: "smooth",
                //     left: 0,
                //     top: 0,
                // });
            }
            // if (event >= 10){

            //     window.scrollTo(0, 0);
            // }
        })

    }, [])
    return (
        <div className={`logo fixed pointer-events-none transition-all duration-500 fontsforweb_fontid_2802 top-0 left-0 ${classl ? " ml-[10px] text-lg  z-[100]" : "z-0 ml-[10%] mt-[calc(100%_/_5)] text-7xl md:text-9xl after:content-[''] before:content-[''] before:absolute before:top-[220px] before:left-[100px] dark:before:shadow-[0_0_200px_120px_rgba(0,255,209,0.34)] before:-z-10  after:absolute after:-z-10 dark:after:shadow-[0_0_200px_120px_rgba(0,178,255,0.54)] after:shadow-[0_0_200px_120px_rgba(0,178,255,0.20)] before:shadow-[0_0_200px_120px_rgba(0,255,209,0.20)] after:left-[100%] after:top-[50%] after:rounded-full before:rounded-full"}`}>
            {children}
            <div className={`font-sans text-4xl md:text-6xl md:-mt-10 -mt-5 flex justify-center items-center ${classl ? " hidden" : " opacity-100"}`}>
                <div className="md:w-[60px] w-[30px] mt-5 md:mt-[38px] md:h-[40px] h-[25px] flex flex-col justify-between items-center">
                    <div className="w-[100%] md:h-[6px] h-[3px] rounded-xl transition-all duration-500 bg-black dark:bg-white"></div>
                    <div className="w-[100%] md:h-[6px] h-[3px] rounded-xl transition-all duration-500 bg-black dark:bg-white"></div>
                    <div className="w-[100%] md:h-[6px] h-[3px] rounded-xl transition-all duration-500 bg-black dark:bg-white"></div>
                </div>
                programmer
            </div>

        </div>
    );
}

export default Logo;