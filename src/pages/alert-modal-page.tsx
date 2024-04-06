import ReModal from '@/components/reusables/re-alert-modal'
import { ArrowLeftFromLine } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const inputTwStyles = 'text-black px-1 py-1 rounded-md text-left text-start'

const AlertModalPage = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('Yup this is the modal')
  const [content, setContent] = useState("I ain' have much for content")
  const [primaryBtnText, setPrimaryBtnText] = useState('Continue')

  return (
    <div className="flex flex-col items-start gap-4 bg-[#282828] px-4 pt-8 pb-10 w-screen h-screen text-white overflow-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex flex-row items-center gap-1 text-blue-400"
      >
        <ArrowLeftFromLine height={16} width={16} />
        back
      </button>
      <h1 className="mb-3 text-3xl underline underline-offset-4">
        Alert Modal
      </h1>
      <div className="flex flex-row flex-wrap gap-3">
        <div className="flex flex-row gap-2">
          <label htmlFor="title">Title: </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            className={`${inputTwStyles}`}
          />
        </div>
        <div className="flex flex-row gap-2">
          <label htmlFor="content">Content: </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            // type="text"
            name="content"
            className={`${inputTwStyles}`}
          />
        </div>
        <div className="flex flex-row gap-2">
          <label htmlFor="primaryBtnText">Primary button text: </label>
          <input
            value={primaryBtnText}
            onChange={(e) => setPrimaryBtnText(e.target.value)}
            type="text"
            name="primaryBtnText"
            className={`${inputTwStyles}`}
          />
        </div>
      </div>

      <h1 className="mt-2 font-semibold text-2xl">Result:</h1>
      <button
        onClick={() => setOpen(true)}
        className="bg-gray-200 px-2 py-1 rounded-md text-black"
      >
        Show Alert modal
      </button>
      <div className="flex">
        <ReModal
          title={title}
          content={content}
          open={open}
          setOpen={setOpen}
          primaryBtnText={primaryBtnText}
        />
      </div>
    </div>
  )
}

export default AlertModalPage
