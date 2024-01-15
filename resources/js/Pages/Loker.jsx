import MainLayout from '@/Layouts/MainLayout';
import { customBannerCarouselTheme, jobs } from '@/Utils/helper';
import { Head } from '@inertiajs/react';
import { Carousel, Button, Avatar, Modal } from 'flowbite-react';
import { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { Link } from '@inertiajs/react';


export default function Loker() {

    const [openModal, setOpenModal] = useState(false);
    const [selectedJob, setSeletedJob] = useState(-1);

    return (
        <MainLayout>
            <Head title="Loker" />

            <div className="min-h-screen max-w-6xl mx-auto px-6 lg:px-8 md:pt-0 pt-36">
                <div className="grid flex-row-reverse grid-flow-dense grid-cols-2 gap-5 min-h-screen">
                    <div className="col-span-2 lg:col-span-1 flex justify-center items-center lg:py-10">
                        <Carousel theme={customBannerCarouselTheme} slide className='h-[350px] w-[350px] lg:h-[400px] lg:w-[400px] rounded-lg shadow-2xl'>
                            <img src="assets/images/banner/banner_5.png" />
                            <img src="assets/images/banner/banner_1.jpg" />
                            <img src="assets/images/banner/banner_2.jpg" />
                            <img src="assets/images/banner/banner_3.jpg" />
                            <img src="assets/images/banner/banner_4.jpg" />
                        </Carousel>
                    </div>
                    <div className="col-span-2 lg:col-span-1 lg:py-10 lg:px-10 flex items-center lg:items-start justify-start lg:justify-center flex-col pb-10">
                        <h2 className='text-4xl text-white font-extrabold text-center md:text-start'>Ayo Berkarir di Pride Chicken!</h2>
                        <p className='text-white mt-5 text-center md:text-start'>Kami membuka lowongan pekerjaan.</p>
                        <Link href="#lowongan">
                            <Button className='mt-5' color="failure" outline>
                                Lihat Lowongan
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className=" relative">
                <div className='z-10 max-w-6xl mx-auto px-6 lg:px-8 mb-10' id='lowongan'>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        {
                            jobs.map((job, index) => {
                                return (
                                    <div onClick={() => { setOpenModal(true); setSeletedJob(job) }} className="bg-black p-5 rounded-xl text-white shadow-xl flex flex-col justify-between min-h-48 cursor-pointer hover:ring-4 ring-white transition">
                                        <div className="flex items-center gap-2"><CiLocationOn /><h2 className='font-extralight'>{job.location}</h2></div>
                                        <h2 className='font-extrabold text-3xl hyphens-auto'>{job.title}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <img className='w-full bg-[#A00000]' src="assets/images/bg-2.png" alt="" />

            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Persyaratan</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            <ul className="list-disc ml-5">
                                {
                                    selectedJob != -1 && selectedJob.requirements.map((requirement, index) => (
                                        <li>{requirement}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Fasilitas :
                            <ul className="list-disc ml-5">
                                {
                                    selectedJob != -1 && selectedJob.facilities.map((facility, index) => (
                                        <li>{facility}</li>
                                    ))
                                }
                            </ul>
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex justify-end">
                        <Button color='failure' onClick={() => { setOpenModal(false); window.open('https://wa.me/62881081849988')}}>Lamar Pekerjaan</Button>
                        <Button color="gray" onClick={() => setOpenModal(false)}>
                            Batal
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </MainLayout>


    );
}


