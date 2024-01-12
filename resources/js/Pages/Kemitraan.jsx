import TextInput from '@/Components/TextInput';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { Carousel, Button, Card, Avatar, Label, Radio, Textarea, FileInput } from 'flowbite-react';
import { useEffect, useState } from 'react';


export default function Menu() {

    const steps = [
        {
            title: "Hubungi Pride Chicken",
            desc: "Mitra menghubungi pride chicken di 0881 - 0818 - 49988",
        },
        {
            title: "Pilih Paket Kemitraan Dan Isi Formulir",
            desc: "Pilih paket kemitraan",
        },
        {
            title: "Shareloc & Foto Lokasi",
            desc: "Mitra wajib melampirkan shareloc dan foto via wa",
        },
        {
            title: "Survey",
            desc: "Tim manajemen mendatangi lokasi dan survey",
        },
        {
            title: "Training & Test",
            desc: "Mitra wajib mengikuti training operasional sambil menunggu booth dikirim ke lokasi berjualan",
        },
        {
            title: "Kirim Booth",
            desc: "Pride Chicken akan mengirimkan booth ke lokasi mitra",
        },
        {
            title: "Siap Berjualan",
            desc: "Mitra Siap Berjualan",
        },
    ]

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
                        <h2 className='text-4xl text-white font-extrabold text-center md:text-start'>Paket Kemitraan</h2>
                        <p className='text-white mt-5'>Kami membuka peluang kerjasama kemitraan. Apa aja sih yang didapat jika menjadi mitra pride chicken? yuk pelajari proposal kami!</p>
                        <Button className='mt-5' color="failure" outline>
                            Download Proposal Kemitraan
                        </Button>
                    </div>
                </div>
            </div>

            <div className="min-h-screen max-w-6xl mx-auto px-6 lg:px-8 pb-10">

                <div className='flex flex-col justify-center items-center h-full text-white min-h-screen'>
                    <h2 className='text-4xl font-extrabold md:text-start text-center mb-10'>Pilihan Booth</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 justify-center">
                        <div className="">
                            <img src="assets/images/booth/booth.png" alt="" />
                        </div>
                        <div className="flex flex-col gap-8 justify-center">
                            <p className='bg-[#FFFF00] w-fit text-black font-extrabold  px-6 py-5 '>Booth Roda Kecil</p>
                            <p>Cocok untuk penempatan tempat yang tidak berpindah-pindah seperti berjualan di lapak, atau tempat yang bisa dipakai berjualan sekaligus menyimpan roda</p>
                            <p>Dimensi : 150x70x230 <br />Bahan : Alumunium</p>
                            <Button className='mt-5 w-fit' color="failure" outline>
                                Daftar Sekarang
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 justify-center">
                        <div className="flex flex-col gap-8 justify-center items-end text-end   ">
                            <p className='bg-[#FFFF00] w-fit text-black font-extrabold  px-6 py-5 '>Booth Roda Motor</p>
                            <p>Cocok untuk penempatan tempat yang berpindah-pindah Seperti Berjualan di pinggir jalan, atau tempat yang tidak bisa menetap</p>
                            <p>Dimensi : 150x70x230 <br />Bahan : Alumunium</p>
                            <Button className='mt-5 w-fit' color="failure" outline>
                                Daftar Sekarang
                            </Button>
                        </div>
                        <div className="">
                            <img className='h-min' src="assets/images/booth/booth.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-h-screen max-w-6xl mx-auto px-6 lg:px-8 pb-10">

                <div className='flex flex-col justify-center items-center h-full text-white min-h-screen'>
                    <h2 className='text-4xl font-extrabold md:text-start text-center mb-10'># {steps.length} Langkah Gabung Menjadi Mitra</h2>
                    <div className="grid w-full grid-rows-1 md:grid-rows-4 md:grid-flow-col grid-flow-row gap-x-10 gap-y-5">

                        {steps.map((value, index) => {
                            return (
                                <div className="flex justify-start items-start gap-8">
                                    <Avatar placeholderInitials={index + 1} rounded></Avatar>
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
            <img className='w-full bg-[#A00000]' src="assets/images/bg-2.png" alt="" />
        </MainLayout>
    );
}


