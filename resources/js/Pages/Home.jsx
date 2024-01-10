import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { Carousel, Button } from 'flowbite-react';
import { useState } from 'react';

const Home = () => {

    const faqs = [
        {
            question: "Bagaimana Sistem Kemitraan Pride Chicken?",
            answer: "Kemitraan pride chicken adalah sistem kemitraan jual beli putus dimana semua keuntungan untuk mitra pride chicken tanpa bagi hasil dan biaya royalti.",
            action: false,
            actionTitle: "",
        },
        {
            question: "Bagaimana Cara Bergabungnya?",
            answer: "Menghubungi sales pride chicken, melengkapi data diri dan rencana lokasi usaha, membayar biaya registrasi (mengurangi biaya paket kemitraan yang dipilih), share titik lokasi yang ingin diajukan, kirim beserta dokumentasifoto dan video sekitar lokasi yang diajukan, proses cek dan survey, menunggu hasil survey kemudian jika disetujui masuk ke tahap berikutnya. (disarankan tidak membayarkan sewa atau dp kios sebelum lokasi yang diajukan di setujui oleh pihak pride chicken).",
            action: "langkah",
            actionTitle: "Lihat 7 Langkah Gabung Menjadi Mitra",
        },
        {
            question: "Bahan Bakunya Apakah Disediakan?",
            answer: "Untuk bahan baku wajib, mitra wajib membeli distokis pride chicken terdekat di masingmasing wilayah, namun jika belum ada, anda dapat melakukan pemesanan ke stokis pride chicken pusat, mulai dari ayam, tepung, saus pilihan, packaging dan lain-lain.",
            action: false,
            actionTitle: "",
        },
        {
            question: "Boleh Membeli Bahan Baku dari Luar?",
            answer: "Mitra tidak diperbolehkan membeli bahan baku dari luar stokis pride chicken. terkecuali bahan baku tidak wajib. hal ini bertujuan agar produk pride chicken yang dijual sesuai dengan sop manajemen pride chicken.",
            action: false,
            actionTitle: "",
        },
        {
            question: "Apakah Ada Pelatihan Masaknya?",
            answer: "Ada 2 tempat pelatihan, pelatihan pertama bisa di training center kami secara gratis. dan pelatihan kedua, trainer kami ke lokasi outlet mitra, untuk pelatihan gratis dilakukan selama 4 hari, diatas itu ada biaya untuk trainer yang datang ke lokasi outlet mitra.",
            action: false,
            actionTitle: "",
        },
        {
            question: "Untuk Harga Jual Bagaimana?",
            answer: "Untuk harga jual mitra wajib mengikut kebijakan dari manajemen pride chicken.",
            action: false,
            actionTitle: "",
        },
        {
            question: "Jika Belum ada Lokasi Apakah Dibantu Carikan Lokasinya?",
            answer: "Untuk saat ini kami memiliki banyak stok tempat, selain itu juga kami bisa bantu arahkan cara mencari tempat yang baik dan benar sesuai kriteria. tetapi kami tidak dapat menjamin 100% untuk pangsa pasar, tingkat kepadatan penduduk dan daya beli nasyarakat nya, karena harus ada analisa lebih lanjut.",
            action: false,
            actionTitle: "",
        },
        {
            question: "Apa Saja Bahan Baku Yang Wajib Dibeli?",
            answer: "Bahan baku wajib tersebut adalah ayam, tepung, kemasan branding, dan saus pilihan.",
            action: false,
            actionTitle: "",
        },
    ]

    const [selectTab, setSelectTab] = useState(0)

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
                                <img src="/assets/icons/gofood.svg" alt="" srcSet="" />
                                <img src="/assets/icons/shopeefood.svg" alt="" srcSet="" />
                                <img src="/assets/icons/grabfood.svg" alt="" srcSet="" />
                            </div>
                        </div>
                        <div></div>

                    </div>
                </div>
            </div>

            <div className="min-h-screen max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-10 justify-center h-screen">
                    <div className="flex justify-center items-center h-full">
                        <img className='h-2/3' src="assets/images/booth/booth roda.png" alt="" />
                    </div>
                    <div className='flex justify-start items-center h-full text-white'>
                        <div>
                            <h2 className='text-4xl font-semibold'>Keuntungan Bermitra dengan Pride Chicken</h2>
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
                            <Button className='mt-5' color="failure" outline>
                                Lihat Lebih Lengkap
                            </Button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="min-h-screen max-w-6xl mx-auto px-6 lg:px-8 pb-10">
                <div className="grid grid-cols-2 gap-10 justify-center h-screen">
                    <div className='flex justify-start items-center h-full text-white'>
                        <div>
                            <h2 className='text-4xl font-semibold'># FAQ</h2>

                            <div className='flex flex-col gap-3 items-start mt-10'>
                                {faqs.map((faq, index) => {
                                    console.log(faq.question)
                                    return (
                                        <button onClick={() => setSelectTab(index)} className={selectTab == index && `px-4 py-3 text-black bg-[#FFFF00]`} key={index}>{faq.question}</button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="bg-white w-full min-h-80 p-8 rounded-xl">
                            <h2 className='text-2xl font-semibold text-[#FAA41A]'>Jawab</h2>
                            <p className='my-3'>{faqs[selectTab].answer}</p>
                            
                            {faqs[selectTab].action && <Button className='mt-5' color="failure" outline>
                                {faqs[selectTab].actionTitle}
                            </Button>}

                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}

export default Home;

