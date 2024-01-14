
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { Button, Card } from 'flowbite-react';
import { FaBowlRice, FaMedal, FaScaleBalanced, FaHandsHoldingCircle } from "react-icons/fa6";


const Home = () => {

    return (
        <MainLayout>
            <Head title="Home" />

            <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-36 pb-48">
                <div className="flex items-center text-center lg:items-center justify-center lg:justify-center flex-col ">
                    <img className='w-36' src="assets/images/logo.png" alt="" />
                    <p className='text-white mt-5'>Pride Chicken adalah usaha mikro kecil menengah dengan sistem kemitraan yang dibangun sejak tahun 2020, Kami membangun usaha ini dengan sistem kemitraan, Kami menghadirkan berbagai menu yang inovatif serta paket kemitraan yang ekonomis.</p>
                </div>
            </div>

            <img className='w-full' src="assets/images/bg.png" alt="" />

            <div className="relative  bg-[#FFFF00]">
                <div className='max-w-6xl mx-auto px-6 lg:px-8 -translate-y-52 0 md:-translate-y-80'>
                    <div className="grid md:grid-cols-3 gap-10">
                        <Card className='shadow-2xl text-center rounded-xl border-none'>
                            <div className="flex flex-col">
                                <img className='h-18 w-min' src="/assets/icons/booth.png" alt="" />
                                <p className='font-extrabold mb-8 mt-5 text-5xl'>120</p>
                                <p className='font-bold italic'>Booth</p>
                            </div>
                        </Card>
                        <Card className='shadow-2xl text-center'>
                            <div className="flex flex-col">
                                <img className='h-18 w-min' src="/assets/icons/ig.png" alt="" />
                                <p className='font-extrabold mb-8 mt-5 text-5xl'>4,171 K</p>
                                <p className='font-bold italic'>Followers Instagram</p>
                            </div>
                        </Card>
                        <Card className='shadow-2xl text-center'>
                            <div className="flex flex-col">
                                <img className='h-18 w-min' src="/assets/icons/tk.png" alt="" />
                                <p className='font-extrabold mb-8 mt-5 text-5xl'>135,5 K</p>
                                <p className='font-bold italic'>Followers Tiktok</p>
                            </div>
                        </Card>

                    </div>

                    <div className="text-center pt-24">
                        <h2 className='text-2xl font-extrabold'>Visi</h2>
                        <p className='mt-8'>Menjadi market leader di kategori ayam crispy lokal Indonesia, yang mempunyai hubungan kewirausahaan yang erat dengan konsumen serta mitra usahanya, dan mampu memberikan rasa aman dan nyaman bagi karyawan dalam bekerja. Dan juga berpartisipasi dalam memperkuat ekonomi bangsa.</p>
                    </div>
                    <div className="text-center pt-16">
                        <h2 className='text-2xl font-extrabold'>Misi</h2>
                        <div className="grid md:grid-cols-2 gap-10 mt-8">
                            <div className="flex gap-10">
                                <div className='w-50 flex justify-center items-center'>
                                    <FaBowlRice size={50} color='#A00000'/>
                                </div>
                                <p className='text-start'>Membuat produk makanan yang berkualitas, dan berstandar baik.</p>
                            </div>
                            <div className="flex gap-10">
                                <div className='w-50 flex justify-center items-center'>
                                    <FaScaleBalanced size={50} color='#A00000'/>
                                </div>
                                <p className='text-start'>Menyeimbangkan dengan fokus pada pemanfaatan profit, kemanusiaan, dan lingkungan.</p>
                            </div>
                            <div className="flex gap-10">
                                <div className='w-50 flex justify-center items-center'>
                                    <FaMedal size={50} color='#A00000'/>
                                </div>
                                <p className='text-start'>Menciptakan dan mengembangkan usaha menjadi terdepan dalam produk makanan.</p>
                            </div>
                            <div className="flex gap-10">
                                <div className='w-50 flex justify-center items-center'>
                                    <FaHandsHoldingCircle size={50} color='#A00000'/>
                                </div>
                                <p className='text-start'>Membuat produk makanan yang mempunyai inovasi baru dan disukai oleh masyarangan menengah hingga kebawah.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className='w-full bg-[#FFFF00]' src="assets/images/bg-2.png" alt="" />
        </MainLayout>
    );
}

export default Home;

