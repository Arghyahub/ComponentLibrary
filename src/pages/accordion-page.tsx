import ReAccordion from '@/components/reusables/re-accordion'
import { useState } from 'react'
import { ArrowLeftFromLine } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface TypeData {
  button: string
  content: string
}

const inputTwStyles = 'px-2 py-1 rounded-md bg-white text-black'

const AccordionPage = () => {
  const navigate = useNavigate()
  const [data, setData] = useState<TypeData[]>([
    { button: 'Button 1', content: 'Dummy content' },
  ])

  const [componentTwStyles, setComponentTwStyles] = useState(
    'w-60 bg-white px-2 rounded-md text-black'
  )
  const [buttonTwStyles, setButtonTwStyles] = useState('underline')
  const [contentTwStyles, setContentTwStyles] = useState(
    'text-blue-700 font-bold'
  )
  const [behaviour, setbehaviour] = useState<'single' | 'multiple'>('single')

  const updateData = (idx: number, val: string, key: 'button' | 'content') => {
    const cpy = [...data]
    cpy[idx][key] = val
    setData(cpy)
  }

  return (
    <div className="flex flex-col gap-3 bg-[#282828] px-4 pt-8 pb-10 w-screen h-screen text-white overflow-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex flex-row items-center gap-1 text-blue-400"
      >
        <ArrowLeftFromLine height={16} width={16} />
        back
      </button>
      <h1 className="flex flex-row items-center gap-2 mb-6 text-3xl text-bold underline underline-offset-4">
        Accordion
      </h1>
      <h1 className="font-semibold text-2xl">Configure styles</h1>
      <div className="flex flex-row flex-wrap gap-4 mt-2">
        <div className="flex flex-row gap-2">
          <label htmlFor="cmpstyl">Component Style:</label>
          <textarea
            onChange={(e) => setComponentTwStyles(e.target.value)}
            value={componentTwStyles}
            name="cmpstyl"
            className={`${inputTwStyles}`}
          />
        </div>
        <div className="flex flex-row gap-2">
          <label htmlFor="btnstyl">Button Style:</label>
          <textarea
            onChange={(e) => setButtonTwStyles(e.target.value)}
            value={buttonTwStyles}
            name="btnstyl"
            className={`${inputTwStyles}`}
          />
        </div>
        <div className="flex flex-row gap-2">
          <label htmlFor="cntstyl">Content Style:</label>
          <textarea
            onChange={(e) => setContentTwStyles(e.target.value)}
            value={contentTwStyles}
            name="cntstyl"
            className={`${inputTwStyles}`}
          />
        </div>
      </div>
      <h1 className="mt-5 font-semibold text-2xl">Configure content here</h1>
      {data.map((item, idx) => (
        <div key={idx} className="flex flex-row flex-wrap items-center gap-4">
          <div className="flex flex-row gap-2">
            <label htmlFor="btn">Button</label>
            <input
              name="btn"
              value={item.button}
              onChange={(e) => updateData(idx, e.target.value, 'button')}
              type="text"
              className={`${inputTwStyles}`}
            />
          </div>
          <div className="flex flex-row gap-2">
            <label htmlFor="cnt">Content</label>
            <input
              name="cnt"
              type="text"
              value={item.content}
              onChange={(e) => updateData(idx, e.target.value, 'content')}
              className={`${inputTwStyles}`}
            />
          </div>
          {idx === data.length - 1 && (
            <button
              onClick={() =>
                setData((prev) => [...prev, { button: '', content: '' }])
              }
              className="flex bg-blue-500 px-3 py-1 rounded-md text-white"
            >
              Add
            </button>
          )}
        </div>
      ))}
      <div className="flex flex-row gap-4 mt-4">
        <h1 className="font-semibold text-2xl">Result:</h1>
        <div className="flex flex-row">
          <button
            onClick={() => setbehaviour('single')}
            className={`w-20 text-black px-2 py-1 rounded-l-md ${
              behaviour === 'single' ? 'bg-blue-500' : 'bg-blue-300'
            }`}
          >
            single
          </button>
          <button
            onClick={() => setbehaviour('multiple')}
            className={`w-20 text-black px-2 py-1 rounded-r-md ${
              behaviour === 'multiple' ? 'bg-blue-500' : 'bg-blue-300'
            }`}
          >
            multiple
          </button>
        </div>
      </div>
      <ReAccordion
        data={data.filter((elem) => {
          if (elem.button != '' && elem.content != '') return elem
        })}
        buttonTwStyles={buttonTwStyles}
        contentTwStyles={contentTwStyles}
        componentTwStyles={componentTwStyles}
        behaviour={behaviour}
      />
      <div className="flex flex-col mt-4">
        <h1 className="font-semibold text-2xl">Usage:</h1>
        <p>
          You only have to pass{' '}
          <code className="bg-gray-600 px-2 py-1 rounded-sm">{`[{button: '${data[0].button}', content: '${data[0].content}'}, {...}]`}</code>
        </p>
        <p>And it will generate all the accordions for you</p>
        <p className="mt-2">You can also pass props to style the accordion</p>
        <p className="flex flex-row flex-wrap gap-2 mt-1 break-words">
          Like:{' '}
          <code className="bg-gray-600 px-2 py-1 rounded-sm">
            componentTwStyles
          </code>
          <code className="bg-gray-600 px-2 py-1 rounded-sm">
            buttonTwStyles
          </code>
          <code className="bg-gray-600 px-2 py-1 rounded-sm">
            contentTwStyles
          </code>
        </p>
      </div>
    </div>
  )
}

export default AccordionPage
