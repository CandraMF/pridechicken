
import MainNavbar from "@/Components/MainNavbar";

export default function Main({ children }) {




    return (
        <div className="bg-[#A00000]">

            <MainNavbar></MainNavbar>

            {children}

        </div>
    );
}
