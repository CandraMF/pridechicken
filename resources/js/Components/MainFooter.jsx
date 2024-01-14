import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function MainFooter() {
    return (
        <footer className="bg-[#2A0000] relative">
            <div className='z-10 max-w-6xl mx-auto px-6 lg:px-8 pb-20'>
                <div className="grid flex-row-reverse grid-flow-dense lg:grid-cols-3 grid-cols-1 gap-10">
                    <div className="flex flex-col gap-5">
                        <img className='w-36' src="assets/images/logo.png" alt="" />
                        <p className='text-white mt-5'>Pride Chicken adalah usaha mikro kecil menengah dengan sistem kemitraan yang dibangun sejak tahun 2020, Kami membangun usaha ini dengan sistem kemitraan, Kami menghadirkan berbagai menu yang inovatif serta paket kemitraan yang ekonomis.</p>
                        <div className="flex gap-4 items-center">
                            <a href="https://www.instagram.com/pridechicken_id/"><img src="assets/icons/ig.png" alt="" /></a>
                            <a href="https://wa.me/62881081849988"><img src="assets/icons/wa.png" alt="" /></a>
                            <a href="https://www.tiktok.com/@pridechicken.id"><img src="assets/icons/tk.png" alt="" /></a>
                            <a href="https://www.youtube.com/results?search_query=pride+chicken"><img src="assets/icons/yt.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className='font-bold text-xl text-white mt-5'>Hubungi Kami</p>
                        <div className="flex gap-3 items-center text-white">
                            <MdEmail fontSize={28} />
                            <p>kemitraan@pridechicken.com</p>
                        </div>
                        <div className="flex gap-3 items-center text-white">
                            <MdPhone fontSize={28} />
                            <p>0881 - 0818 - 49988</p>
                        </div>
                        <div className="flex gap-3 items-center text-white">
                            <MdLocationOn fontSize={28} />
                            <p>Jl. Candra Kirana no. 16, Mekarwangi, Cibaduyut</p>
                        </div>

                    </div>
                    <div className="flex flex-col gap-5 text-white">
                        <p className='font-bold text-xl text-white mt-5'>Info</p>
                        <p>Kontak</p>
                        <p>FAQ</p>
                        <p>Profil Pride Chicken</p>
                        <p>Download Proposal Kemitraan</p>
                        <p>Menu</p>
                    </div>
                </div>
            </div>
            <div className="py-8 bg-black text-white flex justify-center text-center">
                <p>Copyright © 2024 PT. CITRARASA UTAMA ABADI</p>
            </div>
        </footer>
    )
}