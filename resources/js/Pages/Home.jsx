import MainLayout from '@/Layouts/MainLayout';
import { comments, customBannerCarouselTheme, customProductCarouselTheme, faqs, formatRupiah, listProduct, steps } from '@/Utils/helper';
import { Head } from '@inertiajs/react';
import { Carousel, Button, Card, Avatar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import { RegisterFormMitra } from '@/Components/RegisterFormMitra';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {

    const [selectTab, setSelectTab] = useState(0)

    return (
        <MainLayout>
            <Head title="Home" />

            <div className="min-h-screen max-w-6xl mx-auto px-6 lg:px-8 md:pt-0 pt-36">
                <div className="grid flex-row-reverse grid-flow-dense grid-cols-2 gap-5 min-h-screen">
                    <div className="col-span-2 lg:col-span-1 flex justify-center items-center lg:py-10">
                        <Carousel theme={customBannerCarouselTheme} slide className='h-[350px] w-[350px] lg:h-[400px] lg:w-[400px] rounded-lg shadow-2xl'>
                            <img src="assets/images/banner/banner_1.jpg" />
                            <img src="assets/images/banner/banner_2.jpg" />
                            <img src="assets/images/banner/banner_3.jpg" />
                            <img src="assets/images/banner/banner_4.jpg" />
                        </Carousel>
                    </div>
                    <div className="col-span-2 lg:col-span-1 lg:py-10 lg:px-10 flex items-center lg:items-start justify-start lg:justify-center flex-col pb-10">
                        <img className='w-36' src="assets/images/logo.png" alt="" />
                        <p className='text-white text-center md:text-start mt-5'>Pride Chicken adalah usaha mikro kecil menengah dengan sistem kemitraan yang dibangun sejak tahun 2020, Kami membangun usaha ini dengan sistem kemitraan, Kami menghadirkan berbagai menu yang inovatif serta paket kemitraan yang ekonomis.</p>
                        <Link href='profil'>
                            <Button className='mt-5' color="failure" outline>
                                Lihat Lebih Lengkap
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="min-h-screen relative bg-[#FFFF00]">

                <img className='w-full bg-[#A00000]' src="assets/images/bg.png" alt="" />

                <div className='z-10 max-w-6xl mx-auto px-6 lg:px-8'>
                    <p className='mt-6 text-4xl text-center mb-12' style={{ fontFamily: 'gagalin' }}>Varian Menus</p>
                    <div className="grid flex-row-reverse grid-flow-dense lg:grid-cols-3 grid-cols-1 gap-5">
                        {
                            listProduct.map((list, index) => (
                                <div key={index} className=" flex flex-col items-center">
                                    <p className='text-3xl mb-4' style={{ fontFamily: 'gagalin', color: '#FF0000', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>{list.type}</p>
                                    <Carousel indicators={false} theme={customProductCarouselTheme} slide className='relative col-span-1 lg:col-span-1 h-80 rounded-lg shadow-2xl bg-white'>
                                        {
                                            list.list.map((product, index) => (
                                                <div className="flex flex-col justify-center items-center h-full relative pt-5">
                                                    <img className='h-28' src={`assets/images/produk/${product.image}`} alt="" />
                                                    <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>{product.name}</p>
                                                    <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>{formatRupiah(product.price, 'Rp. ')}</p>
                                                    <p className='absolute text-xl top-0 left-0 m-5' style={{ fontFamily: 'gagalin' }}>{index + 1}/{list.list.length}</p>
                                                </div>
                                            ))
                                        }
                                    </Carousel>
                                </div>
                            ))
                        }
                        {/* <div className="flex flex-col items-center">
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
                        </div> */}
                    </div>
                    <Link href="/menu">
                        <Button className='my-10 mx-auto' color="failure" >
                            Lihat Lebih Lengkap
                        </Button>
                    </Link>
                    <p className='text-center'>Temukan Kami Di</p>
                    <div className="grid grid-cols-5">
                        <div></div>
                        <div className='col-span-3'>
                            <div className="grid grid-cols-3 gap-5 justify-center items-center">
                                <img src="/assets/icons/gofood.svg" alt="" srcSet="" />
                                <img src="/assets/icons/shopeefood.svg" alt="" srcSet="" />
                                <img src="/assets/icons/grabfood.svg" alt="" srcSet="" />
                            </div>
                        </div>
                        <div></div>

                    </div>
                </div>
                <img className='w-full' src="assets/images/bg-3.png" alt="" />
            </div>
            <div className="min-h-screen max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 justify-center md:py-0 py-20 min-h-screen">
                    <div className="flex justify-center items-center h-full">
                        <img className='md:h-2/3' src="assets/images/booth/booth roda.png" alt="" />
                    </div>
                    <div className='flex justify-start items-center h-full text-white'>
                        <div className=''>
                            <h2 className='text-4xl font-extrabold'>Keuntungan Bermitra dengan Pride Chicken</h2>
                            <ul className="list-disc mt-5 pl-5">
                                <li>Free Royalti</li>
                                <li>Free Media Promosi</li>
                                <li>Free Konsultasi</li>
                                <li>100% Keuntungan Untuk Mitra</li>
                                <li>Tidak ada Bagi hasil</li>
                                <li>Disupport oleh management</li>
                                <li>Dibantu survey lokasi</li>
                                <li>Dibantu pelatihan sDM</li>
                            </ul>
                            <Link href='/kemitraan'>
                                <Button className='mt-5' color="failure" outline>
                                    Lihat Lebih Lengkap
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <div className="min-h-screen max-w-6xl mx-auto px-6 lg:px-8 pb-10" id='faq'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center min-h-screen">
                    <div className='flex justify-start items-center h-full text-white'>
                        <div>
                            <h2 className='text-4xl font-extrabold md:text-start text-center'># FAQ</h2>

                            <div className='flex flex-col gap-3 items-center md:items-start mt-10'>
                                {faqs.map((faq, index) => {
                                    return (

                                        <button onClick={() => setSelectTab(index)} className={selectTab == index && `px-4 py-3 text-black bg-[#FFFF00]`} key={index}>{faq.question}</button>

                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center" id='jawab'>
                        <div className="bg-white w-full min-h-80 p-8 rounded-xl">
                            <h2 className='text-2xl font-semibold text-[#FAA41A]'>Jawab</h2>
                            <p className='my-3'>{faqs[selectTab].answer}</p>
                            {faqs[selectTab].action && <a href={faqs[selectTab].action}><Button className='mt-5' color="failure" outline>
                                {faqs[selectTab].actionTitle}
                            </Button></a>}
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className=" max-w-6xl mx-auto px-6 lg:px-8 pb-10">


                <h2 className='text-4xl font-extrabold md:text-center text-center mb-10 text-white'>Kata Mitra Pride Chicken</h2>
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={true}
                        pagination={true}
                        grabCursor={true}
                        spaceBetween={10}
                        className="mySwiper"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        slidesPerView={3}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            400: {
                                slidesPerView: 1,
                            },
                            639: {
                                slidesPerView: 3,
                            },
                            865: {
                                slidesPerView: 3
                            },
                            1000: {
                                slidesPerView: 3
                            },
                        }}
                    >

                        {comments.map((value, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div>
                                        <Card>
                                            <Avatar img={value.photo} rounded size="xl"></Avatar>
                                            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                                                {value.name}
                                            </h5>
                                            <p className="font-normal text-center text-gray-700 dark:text-gray-400">
                                                Pemilik Outlet {value.address}
                                            </p>
                                            <p className="font-normal text-center text-gray-700 dark:text-gray-400">
                                                "{value.comment}"
                                            </p>
                                        </Card>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div> */}

            <div className="min-h-screen max-w-6xl mx-auto px-6 lg:px-8 pb-10" id='langkah'>

                <div className='flex flex-col justify-center items-center h-full text-white min-h-screen'>
                    <h2 className='text-4xl font-extrabold md:text-start text-center mb-10'># {steps.length} Langkah Gabung Menjadi Mitra</h2>
                    <div className="grid w-full grid-rows-1 md:grid-rows-4 md:grid-flow-col grid-flow-row gap-x-10 gap-y-5">

                        {steps.map((value, index) => {
                            return (
                                <div className="flex justify-start items gap-8">
                                    <div className="h-16 min-w-16 flex justify-center items-center text-black font-extrabold rounded-full bg-[#FFFF00]">{index + 1}</div>
                                    <div className="flex flex-col gap-1">
                                        <p className='font-extrabold'>{value.title}</p>
                                        <p >{value.desc}</p>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="min-h-screen max-w-6xl mx-auto px-6 lg:px-8 pb-10" id='form'>
                <RegisterFormMitra></RegisterFormMitra>
            </div>

            <img className='w-full' src="assets/images/bg-2.png" alt="" />

        </MainLayout>
    );
}

export default Home;

