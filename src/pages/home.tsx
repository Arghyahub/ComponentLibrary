import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col gap-2 h-screen w-screen p-5 bg-[#282828] text-white">
      <h1 className="text-3xl font-bold mb-4">Component library</h1>
      <ul className="list-disc list-inside">
        <li>
          <Link
            to={'/accordion'}
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            Accordion
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
