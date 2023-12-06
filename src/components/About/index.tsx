import Button from "../Button";

const About = () => {
    return (
        <div>
            <div className="w-[100%] flex justify-center items-center transition-all duration-1000">
                <div className="w-[60px] h-[20px] pr-1 flex flex-col justify-between items-end" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className="w-[60%] h-[3px] rounded-xl transition-all duration-1000 bg-black dark:bg-white "></div>
                    <div className="w-[80%] h-[3px] rounded-xl transition-all duration-1000 bg-black dark:bg-white"></div>
                    <div className="w-[100%] h-[3px] rounded-xl transition-all duration-1000 bg-black dark:bg-white"></div>
                </div>
                <h2 className="text-2xl  font-bold relative after:content-[''] before:content-[''] before:absolute dark:before:shadow-[0_0_100px_60px_rgba(20,0,255,0.30)] before:-z-10 before:-top-[10px]  after:absolute after:-z-10 dark:after:shadow-[0_0_100px_60px_rgba(0,225,240,0.30)] after:shadow-[0_0_100px_50px_rgba(0,255,249,0.24)] before:shadow-[0_0_100px_50px_rgba(20,0,255,0.24)] after:left-[100%] after:top-[50%] after:rounded-full before:rounded-fullb " data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="100"
                    data-aos-offset="0"
                >About me</h2>
            </div>
            <div className="max-w-[700px] mx-auto text-justify mt-10 transition-all duration-1000" >
                <p className="" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="100"
                    data-aos-offset="0">
                    I am one of the professional programmers who work in the field of software and website development. With an experience of more than 5 years in this field, I am fluent in different programming languages ​​and have the ability to project and manage a team.
                    <br />
                    <br />
                    In my work, I pay close attention and also try to improve the efficiency and performance of the software by using new and up-to-date methods. My goal is to use my expertise to help my company or organization grow and prosper.
                    <br />
                    <br />
                    I am interested in new challenges in the field of programming and using my technical knowledge, I try to implement a new project with high quality.</p>
            </div>
            <div className="max-w-[650px] mx-auto my-7 flex justify-between items-center">
                <Button btnclass='h-[50px] w-[250px]' borderclass='rounded-lg' className='rounded-lg bg-[#D6DBDC] dark:bg-[#000000] hover:bg-opacity-80 dark:hover:bg-opacity-70 px-[10px] py-1 flex items-center justify-start gap-3 text-xs'>
                    <svg width="30" className="dark:text-white " stroke="currentColor" height="30" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.8803 24.8988L23.4106 26.3441C18.365 23.8153 15.2483 20.9106 13.4345 16.3827L14.831 8.90247L12.1911 1.89349H5.38757C3.34238 1.89349 1.73186 3.58109 2.03731 5.60034C2.79986 10.6414 5.04826 19.7813 11.6206 26.3441C18.5226 33.2358 28.4634 36.2264 33.9344 37.4151C36.0472 37.8742 37.9212 36.2284 37.9212 34.0695V27.5778L30.8803 24.8988Z" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="text-lg">

                        +989038007960
                    </p>
                </Button>
                <Button btnclass='h-[50px] w-[360px]' borderclass='rounded-lg' className='rounded-lg bg-[#D6DBDC] dark:bg-[#000000] hover:bg-opacity-80 dark:hover:bg-opacity-70 px-[10px] py-1 flex items-center justify-start gap-3 text-xs'>
                    <svg width="30" height="30" className="dark:text-white " stroke="currentColor" viewBox="0 0 40 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9805 9.05673L19.9608 15.3337L28.9411 9.05673" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 23.404V5.46993C2 3.48899 3.60825 1.88312 5.59212 1.88312H34.3291C36.3131 1.88312 37.9212 3.48899 37.9212 5.46993V23.404C37.9212 25.385 36.3131 26.9908 34.3291 26.9908H5.59212C3.60825 26.9908 2 25.385 2 23.404Z" stroke-width="3" />
                    </svg>

                    <p className="text-lg">
                        aydinrezaeefdr@gmail.com
                    </p>
                </Button>
            </div>
        </div>

    );
}

export default About;