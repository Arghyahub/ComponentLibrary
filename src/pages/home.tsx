import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col gap-2 bg-[#282828] p-5 w-screen h-screen text-white">
      <h1 className="mb-4 font-bold text-3xl">Component library</h1>
      <ul className="flex flex-col gap-2 list-disc list-inside">
        <li>
          <Link
            to={'/accordion'}
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600 underline"
          >
            Accordion
          </Link>
        </li>
        <li>
          <Link
            to={'/alertModal'}
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600 underline"
          >
            Alert Modal
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
