import React from 'react'

function ChatBox({data}) {
  return (
    <>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}  className={`flex ${key.includes('gpt') || key.includes('grok') ? 'justify-self-end' : ''} } w-[60%] bg-[#e9edf6] p-4 rounded-[2rem] shadow-lg m-12`}>
          <div>
            {key}:
          </div>
          <div className="whitespace-pre-wrap">
            {value}
          </div>
        </div>
      ))}
    </>
  )
}

export default ChatBox