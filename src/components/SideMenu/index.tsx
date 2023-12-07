import Button from "../Button";
import Effect from "../Effect";
import LightModeBTN from "../LightModeBTN";
import './style.css'
const scrollTo: any = (el: any) => {
    const element: any = document.getElementById(el)
    console.log(element, element.offsetTop, window.scrollY);
    if (window.scrollY > 0) {
        window.scroll({
            behavior: "smooth",
            left: 0,
            top: element.offsetTop - 150 < 0 ? 0 : element.offsetTop - 150,
        });

    } else if (element.offsetTop >= 100) {

        // setTimeout(() => {
            window.scroll({
                behavior: "smooth",
                left: 0,
                top: 500,
            });
            console.log(222);

        // }, 0);
        setTimeout(() => {
            window.scroll({
                behavior: "smooth",
                left: 0,
                top: element.offsetTop - 150 < 0 ? 0 : element.offsetTop - 150,
            });
            console.log(111);

        }, 1150);
    }

};
const SideMenu = () => {
    return (
        <div className="sidemenu dark:text-white fixed h-[calc(100%)] w-[60px] hover:w-[220px]  flex items-end  overflow-hidden z-10">
            <Effect />
            <div className="menu pb-[50px] flex justify-start items-center flex-col">
                <Button click={() => scrollTo("home")} btnclass='pitemm h-[60px]' className='itemmenu px-[10px] py-1  cursor-pointer flex items-center justify-start  text-xs'>
                    <div className="absolute w-[220px] flex items-center justify-start gap-3">
                        <img
                            className="rounded-full"
                            src="/aidin.jpg"
                            width={40}
                            height={0}
                            alt="Aidin Rezaei"
                        />
                        <p className="font-bold">Aidin rezaei</p>
                        <LightModeBTN />
                    </div>
                </Button>
                <Button click={() => scrollTo("about")} btnclass='pitemm h-[60px]' className='px-[10px] py-1 itemmenu flex cursor-pointer items-center justify-start gap-3 text-xs'>
                    <div className="absolute w-[220px] flex items-center justify-start gap-3">
                        <div className="w-[40px] flex items-center justify-center">
                            <svg width={20} height={20} stroke="currentColor" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.99432 24.983H16.9886M8.99432 24.983V18.321M8.99432 24.983H1.79943C1.35792 24.983 1 24.6251 1 24.1835V19.1205C1 18.6789 1.35792 18.321 1.79943 18.321H8.99432M16.9886 24.983V8.99432M16.9886 24.983H24.1835C24.6251 24.983 24.983 24.6251 24.983 24.1835V1.79943C24.983 1.35792 24.6251 1 24.1835 1H17.7881C17.3465 1 16.9886 1.35792 16.9886 1.79943V8.99432M8.99432 18.321V9.79375C8.99432 9.35224 9.35224 8.99432 9.79375 8.99432H16.9886" strokeWidth={2} />
                            </svg>
                        </div>
                        <p className="font-bold">my about</p>
                    </div>
                </Button>
                <Button click={() => scrollTo("skills")} btnclass='pitemm h-[60px]' className='px-[10px] cursor-pointer py-1 itemmenu flex items-center justify-start gap-3 text-xs'>
                    <div className="absolute w-[220px] flex items-center justify-start gap-3">
                        <div className="w-[40px] flex items-center justify-center">
                            <svg width={20} height={20} fill="none" stroke="currentColor" aria-hidden="true" strokeWidth={1.5} viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4752 1.22522L10.8118 17.8801" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.14846 4.5562L1.48511 9.21955L6.14846 13.8829" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.8047 4.5562L25.468 9.21955L20.8047 13.8829" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="font-bold">my skills</p>
                    </div>
                </Button>
                <Button click={() => scrollTo("contact")} btnclass='pitemm h-[60px] cursor-pointer' className='px-[10px]  py-1 itemmenu flex items-center justify-start gap-3 text-xs'>
                    <div className="absolute w-[220px] flex items-center justify-start gap-3">
                        <div className="w-[40px] flex items-center justify-center">
                            <svg width={20} height={20} stroke="currentColor" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.4681 1.0061L1.48511 10.4731L10.3209 11.7353M25.4681 1.0061L22.3124 19.94L10.3209 11.7353M25.4681 1.0061L10.3209 11.7353M10.3209 11.7353V18.6778L14.4218 14.5412" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="font-bold">contact with me</p>
                    </div>
                </Button>
            </div>
        </div>
    );
}

export default SideMenu;