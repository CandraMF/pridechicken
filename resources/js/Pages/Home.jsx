import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { Carousel, Button } from 'flowbite-react';

export default function Home() {
    return (
        <MainLayout>
            <Head title="Home" />

            <div className="min-h-screen max-w-6xl mx-auto px-6 lg:px-8 pt-28">
                <div className="grid flex-row-reverse grid-flow-dense grid-cols-2 gap-5">
                    <div className="col-span-2 lg:col-span-1 flex justify-center items-center lg:py-10">
                        <Carousel slide className='h-[250px] w-[250px] lg:h-[400px] lg:w-[400px] rounded-lg shadow-2xl'>
                            <img src="assets/images/banner/banner_1.jpg" />
                            <img src="assets/images/banner/banner_2.jpg" />
                            <img src="assets/images/banner/banner_3.jpg" />
                            <img src="assets/images/banner/banner_4.jpg" />
                        </Carousel>
                    </div>
                    <div className="col-span-2 lg:col-span-1 lg:py-10 lg:px-10 flex items-center lg:items-start justify-center lg:justify-start flex-col pb-10">
                        <img className='w-36' src="assets/images/logo.png" alt="" />
                        <p className='text-white mt-5'>Pride Chicken adalah usaha mikro kecil menengah dengan sistem kemitraan yang dibangun sejak tahun 2020, Kami membangun usaha ini dengan sistem kemitraan, Kami menghadirkan berbagai menu yang inovatif serta paket kemitraan yang ekonomis.</p>
                        <Button className='mt-5' color="failure" outline>
                            Lihat Lebih Lengkap
                        </Button>
                    </div>
                </div>
            </div>

            <div className="min-h-screen relative" style={{ backgroundImage: "url(/assets/images/bg.png)", backgroundSize: 'cover' }}>
                <div className='z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-44 pb-44'>
                    <p className='mt-6 text-4xl text-center mb-12' style={{ fontFamily: 'gagalin' }}>Varian Menu</p>
                    <div className="grid flex-row-reverse grid-flow-dense lg:grid-cols-3 grid-cols-1 gap-5">
                        <div className="flex flex-col items-center">
                            <p className='text-3xl mb-4' style={{ fontFamily: 'gagalin', color: '#FF0000', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Crispy Chicken</p>
                            <Carousel slide className='col-span-1 lg:col-span-1 h-80 rounded-lg shadow-2xl bg-white'>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/dada.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/drum.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Drum</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/wing.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Sayap</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                            </Carousel>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className='text-3xl mb-4' style={{ fontFamily: 'gagalin', color: '#FF0000', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>SAUS PILIHAN</p>
                            <Carousel slide className='col-span-1 lg:col-span-1 h-80 rounded-lg shadow-2xl bg-white'>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/ayam bbq.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/ayam chilli oil.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/ayam keju.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/ayam sambal.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/ayam spicy bbq.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/ayam volcano.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/bbq sayap.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/chili oil sayap.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/pk chili oil.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/pk sambal geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/sedang volcano.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/volcano sayap.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                            </Carousel>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className='text-3xl mb-4' style={{ fontFamily: 'gagalin', color: '#FF0000', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>GEPREK</p>
                            <Carousel slide className='col-span-1 lg:col-span-1 h-80 rounded-lg shadow-2xl bg-white'>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/chilli oil geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/keju geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/pk sambal geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/sambal geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/spicy bbq geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/volcano geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                            </Carousel>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className='text-3xl mb-4' style={{ fontFamily: 'gagalin', color: '#FF0000', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>GEPREK</p>
                            <Carousel slide className='col-span-1 lg:col-span-1 h-80 rounded-lg shadow-2xl bg-white'>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/chilli oil geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/keju geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/pk sambal geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/sambal geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/spicy bbq geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/volcano geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                            </Carousel>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className='text-3xl mb-4' style={{ fontFamily: 'gagalin', color: '#FF0000', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>GEPREK</p>
                            <Carousel slide className='col-span-1 lg:col-span-1 h-80 rounded-lg shadow-2xl bg-white'>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/chilli oil geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/keju geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/pk sambal geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/sambal geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/spicy bbq geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                                <div className="flex flex-col justify-center items-center h-full relative">
                                    <img className='h-32' src="assets/images/produk/volcano geprek.png" alt="" />
                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <Button className='my-10 mx-auto' color="failure" >
                        Lihat Lebih Lengkap
                    </Button>
                    <p className='text-center'>Temukan Kami Di</p>
                    <div className="grid grid-cols-5">
                        <div></div>
                        <div className='col-span-3'>
                            <div className="grid grid-cols-3 gap-5 justify-center items-center">
                                <img src="/assets/icons/gofood.svg" alt="" srcset="" />
                                <img src="/assets/icons/shopeefood.svg" alt="" srcset="" />
                                <img src="/assets/icons/grabfood.svg" alt="" srcset="" />
                            </div>
                        </div>
                        <div></div>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
