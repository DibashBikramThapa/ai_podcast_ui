import React, {useState, useEffect} from 'react'

import ChatBox from '@/components/ChatBox'

function View({query, setIsStarted, setIsLoading}) {

    const [chat_history, setChatHistory] = useState([])

    useEffect(()=>{

    }, [chat_history])

    useEffect(()=>{
        const get_data =async()=>{
            if(query){
                setIsLoading(true)
                setIsStarted(true)
                let url = process.env.NEXT_PUBLIC_BACKEND_HOST + '/podcast'
                try{
                    let resp = await fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json' // Correct Content-Type header
                            },
                            body: JSON.stringify({'user': query})
                        }
                    )
                    setIsLoading(false)
                    if(resp.status==200){
                        const responseData = await resp.json();
                        setChatHistory(prev => [...prev, ...responseData?.data])
                    }
                    console.log(resp)
                }catch(err){
                    setIsLoading(false)
                    console.error(err)
                }
            }
        }
        get_data()
    }, [query])

    return (
        <div>
            {chat_history?.map((each, i)=>{
                return(
                    <div key={i}>
                        <ChatBox data={each}/>
                    </div>
                )
            })}
        </div>
    )
}

export default View