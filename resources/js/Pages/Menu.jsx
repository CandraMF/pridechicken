import TextInput from '@/Components/TextInput';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { Carousel } from 'flowbite-react';
import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { customBannerCarouselTheme, formatRupiah, listProduct } from '@/Utils/helper';

export default function Menu() {

    return (
        <MainLayout>
            <Head title="Menu" />

            <div className="min-h-screen max-w-6xl mx-auto px-6 lg:px-8 md:pt-0 pt-36">
                <div className="grid flex-row-reverse grid-flow-dense grid-cols-2 gap-5 min-h-screen">
                    <div className="col-span-2 lg:col-span-1 flex justify-center items-center lg:py-10">
                        <Carousel
                            theme={customBannerCarouselTheme}
                            slide
                            className='h-[350px] w-[350px] lg:h-[400px] lg:w-[400px] rounded-lg shadow-2xl'>
                            <img src="assets/images/banner/banner_5.png" />
                            <img src="assets/images/banner/banner_1.jpg" />
                            <img src="assets/images/banner/banner_2.jpg" />
                            <img src="assets/images/banner/banner_3.jpg" />
                            <img src="assets/images/banner/banner_4.jpg" />
                        </Carousel>
                    </div>
                    <div className="col-span-2 lg:col-span-1 lg:py-10 lg:px-10 flex items-center lg:items-start justify-start lg:justify-center flex-col pb-10">
                        <h2 className='text-4xl text-white font-extrabold text-center md:text-start'>Laper? Pride Chickenin Aja!</h2>
                        <div className="grid grid-cols-5">
                            <div className='col-span-5'>
                                <div className="grid grid-cols-3 gap-5 justify-center items-center">
                                    <img src="/assets/icons/gofood.svg" alt="" srcSet="" />
                                    <img src="/assets/icons/shopeefood.svg" alt="" srcSet="" />
                                    <img src="/assets/icons/grabfood.svg" alt="" srcSet="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-h-screen relative bg-[#FFFF00]">

                <img className='w-full bg-[#A00000]' src="assets/images/bg.png" alt="" />

                {listProduct.map((list, index) => {
                    return (
                        <div className='z-10 max-w-6xl mx-auto px-6 lg:px-8 mb-10'>
                            <p className='text-4xl text-start mb-5' style={{ fontFamily: 'gagalin' }}>{list.type}</p>
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
                                slidesPerView={4}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    400: {
                                        slidesPerView: 2,
                                    },
                                    639: {
                                        slidesPerView: 3,
                                    },
                                    865: {
                                        slidesPerView: 4
                                    },
                                    1000: {
                                        slidesPerView: 4
                                    },
                                }}
                            >

                                {list.list.map((product, index) => {
                                    return (
                                        <SwiperSlide>
                                            <div className='bg-white flex flex-col justify-center items-center rounded-lg h-72'>
                                                <img className='h-24' src={`assets/images/produk/${product.image}`} alt="" />
                                                <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>{product.name}</p>
                                                <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>{formatRupiah(product.price, 'Rp. ')}</p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>

                        </div>
                    )
                })}
                <img className='w-full' src="assets/images/bg-2.png" alt="" />
            </div>


        </MainLayout>
    );
}


