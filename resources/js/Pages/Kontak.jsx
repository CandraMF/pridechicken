
import { RegisterFormMitra } from '@/Components/RegisterFormMitra';
import TextInput from '@/Components/TextInput';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { Button, Card, FileInput, Label, Radio, Textarea } from 'flowbite-react';
import { FaBowlRice, FaMedal, FaScaleBalanced, FaHandsHoldingCircle, FaPhone, FaEnvelope } from "react-icons/fa6";


const Kontak = () => {

    return (
        <MainLayout>
            <Head title="Kontak" />

            <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-36 pb-48">
                <div className="flex items-center text-center lg:items-center justify-center lg:justify-center flex-col ">
                    <h2 className='text-4xl text-white font-extrabold text-center md:text-start mb-5'>Hubungi Kami</h2>
                    <Button className='mt-5 flex justify-center items-center gap-3' color="failure" outline>
                        <FaPhone className='mr-2'></FaPhone>
                        <p>0881 - 0818 - 49988</p>
                    </Button>
                    <Button className='mt-3 flex justify-center items-center gap-3' color="failure" outline>
                        <FaEnvelope className='mr-2'></FaEnvelope>
                        <p>kemitraan@pridechicken.com</p>
                    </Button>
                </div>
            </div>

            <img className='w-full' src="assets/images/bg.png" alt="" />

            <div className="relative  bg-[#FFFF00]">
                <div className='max-w-6xl mx-auto px-6 lg:px-8 -translate-y-52 0 md:-translate-y-80'>
                    <RegisterFormMitra></RegisterFormMitra>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-10">
                        <iframe className='w-full h-60 md:h-96' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3706.9089616258057!2d107.59567650766179!3d-6.9538902457642084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTcnMTQuMyJTIDEwN8KwMzUnNTMuOCJF!5e0!3m2!1sid!2sid!4v1705085011158!5m2!1sid!2sid" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <iframe className='w-full h-60 md:h-96' src="https://www.google.com/maps/embed?pb=!4v1705240822890!6m8!1m7!1sZWTcwOmsvAhZmcZaODX2XQ!2m2!1d-6.953948461868891!2d107.5984332158795!3f283.4647928416624!4f3.2602269085428617!5f0.7820865974627469" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <img className='w-full bg-[#FFFF00]' src="assets/images/bg-2.png" alt="" />
        </MainLayout>
    );
}

export default Kontak;

