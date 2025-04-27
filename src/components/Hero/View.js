import React, {useState, useEffect} from 'react'


function View() {
    const [query, setQuery] = useState('')

    const handleChange = (e)=> {
        setQuery(e.target.value)
    }

    return (
    <div className='min-h-[39rem]'>
        <div className='flex justify-center items-center min-h-[30rem]'>
            Start your query.
        </div>
        
        <div className='flex justify-center items-center min-h-[9rem]'>
            <input
                className='border-2 border-solid'
                value={query}
                type="text"
                placeholder="Enter text here..."
                onChange={handleChange}
                />
        </div>
    </div>
  )
}

export default View