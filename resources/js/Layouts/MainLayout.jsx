
import MainFooter from "@/Components/MainFooter";
import MainNavbar from "@/Components/MainNavbar";

export default function Main({ children }) {




    return (
        <div className="bg-[#A00000]">

            <MainNavbar></MainNavbar>

            {children}

            <MainFooter></MainFooter>

            <div className="">
                <div className="flex flex-col fixed right-0 top-0 bottom-0 z-20  gap-4 items-center justify-center ">
                    <div className="flex flex-col gap-4 items-center bg-gray-950/35 p-5 rounded-tl-3xl rounded-bl-3xl">

                        <img src="assets/icons/ig.png" alt="" />
                        <img src="assets/icons/wa.png" alt="" />
                        <img src="assets/icons/yt.png" alt="" />
                        <img src="assets/icons/tk.png" alt="" />
                    </div>
                </div>
            </div>



        </div>
    );
}
