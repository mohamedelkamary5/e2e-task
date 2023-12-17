"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';
const Page = ({ params }: any) => {
    const router = useRouter()

    const [userData, setUserData] = useState({
        name: '',
        username: '',
    })

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`).then((res: any) => {
            setUserData(res.data)
        })
    }, [])



    const handleChange = (e: any) => {
        setUserData({ ...userData, [e.target.id]: e.target.value })

    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        axios.put(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(res => {
            router.push('/');
        })
        

    }
    return (
        <div>
            <div className="w-full">
                <form onSubmit={handleSubmit} className="flex flex-wrap bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Name
                        </label>
                        <input onChange={handleChange} value={userData.name} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="name" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            User Name
                        </label>
                        <input onChange={handleChange} value={userData.username} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="username" type="text" placeholder="user name" />
                    </div>

                    <button className="w-full md:w-1/2 mb-6 md:mb-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Page;
