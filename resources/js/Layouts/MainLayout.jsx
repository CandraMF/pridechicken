
import MainFooter from "@/Components/MainFooter";
import MainNavbar from "@/Components/MainNavbar";

export default function Main({ children }) {




    return (
        <div className="bg-[#A00000]">

            <MainNavbar></MainNavbar>

            {children}

            <MainFooter></MainFooter>


            <div className="hidden md:flex flex-col fixed right-0 top-0 bottom-0 z-20  gap-4 items-center justify-center ">
                <div className="flex flex-col gap-4 items-center bg-gray-950/35 p-5 rounded-tl-3xl rounded-bl-3xl">
                    <a href="https://www.instagram.com/pridechicken_id/">
                        <img className="w-8" src="assets/icons/ig.png" alt="" />
                    </a>
                    <a href="https://wa.me/62881081849988">
                        <img className="w-8" src="assets/icons/wa.png" alt="" />
                    </a>
                    <a href="https://www.tiktok.com/@pridechicken.id">
                        <img className="w-8" src="assets/icons/tk.png" alt="" />
                    </a>
                    <a href="https://www.youtube.com/results?search_query=pride+chicken">
                        <img className="w-8" src="assets/icons/yt.png" alt="" />
                    </a>
                </div>
            </div>




        </div>
    );
}
