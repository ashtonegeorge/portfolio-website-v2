import Logo from "../content/logo";


const Header = () => {

    return(

        <div className="p-8 m-10 flex justify-around h-96">

                <div className="relative top-5">
                    <Logo />
                </div>

                <div className="h-auto w-auto p-4 bg-slate-300 rounded-3xl">
                    <p className="text-8xl text-gray-700 font-bold mb-5 pb-4">
                        Welcome!
                    </p>
                    <p className="text-gray-500 text-4xl">
                        I'm Ashton, college student <br />and web developer
                    </p>
                </div>

        </div>

    );

};

export default Header;