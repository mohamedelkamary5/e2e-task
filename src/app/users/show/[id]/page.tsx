'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation'

const Show = async ({ params }: any) => {
    const router = useRouter()

    interface User {
        id: Number,
        name: String,
        username: String,
        email: String,

    }

    const res = await  axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)

    const user: User =  res.data


    const handleDelete = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params.id)
        });
        router.push('/');
        
    }
    return (
        <div>
            <p>
                name: {user.name}
            </p>
            <p>
                username: {user.username}
            </p>
            <p>
                email: {user.email}
            </p>
            <button onClick={handleDelete} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Delete
            </button>
        </div>
    )
}
export default Show