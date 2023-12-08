
import Logo from "./components/logo";
import Photome from "./components/photome";

const Header = () => {
    return (
        <div className="w-[100%] h-[calc(100vh_-_60px)] select-none flex justify-center items-center dark:text-white flex-col md:flex-row" id="home">
            <div className="logo w-[50%] h-[100%] flex justify-center items-center">
                <Logo>
                    Aidin <br /> Rezaei
                </Logo>
            </div>
            <div className="logo w-[50%] h-[100%] flex justify-center items-center">
                <Photome>
                    <img className="rounded-2xl shadow-2xl"
                        src="/aidin.jpg"
                        width={350}
                        height={0}
                        alt="Aidin Rezaei" />
                </Photome>
            </div>
        </div>
    );
}

export default Header;