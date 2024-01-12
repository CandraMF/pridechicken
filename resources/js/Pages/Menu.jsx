import TextInput from '@/Components/TextInput';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { Carousel, Button, Card, Avatar, Label, Radio, Textarea, FileInput } from 'flowbite-react';
import { useEffect, useState } from 'react';


export default function Menu() {
    return (
        <MainLayout>
            <Head title="Menu" />

            <div className="min-h-screen max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid flex-row-reverse grid-flow-dense grid-cols-2 gap-5 min-h-screen">
                    <div className="col-span-2 lg:col-span-1 flex justify-center items-center lg:py-10">
                        <Carousel slide className='h-[250px] w-[250px] lg:h-[400px] lg:w-[400px] rounded-lg shadow-2xl'>
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

                <div className='z-10 max-w-6xl mx-auto px-6 lg:px-8'>
                    <div className="flex flex-col gap-10 w-full">
                        <div className='flex gap-5 flex-col w-full'>
                            <p className='text-4xl text-start' style={{ fontFamily: 'gagalin' }}>CRISPY CHICKEN</p>
                            <div className="grid flex-row-reverse grid-flow-dense lg:grid-cols-3 grid-cols-1 gap-5">
                                <div className="flex flex-col items-center">
                                    <div className='col-span-1 lg:col-span-1 h-80 w-full rounded-lg shadow-2xl bg-white '>
                                        <div className="flex flex-col justify-center items-center h-full relative">
                                            <img className='h-32' src="assets/images/produk/dada.png" alt="" />
                                            <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                            <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className='col-span-1 lg:col-span-1 h-80 w-full rounded-lg shadow-2xl bg-white'>
                                        <div className="flex flex-col justify-center items-center h-full relative">
                                            <img className='h-32' src="assets/images/produk/drum.png" alt="" />
                                            <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Drum</p>
                                            <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className='col-span-1 lg:col-span-1 h-80 w-full rounded-lg shadow-2xl bg-white'>
                                        <div className="flex flex-col justify-center items-center h-full relative">
                                            <img className='h-32' src="assets/images/produk/wing.png" alt="" />
                                            <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Sayap</p>
                                            <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-5 flex-col w-full'>
                            <p className='text-4xl text-start' style={{ fontFamily: 'gagalin' }}>+ Saus pilihan</p>
                            <div className="grid flex-row-reverse grid-flow-dense lg:grid-cols-3 grid-cols-1 gap-5">
                                <div className="flex flex-col items-center">
                                    <div className='col-span-1 lg:col-span-1 h-80 w-full rounded-lg shadow-2xl bg-white '>
                                        <div className="flex flex-col justify-center items-center h-full relative">
                                            <img className='h-32' src="assets/images/produk/dada.png" alt="" />
                                            <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Dada</p>
                                            <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className='col-span-1 lg:col-span-1 h-80 w-full rounded-lg shadow-2xl bg-white'>
                                        <div className="flex flex-col justify-center items-center h-full relative">
                                            <img className='h-32' src="assets/images/produk/drum.png" alt="" />
                                            <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Drum</p>
                                            <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className='col-span-1 lg:col-span-1 h-80 w-full rounded-lg shadow-2xl bg-white'>
                                        <div className="flex flex-col justify-center items-center h-full relative">
                                            <img className='h-32' src="assets/images/produk/wing.png" alt="" />
                                            <p className='mt-6 text-xl' style={{ fontFamily: 'gagalin' }}>Sayap</p>
                                            <p className='text-3xl' style={{ fontFamily: 'gagalin', color: '#FAA41A', textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Rp 11.000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>

                <img className='w-full' src="assets/images/bg-2.png" alt="" />
            </div>


        </MainLayout>
    );
}


