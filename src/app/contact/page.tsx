"use client";
import React, {useState} from 'react'
type FormData ={
    name:string;
    email:string;
    messege:string;
}
const ContactPage = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        messege: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // <-- Penting! Mencegah halaman refresh saat form
        console.log('Data yang akan dikirim:', formData);
        alert(`Halo ${formData.name}, pesan Anda akan kami proses!`);
        setFormData({
            name: '',
            email: '',
            messege: ''
        })
        }
        return (
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center">
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 w-full max-w-lg">
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                        Hubungi saya
                    </h1>
                    {/*form*/}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium
      text-gray-700 dark:text-gray-300 mb-1">
                                Nama
                            </label>
                            <input
                                type="text"
                                id={"name"}
                                name={"name"}
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md
      shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
      dark:border-gray-600 dark:text-white"/>
                        </div>
                        <div>
                            <label htmlFor={"email"} className={"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"}>
                                Email
                            </label>
                            <input type="email"
                                   id={"email"}
                                   name={"email"}
                                   value={formData.email}
                                   onChange={handleChange}
                                   className={"w-full px-4 py-2 border border-gray-300 rounded-md  shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:border-gray-600 dark:text-white"}
                                   placeholder="you@example.com"/>
                        </div>
                        <>
                            <label htmlFor={"messege"} className={"block text-sm font-medium  text-gray-700 dark:text-gray-300 mb-1 "}>
                                Pesan
                            </label>
                            <textarea name="messege" value={formData.messege} onChange={handleChange} className={"w-full px-4 py-2 border border-gray-300 rounded-md\n" +
                                "      shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700\n" +
                                "      dark:border-gray-600 dark:text-white"} rows={4} id="messege"  placeholder={"  Tulis pesan Anda di sini...."}>

                        </textarea>
                        </>
                        <>
                            <button type="submit" className={"w-full bg-blue-600 text-white font-bold py-3 px-4  rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2    focus:ring-blue-500 transition-colors"}>
                                Kirim pesan
                            </button>
                        </>
                    </form>


                </div>
            </div>
        )

}
export default ContactPage
