import { Button, Card, Label, Radio, Textarea, FileInput } from 'flowbite-react';
import TextInput from './TextInput';
import { useState } from 'react';

export const RegisterFormMitra = () => {

    const CHARACTER_LIMIT = 100;

    const [values, setValues] = useState({
        full_name: "",
        email: "",
        whatsapp: "",
        birth_date: "",
        address: "",
        sex: "L",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value

        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        var url = `https://wa.me/62881081849988`;

        var message = 
`*Registrasi Kemitraan*

Nama \t\t: ${values.full_name}
Email \t\t: ${values.email}
WhatsApp \t: ${values.whatsapp}
Jenis Kelamin \t: ${values.sex == "L" ? "Laki-Laki" : "Perempuan"}
Tanggal Lahir \t: ${values.birth_date}
Alamat \t\t: ${values.address}`

        url += `?text=${encodeURI(message)}`;

        window.open(url);
    }


    return (
        <Card>
            <h5 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Form Registrasi Mitra
            </h5>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="nama" value="Nama Lengkap" />
                        </div>
                        <TextInput value={values.full_name} onChange={handleChange} className="w-full" id="full_name" type="text" placeholder="Isi dengan nama lengkap anda" required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Email" />
                        </div>
                        <TextInput value={values.email} onChange={handleChange} className="w-full" id="email" type="email" placeholder="contoh: abc@gmail.com" required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="whatsapp" value="Nomor Whatsapp" />
                        </div>
                        <TextInput value={values.whatsapp} onChange={handleChange} className="w-full" id="whatsapp" type="text" placeholder="contoh: 0821312387xx" required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="ttl" value="Tanggal Lahir" />
                        </div>
                        <TextInput value={values.birth_date} onChange={handleChange} className="w-full" id="birth_date" type="date" placeholder="" required />
                    </div>


                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="Alamat" />
                        </div>
                        <Textarea value={values.address} onChange={handleChange} id="address" placeholder="Isi Dengan Alamat Lengkap" required rows={4} />
                    </div>

                    <fieldset className="flex max-w-md flex-row gap-4">
                        <legend className="mb-4">Jenis Kelamin</legend>
                        <div className="flex items-center gap-2">
                            <Radio id="sex" name="sex" value="L" defaultChecked onClick={handleChange} />
                            <Label htmlFor="sex">Laki-Laki</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="sex" name="sex" value="P" onClick={handleChange} />
                            <Label htmlFor="sex">Perempuan</Label>
                        </div>
                    </fieldset>


                    <div className='md:col-span-2 flex justify-end'>
                        <Button type="submit" color='failure'>Kirim</Button>
                    </div>
                </div>
            </form>
        </Card>
    )
}
