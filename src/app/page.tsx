import axios from "axios";
import Link from "next/link";

export default async function Home() {
  interface User {
    id: Number,
    name: String,
    username: String,

  }
  const  res = await axios.get('https://jsonplaceholder.typicode.com/users')

  const users: User[] = res.data

  return (
    <div>
      <div className="text-center mt-8">

        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-5">
          <Link href="users/add">
            Add User
          </Link>
        </button>
      </div>
      <ul role="list" className="divide-y divide-gray-100">
        {users.map((user) => (
          <li key={user.id.toString()} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-15 w-15 flex-none rounded-full bg-gray-50" src='https://placehold.co/75' alt="img" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{user.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.username}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <div className="flex">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-5">
                  <Link href={`users/edit/${user.id}`}>
                    Edit
                  </Link>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link href={`users/show/${user.id}`}>
                    Show
                  </Link>
                </button>

              </div>
            </div>
          </li>
        ))}
      </ul>

    </div>
  )
}
