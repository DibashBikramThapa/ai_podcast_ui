import React, {useState, useEffect} from 'react'
import ChatHistory from '@/components/ChatHistory/View'


function View() {
    const [query, setQuery] = useState('')
    const [isStarted, setIsStarted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [final_query, setFinalQuery] = useState('')

    const handleChange = (e)=> {
        setQuery(e.target.value)
    }

    const onSubmit = ()=>{
        setQuery('')
        setFinalQuery(query)
    }

    return (
    <div className='min-h-[39rem]'>
        <div className='flex justify-center items-center min-h-[30rem] max-w-[80rem] flex-col justify-self-center'>
            {!isStarted?
                <h3 className=' bg-[#e9edf6] p-4 rounded-[2rem] shadow-lg m-12'>Start your podcast title.</h3>
                :
            ''
            }
        <ChatHistory query={final_query} setIsStarted={setIsStarted} setIsLoading={setIsLoading}/>
        </div>
        <div className='flex justify-center items-center min-h-[9rem] gap-x-[1.5rem]'>
            <input
                className='border-2 border-solid p-3'
                value={query}
                type="text"
                placeholder="Enter text here..."
                onChange={handleChange}
                disabled={isLoading}
                />
            <a>
                <button
                    type='submit'
                    className={`bg-[#e9edf6] p-3 rounded-[2rem] shadow-lg ${isLoading? '': 'cursor-pointer'}`}
                    onClick={onSubmit}
                    disabled={isLoading}>Submit
                </button></a>
        </div>
    </div>
  )
}

export default View