import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-screen p-5">
      <Link to={'/accordion'}>Accordion</Link>
    </div>
  )
}

export default Home
