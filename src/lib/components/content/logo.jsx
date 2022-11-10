import { motion } from "framer-motion";

const Logo = () => {

    // return(
    //     <div className="w-auto h-auto p-8 relative scale-200">
    //         <div className="-translate-x-16 -translate-y-16">
    //             <div className="translate-x-12 translate-y-28">
    //                 <div className="logo-item-3 relative bg-white -rotate-60 translate-y-t rounded-3xl transform h-7 w-48"></div>
    //                 <div className="logo-item-3 relative bg-white translate-x-j rounded-3xl rotate-60 transform h-7 w-48"></div>
    //             </div>
    //             <div className="translate-x-6 translate-y-14">
    //                 <div className="logo-item-2 relative bg-white -rotate-60 translate-y-t rounded-3xl transform h-7 w-48"></div>
    //                 <div className="logo-item-2 relative bg-white translate-x-j rounded-3xl rotate-60 transform h-7 w-48"></div>
    //             </div>
    //             <div className="">
    //                 <div className="logo-item-1 relative bg-white -rotate-60 translate-y-t rounded-3xl transform h-7 w-48"></div>
    //                 <div className="logo-item-1 relative bg-white translate-x-j rounded-3xl rotate-60 transform h-7 w-48"></div>
    //             </div>
    //         </div>
            
    //     </div>

    // );

    return(

        <div className="w-auto h-auto p-8 relative scale-200">
            <div className="-translate-x-16 -translate-y-14">
                <div className="translate-x-14 translate-y-28">
                    <motion.div
                        className="relative bg-white -rotate-60 translate-y-t rounded-3xl transform h-7 w-48 border-2 border-black"
                        initial={{ backgroundColor: "rgb(51, 65, 85" }}
                        animate={{ backgroundColor: "rgb(255, 255, 255" }}
                        transition={{ repeat: Infinity, repeatType: "mirror", duration: 6 }}
                    />
                    <motion.div
                        className="relative bg-white translate-x-j rounded-3xl rotate-60 transform h-7 w-48 border-2 border-black"
                        initial={{ backgroundColor: "rgb(51, 65, 85" }}
                        animate={{ backgroundColor: "rgb(255, 255, 255" }}
                        transition={{ repeat: Infinity, repeatType: "mirror", duration: 6 }}
                    />
                </div>
                <div className="translate-x-7 translate-y-14">
                    <motion.div
                        className="relative bg-white -rotate-60 translate-y-t rounded-3xl transform h-7 w-48 border-2 border-black"
                        initial={{ backgroundColor: "rgb(30, 41, 59" }}
                        animate={{ backgroundColor: "rgb(255, 255, 255" }}
                        transition={{ repeat: Infinity, repeatType: "mirror", duration: 6 }}
                    />
                    <motion.div
                        className="relative bg-white translate-x-j rounded-3xl rotate-60 transform h-7 w-48 border-2 border-black"
                        initial={{ backgroundColor: "rgb(30, 41, 59" }}
                        animate={{ backgroundColor: "rgb(255, 255, 255" }}
                        transition={{ repeat: Infinity, repeatType: "mirror", duration: 6 }}
                    />
                </div>
                <div className="-translate-x-17">
                    <motion.div
                        className="relative bg-white -rotate-60 translate-y-t rounded-3xl transform h-7 w-48 border-2 border-black"
                        initial={{ backgroundColor: "rgb(15, 23, 42" }}
                        animate={{ backgroundColor: "rgb(255, 255, 255" }}
                        transition={{ repeat: Infinity, repeatType: "mirror", duration: 6 }}
                    />
                    <motion.div
                        className="relative bg-white translate-x-j rounded-3xl rotate-60 transform h-7 w-48 border-2 border-black"
                        initial={{ backgroundColor: "rgb(15, 23, 42" }}
                        animate={{ backgroundColor: "rgb(255, 255, 255" }}
                        transition={{ repeat: Infinity, repeatType: "mirror", duration: 6 }}
                    />
                </div>
            </div>

        </div>
        
        

    );

};

export default Logo;