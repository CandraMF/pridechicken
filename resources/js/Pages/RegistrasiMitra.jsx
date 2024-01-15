
import { RegisterFormMitra } from '@/Components/RegisterFormMitra';
import TextInput from '@/Components/TextInput';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { Button, Card, FileInput, Label, Radio, Textarea } from 'flowbite-react';
import { FaBowlRice, FaMedal, FaScaleBalanced, FaHandsHoldingCircle, FaPhone, FaEnvelope } from "react-icons/fa6";


const Registrasi = () => {

    return (
        <MainLayout>
            <Head title="Registrasi" />

            <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-36 pb-48">
                <RegisterFormMitra></RegisterFormMitra>
            </div>

            <img className='w-full' src="assets/images/bg-2.png" alt="" />
        </MainLayout>
    );
}

export default Registrasi;

